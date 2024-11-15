import * as Reactor from "@nikonov-alex/reactor";
import { Option, Options, maybe_select_prev, maybe_select_next } from "./types";
import * as OptionsComponent from "./options";


const CONTAINER_STYLES = {
    position: "relative",
    textAlign: "left",
    cursor: "pointer"
};

const VALUE_STYLES = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: "100%",
    boxSizing: "border-box"
}




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
        : ( { ... data, opened } );

const remove_opened = <T extends {}>( data: T & HasOpened ): T & NoOpened =>
    ( { ... data, opened: undefined } );




type Inactive = {
    options: Options
};
type Focused = Inactive & HasFocused;
type Opened = Focused & HasOpened;

type State = (Inactive | Focused | Opened) & {
    className?: string
};

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





const Value = ( state: State): HTMLElement =>
    <div className="dropdown-value"
        //@ts-ignore
         style={ VALUE_STYLES }>{
             is_opened( state )
                ? OptionsComponent.getValue( state.opened ).label
                : state.options.value.label
    }</div> as HTMLElement;

const render = (state: State): HTMLElement =>
    <div className={ "dropdown"
        + (is_opened( state ) ? " opened" : "")
        + (state.className ? ` ${state.className}` : "")
    }
         tabIndex={ 0 }
        //@ts-ignore
         style={ CONTAINER_STYLES }>
        <Value { ... state } />
        { is_opened( state )
            ? <OptionsComponent.Render { ... state.opened } />
            : <span /> }
    </div> as HTMLElement;

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




const getValue = ( state: State ): Option =>
    state.options.value




const valueChanged = ( oldState: State, newState: State ): boolean =>
    !is_opened( newState ) && getValue( oldState ) !== getValue( newState );

const changeEvent = ( state: State ): Event =>
    new CustomEvent( "change", { detail: getValue( state ), bubbles: true } );




const make = ( args: {
    options: Options,
    id?: string,
    className?: string,
    styles?: CSSStyleSheet
} ): Reactor.Type<State> => Reactor.make( {
    initialState: {
        options: args.options,
        className: args.className
    },
    render,
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
    styles: args.styles
} );

export { Option, State, make };
