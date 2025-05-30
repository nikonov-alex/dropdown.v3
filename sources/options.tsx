import { Constructs } from "@nikonov-alex/functional-library";
const { local } = Constructs;
import { Option, Options, maybe_select_prev, maybe_select_next } from "./types";


const OPTIONS_STYLES = {
    position: "absolute",
    top: "100%",
    left: 0,
    width: "100%",
    listStyleType: "none",
    paddingLeft: 0,
    margin: 0,
    overflow: "hidden",
    boxSizing: "border-box",
    zIndex: 1
};

const OPTION_LABEL_STYLES = {
    display: "inline-block",
    lineHeight: "initial",
    verticalAlign: "middle",
    width: "100%",
    boxSizing: "border-box"
};




type BaseState<T> = { options: Options<T> };

type Opened<T> = { selection: Options<T> };
type Closed = { selection?: undefined };

type State<T> = BaseState<T> | BaseState<T> & Opened<T>;

const is_opened = <T,>( state: State<T> ): state is BaseState<T> & Opened<T> =>
    "selection" in state && typeof state.selection === "object";

const open = <T,>( state: BaseState<T> & Closed ): BaseState<T> & Opened<T> =>
    ( { ... state, selection: state.options } );

const close = <T,>( state: BaseState<T> & Opened<T> ): BaseState<T> & Closed =>
    ( { ... state, selection: undefined } );

const set_selection = <T,>( state: State<T>, selection: Options<T> ): BaseState<T> & Opened<T> =>
    ( { ... state, selection } );

const apply_selection = <T,>( state: BaseState<T> & Opened<T> ): BaseState<T> & Opened<T> =>
    ( { ... state, options: state.selection } );

const selected_index = <T,>( state: BaseState<T> & Opened<T> ): number =>
    state.selection.left.length;

const getOptions = <T,>( state: State<T> ): Options<T> =>
    state.options;

const getValue = <T,>( state: State<T> ): Option<T> =>
    state.options.value;




const Option = <T,>( props: {
    option: Option<T>,
    selected?: true
} ): HTMLElement =>
    <li className={ "dropdown-option"
        + ( props.option.class ? ` ${props.option.class}` : "" )
    }
        style={ {
            backgroundColor: props.selected ? "blue" : undefined,
            color: props.option.disabled ? "lightgrey" : undefined
        } }
        data-selected={ props.selected }
        data-disabled={ props.option.disabled }>
            <span className="dropdown-option-label"
                //@ts-ignore
                  style={ OPTION_LABEL_STYLES }>
                { props.selected && props.option.label instanceof HTMLElement
                    ? props.option.label.cloneNode( true ) as HTMLElement
                    : props.option.label }
            </span>
    </li> as HTMLElement;

const render = <T,>( state: State<T> ): HTMLElement =>
    !is_opened( state )
        ? <span /> as HTMLElement
        : <ul className="dropdown-options"
            //@ts-ignore
              style={ OPTIONS_STYLES }>
            { state.selection.left.map( option => <Option option={ option } /> ) }
            <Option option={ state.selection.value } selected={ true } />
            { state.selection.right.map( option => <Option option={ option } /> ) }
        </ul> as HTMLElement;

const is_disabled = ( option: HTMLElement ): boolean =>
    "disabled" in option.dataset;

const find_option = (target: EventTarget | null): HTMLElement | null =>
    target instanceof HTMLElement
        ? target.closest(".dropdown-option")
        : null;

const option_index = ( option: HTMLElement ): number =>
    Array.prototype.indexOf.call( option.parentElement!.children, option );

const create_options = <T,>( state: State<T> & Opened<T>, option: HTMLElement ): Options<T> =>
    local( state.selection.left.concat( state.selection.value ).concat( state.selection.right ), options =>
    local( option_index( option ), selectedIndex => (
        {
            left: options.slice( 0, selectedIndex ),
            value: options[selectedIndex],
            right: options.slice( selectedIndex + 1 ),
        }
    )));




const clicked = <T,>( state: State<T>, event: Event ): State<T> =>
    !is_opened( state ) ? state
        : local( find_option( event.target ), option =>
            !option || is_disabled( option )
                ? state
                : close( apply_selection( state ) )
        );

const mouseMoved = <T,>( state: State<T>, event: Event ): State<T> =>
    !is_opened( state ) ? state
        : local( find_option( event.target ), option =>
            !(option instanceof HTMLElement) ||
            option_index( option ) === selected_index( state ) ||
            is_disabled( option )
                ? state
                : set_selection( state, create_options( state, option ) )
        );

const keydown = <T,>( state: State<T>, event: Event ): State<T> =>
    !is_opened( state ) ? state
        : (event as KeyboardEvent).altKey
            ? [ "ArrowDown", "ArrowUp" ].includes( (event as KeyboardEvent).code )
                ? close( state )
                : state
            : [ "Escape", "Enter" ].includes( (event as KeyboardEvent).code )
                ? close( "Enter" === (event as KeyboardEvent).code
                    ? apply_selection( state )
                    : state
                )
                : "ArrowDown" === (event as KeyboardEvent).code
                    ? apply_selection(
                        set_selection( state,
                            maybe_select_next( state.selection ) ) )
                    : "ArrowUp" === (event as KeyboardEvent).code
                        ? apply_selection(
                            set_selection( state,
                                maybe_select_prev( state.selection ) ) )
                        : state;




const make_initial_state = <T,>( options: Options<T> ): State<T> & Opened<T> =>
    ( open( { options } ) );


export { State, render as Render, mouseMoved, clicked, keydown, make_initial_state, getOptions, getValue, is_opened };