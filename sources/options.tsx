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




type BaseState = { options: Options };

type Opened = { selection: Options };
type Closed = { selection?: undefined };

type State = BaseState | BaseState & Opened;

const is_opened = ( state: State ): state is BaseState & Opened =>
    "selection" in state && typeof state.selection === "object";

const open = ( state: BaseState & Closed ): BaseState & Opened =>
    ( { ... state, selection: state.options } );

const close = ( state: BaseState & Opened ): BaseState & Closed =>
    ( { ... state, selection: undefined } );

const set_selection = ( state: State, selection: Options ): BaseState & Opened =>
    ( { ... state, selection } );

const apply_selection = ( state: BaseState & Opened ): BaseState & Opened =>
    ( { ... state, options: state.selection } );

const selected_index = ( state: BaseState & Opened ): number =>
    state.selection.left.length;

const getOptions = ( state: State ): Options =>
    state.options;

const getValue = ( state: State ): Option =>
    state.options.value;




const Option = ( props: { option: Option, selected?: true } ): HTMLElement =>
    <li className={ "dropdown-option"
        + ( props.option.class ? ` ${props.option.class}` : "" )
    }
        style={ {
            backgroundColor: props.selected ? "blue" : undefined,
            color: props.option.disabled ? "lightgrey" : undefined
        } }
        data-selected={ props.selected }
        data-disabled={ props.option.disabled }
        data-value={ props.option.value }>
            <span className="dropdown-option-label"
                //@ts-ignore
                  style={ OPTION_LABEL_STYLES }
                  dangerouslySetInnerHTML={ { __html: props.option.label } } />
    </li> as HTMLElement;

const render = ( state: State ): HTMLElement =>
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

const get_class = ( option: HTMLElement ): string | undefined =>
    local( option.className
        .replace( "dropdown-option", "" )
        .trim(), className =>
        className === "" ? undefined : className
    );

const find_option = (target: EventTarget | null): HTMLElement | null =>
    target instanceof HTMLElement
        ? target.closest(".dropdown-option")
        : null;

const option_index = ( option: HTMLElement ): number =>
    Array.prototype.indexOf.call( option.parentElement!.children, option );

const find_left_options = ( option: HTMLElement ): HTMLElement[] =>
    Array.prototype.slice.call(
        option.parentElement!.children,
        0,
        option_index( option )
    );

const find_right_options = ( option: HTMLElement ): HTMLElement[] =>
    //@ts-ignore
    Array.prototype.slice.call(
        option.parentElement!.children,
        option_index( option ) + 1
    );

const to_option = ( option: HTMLElement ): Option =>
    ( {
        value: option.dataset.value as string,
        label: option.querySelector( ".dropdown-option-label" )!.innerHTML,
        disabled: is_disabled( option ),
        class: get_class( option )
    } );

const create_options = ( option: HTMLElement ): Options =>
    ( {
        left: find_left_options( option ).map( to_option ),
        value: to_option( option ),
        right: find_right_options( option ).map( to_option )
    } )




const clicked = ( state: State, event: Event ): State =>
    !is_opened( state ) ? state
        : local( find_option( event.target ), option =>
            !option || is_disabled( option )
                ? state
                : close( apply_selection( state ) )
        );

const mouseMoved = ( state: State, event: Event ): State =>
    !is_opened( state ) ? state
        : local( find_option( event.target ), option =>
            !(option instanceof HTMLElement) ||
            option_index( option ) === selected_index( state ) ||
            is_disabled( option )
                ? state
                : set_selection( state, create_options( option ) )
        );

const keydown = ( state: State, event: Event ): State =>
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




const make_initial_state = ( options: Options ): State & Opened =>
    ( open( { options } ) );


export { State, render as Render, mouseMoved, clicked, keydown, make_initial_state, getOptions, getValue, is_opened };