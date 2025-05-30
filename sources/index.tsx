import * as Reactor from "@nikonov-alex/reactor";
import { Option, Options, maybe_select_prev, maybe_select_next } from "./types";
import * as OptionsComponent from "./options";
import { Constructs } from "@nikonov-alex/functional-library";
const { local } = Constructs;
import { DetailedHTMLProps, HTMLAttributes } from "jsx-dom/types";
const merge = require('lodash.merge');



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

const VALID: [ValidityStateFlags, string] = [ {}, "" ];




type HasFocused = { focused: true };
type NoFocused = { focused?: undefined };

const has_focused = <T extends {}>( data: T ): data is T & HasFocused =>
    "focused" in data && true === data.focused;

const set_focused = <T extends {}>( data: T ): T & HasFocused =>
    ( { ... data, focused: true } );

const unset_focused = <T extends {}>( data: T & HasFocused ): T & NoFocused =>
    ( { ... data, focused: undefined } );




type HasOpened<T> = { opened: OptionsComponent.State<T> };
type NoOpened = { opened?: undefined };

const has_opened = <T extends {}, D>( data: T ): data is T & HasOpened<D> =>
    "opened" in data && typeof data.opened === "object";

const set_opened = <T extends {}, D>( data: T, opened: OptionsComponent.State<D> ): T & HasOpened<D> =>
    has_opened<T, D>( data ) && data.opened === opened
        ? data
        : { ... data, opened };

const remove_opened = <T extends {}, D>( data: T & HasOpened<D> ): T & NoOpened =>
    ( { ... data, opened: undefined } );




type Inactive<T> = {
    options: Options<T>
};
type Focused<T> = Inactive<T> & HasFocused;
type Opened<T> = Focused<T> & HasOpened<T>;

type State<T> = (Inactive<T> | Focused<T> | Opened<T>);

const set_options = <D, T extends Inactive<D>>( data: T, options: Options<D> ): T =>
    data.options === options
        ? data
    : ( { ... data, options } );

const is_focused = <S extends {}, D>( state: S ): state is S & Focused<D> =>
    has_focused( state );

const is_opened = <S extends {}, D>( state: S ): state is S & Opened<D> =>
    is_focused( state ) && has_opened( state );

const focus = <D, S extends Inactive<D>>( state: S & NoFocused ): S & Focused<D> =>
    set_focused( state );

const leave = <D, S extends Inactive<D>>( state: S & Focused<D> & NoOpened ): S =>
    unset_focused( state );

const open = <D, S extends  Focused<D>>( state: S & NoOpened ): S & Opened<D> =>
    set_opened( state,
        OptionsComponent.make_initial_state( state.options ) );

const close = <S extends {}, D>( state: S & Opened<D> ): S & Focused<D> =>
    remove_opened( set_options( state, OptionsComponent.getOptions( state.opened ) ) );

const maybeClose = <S extends {}, D>( state: S & Opened<D> ): S & Focused<D> | S & Opened<D> =>
    !OptionsComponent.is_opened( state.opened )
        ? close( state )
        : state;





const Value = <T,>( state: State<T>): HTMLElement =>
    <div className="dropdown-value"
        //@ts-ignore
         style={ VALUE_STYLES }>{
            is_opened( state )
                ? OptionsComponent.getValue( state.opened ).label
                : state.options.value.label
    }</div> as HTMLElement;

const is_options_event = ( event: Event ): boolean =>
    event.target instanceof HTMLElement &&
    event.target.matches( ".dropdown-options, .dropdown-options *" );





const onFocus = <T,>(state: State<T>, event: Event): State<T> =>
    !is_focused<State<T>, T>( state )
        ? focus( state )
    : state;

const onBlur = <T,>(state: State<T>, event: Event): State<T> =>
    is_focused( state )
        ? leave( is_opened( state )
            ? close( state )
            : state )
    : state;

const onClick = <T,>( state: State<T>, event: Event ): State<T> =>
    has_focused<State<T>>( state )
        ? has_opened<State<T>, T>( state )
            ? maybeClose(
                set_opened(
                    state,
                    OptionsComponent.clicked( state.opened, event )
                )
            )
        : open( state )
    : open( focus( state ) )

const onMouseOver = <T,>( state: State<T>, event: Event ): State<T> =>
    !is_opened( state ) || !is_options_event( event )
        ? state
    : set_opened( state,
        OptionsComponent.mouseMoved( state.opened, event ) )

const focusedKeydown = <S extends {}, T>( state: S & Focused<T> & NoOpened, event: Event ): S =>
    (event as KeyboardEvent).ctrlKey
        ? state
    : (event as KeyboardEvent).altKey
        ? [ "ArrowDown", "ArrowUp" ].includes( (event as KeyboardEvent).code )
            ? open<T, S & Focused<T> & NoOpened>( state )
            : state
    : [ "Enter", "Space" ].includes( (event as KeyboardEvent).code )
        ? open<T, S & Focused<T> & NoOpened>( state )
    : "ArrowDown" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_next( state.options ) )
    : "ArrowLeft" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_prev( state.options ) )
    : "ArrowUp" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_prev( state.options ) )
    : "ArrowRight" === (event as KeyboardEvent).code
        ? set_options( state, maybe_select_next( state.options ) )
    : state;

const onKeydown = <T,>( state: State<T>, event: Event ): State<T> =>
    !is_focused<State<T>, T>( state )
        ? state
    : has_opened<State<T>, T>( state )
        ? maybeClose(
            set_opened( state, OptionsComponent.keydown( state.opened, event ) ))
        : focusedKeydown( state, event );




const getValue = <T,>( state: State<T> ): T | null =>
    state.options.value.value;




const valueChanged = <T,>( oldState: State<T>, newState: State<T> ): boolean =>
    !is_opened( newState ) && getValue( oldState ) !== getValue( newState );

const changeEvent = <T,>( state: State<T> ): Event =>
    new CustomEvent( "change", { detail: getValue( state ), bubbles: true } );




const hasValue = <T,>( state: State<T> ): [ValidityStateFlags, string] =>
    !getValue( state )
        ? [ { valueMissing: true }, "This field is required" ]
        : VALID;




class Dropdown extends HTMLElement {
    static formAssociated = true;
    public readonly internals = this.attachInternals();
}

customElements.define( "nikonov-dropdown", Dropdown );

declare module "jsx-dom" {
    namespace JSX {
        interface IntrinsicElements {
            "nikonov-dropdown": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
        }
    }
}


function make<T,>( args: {
    options: Options<T>,
    id?: string,
    className?: string,
    required?: boolean
} & Partial<Reactor.Args<State<T>>> ): Reactor.Type<State<T>> {

    const render = (state: State<T>): HTMLElement =>
        <div className={ "dropdown"
            + (is_opened( state ) ? " opened" : "")
            + (args.className ? ` ${args.className}` : "")
        }
             tabIndex={ 0 }
            //@ts-ignore
             style={ CONTAINER_STYLES }>
            <Value { ... state } />
            { is_opened( state )
                ? <OptionsComponent.Render { ... state.opened } />
                : <span /> }
        </div> as HTMLElement;




    const validate = ( state: State<T> ): [ValidityStateFlags, string] =>
        args.required
            ? hasValue( state )
        : VALID;

    const formValue = ( state: State<T> ): string =>
        local( getValue( state ), value =>
            null === value
                ? ""
            : typeof value === "string"
                ? value
            : JSON.stringify( value )
        );



    return local( <nikonov-dropdown tabIndex={ -1 } /> as Dropdown, container =>
        Reactor.make<State<T>>( merge( { }, {
            initialState: {
                options: args.options
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
            validation: {
                internals: container.internals,
                validate,
                formValue
            },
            container
        }, args ) )
    );
}

export { Option, State, make, getValue };
export { set_options, is_opened, close };