import * as Reactor from "@nikonov-alex/reactor";
import { Option, Options, maybe_select_prev, maybe_select_next } from "./types";
import * as OptionsComponent from "./options";
import { StyleInput, JSX } from "jsx-dom/types";
const merge = require('lodash.merge');
import * as helpers from "./helpers";



const CONTAINER_STYLES: StyleInput = {
    position: "relative",
    textAlign: "left",
    cursor: "pointer"
};

const VALUE_STYLES: StyleInput = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    boxSizing: "border-box"
}

const VALID: [ValidityStateFlags, string] = [ {}, "" ];




type HasFocused = { focused: true };
type NoFocused = { focused?: undefined };

const has_focused = <T extends {}>( data: T ): data is T & HasFocused =>
    "focused" in data && true === data.focused;

const set_focused = <T extends {}>( data: T ): T & HasFocused =>
    ( { ... data, focused: true } );

const unset_focused = <T extends {}>( data: T & HasFocused ): T & NoFocused =>
    ( { ... data, focused: undefined } );




type HasOpened = { opened: OptionsComponent.State };
type NoOpened = { opened?: undefined };

const has_opened = <T extends {}>( data: T ): data is T & HasOpened =>
    "opened" in data && typeof data.opened === "object";

const set_opened = <T extends {}>( data: T, opened: OptionsComponent.State ): T & HasOpened =>
    has_opened( data ) && data.opened === opened
        ? data
        : { ... data, opened };

const remove_opened = <T extends {}>( data: T & HasOpened ): T & NoOpened =>
    ( { ... data, opened: undefined } );




type Inactive = {
    options: Options
};
type Focused = Inactive & HasFocused;
type Opened = Focused & HasOpened;

type State = (Inactive | Focused | Opened);

const set_options = <T extends Inactive>( data: T, options: Options ): T =>
    data.options === options
        ? data
    : ( { ... data, options } );

const is_focused = <S extends {}>( state: S ): state is S & Focused =>
    has_focused( state );

const is_opened = <S extends {}>( state: S ): state is S & Opened =>
    is_focused( state ) && has_opened( state );

const focus = <S extends Inactive>( state: S & NoFocused ): S & Focused =>
    set_focused( state );

const leave = <S extends Inactive>( state: S & Focused & NoOpened ): S =>
    unset_focused( state );

const open = <S extends  Focused>( state: S & NoOpened ): S & Opened =>
    set_opened( state,
        OptionsComponent.make_initial_state( state.options ) );

const close = <S extends {}>( state: S & Opened ): S & Focused =>
    remove_opened( set_options( state, OptionsComponent.getOptions( state.opened ) ) );

const maybeClose = <S extends {}>( state: S & Opened ): S & Focused | S & Opened =>
    !OptionsComponent.is_opened( state.opened )
        ? close( state )
        : state;





const Value = ( state: State ): JSX.Element =>
    <div className="dropdown-value"
         style={ VALUE_STYLES }>{
            is_opened( state )
                ? OptionsComponent.getValue( state.opened ).label
                : state.options.value.label
    }</div>;

const is_options_event = ( event: Event ): boolean =>
    event.target instanceof HTMLElement &&
    event.target.matches( ".dropdown-options, .dropdown-options *" );





const onFocus = (state: State, event: Event): State =>
    !is_focused( state )
        ? focus( state )
    : state;

const onBlur = (state: State, event: Event): State =>
    is_focused( state )
        ? leave( is_opened( state )
            ? close( state )
            : state )
    : state;

const onClick = ( state: State, event: Event ): State =>
    has_focused( state )
        ? has_opened( state )
            ? maybeClose(
                set_opened(
                    state,
                    OptionsComponent.clicked( state.opened, event )
                )
            )
        : open( state )
    : open( focus( state ) )

const onMouseOver = ( state: State, event: Event ): State =>
    !is_opened( state ) || !is_options_event( event )
        ? state
    : set_opened( state,
        OptionsComponent.mouseMoved( state.opened, event ) )

const focusedKeydown = <S extends {}>( state: S & Focused & NoOpened, event: Event ): S =>
    (event as KeyboardEvent).ctrlKey
        ? state
    : (event as KeyboardEvent).altKey
        ? [ "ArrowDown", "ArrowUp" ].includes( (event as KeyboardEvent).code )
            ? open( state )
            : state
    : [ "Enter", "Space" ].includes( (event as KeyboardEvent).code )
        ? open( state )
    : "ArrowDown" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_next( state.options ) )
    : "ArrowLeft" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_prev( state.options ) )
    : "ArrowUp" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_prev( state.options ) )
    : "ArrowRight" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_next( state.options ) )
    : state;

const onKeydown = ( state: State, event: Event ): State =>
    !is_focused( state )
        ? state
    : has_opened( state )
        ? maybeClose(
            set_opened( state, OptionsComponent.keydown( state.opened, event ) ))
        : focusedKeydown( state, event );




const getSelected = ( state: State ): Option =>
        state.options.value;

const getValue = ( state: State ): string | null =>
    getSelected( state ).value;




const valueChanged = ( oldState: State, newState: State ): boolean =>
    !is_opened( newState ) && getValue( oldState ) !== getValue( newState );

const changeEvent = ( state: State ): Event =>
    new CustomEvent( "change", { detail: getValue( state ), bubbles: true } );




const hasValue = ( state: State ): [ValidityStateFlags, string] =>
    !getValue( state )
        ? [ { valueMissing: true }, "This field is required" ]
        : VALID;

const formValue = ( state: State ): string =>
    getValue( state ) ?? "";





function make( args: {
    options: Options,
    id?: string,
    className?: string,
    validation?: {
        elementInternals: ElementInternals,
        required?: boolean,
    },
    reactorArgs?: Partial<Reactor.Args<State>>
} ): Reactor.Type<State> {

    const className = args.className ?? "";

    const display = ( state: State ): JSX.Element =>
        <div className={ `dropdown ${ className } ${is_opened( state ) ? "opened" : ""}` }
             tabIndex={ 0 }
             style={ CONTAINER_STYLES }
             data-value={ getValue( state ) ?? undefined }>
            <Value { ... state } />
            { is_opened( state )
                ? <OptionsComponent.Display { ... state.opened } />
                : <span /> }
        </div>;




    const validate = ( state: State ): [ValidityStateFlags, string] =>
        args.validation!.required
            ? hasValue( state )
        : VALID;



    return Reactor.make<State>( merge( { }, {
        initialState: {
            options: args.options
        },
        display,
        events: {
            "focus": onFocus,
            "blur": onBlur,
            "click": onClick,
            "mouseover": onMouseOver,
            "keydown": onKeydown
        },
        emit: [ {
            when: valueChanged,
            emit: changeEvent
        } ],
        id: args.id,
        validation: args.validation ? {
            internals: args.validation.elementInternals,
            validate,
            formValue
        } : undefined
    }, args.reactorArgs ) );
}

type Type = Reactor.Type<State>;
export { Option, State, Type, make, getValue, getSelected, Options };
export { set_options, is_opened, close, helpers };