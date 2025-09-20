import { JSX } from "jsx-dom/types";
import * as Reactor from "@nikonov-alex/reactor";


type State = {
    value: JSX.Element
};


const display = ( state: State ): JSX.Element =>
    state.value.cloneNode( true ) as JSX.Element;


const redraw = ( state: State ): State =>
    ( { ... state } );


const make = ( elem: JSX.Element ): Reactor.Type<State> =>
    Reactor.make( {
        initialState: { value: elem },
        display,
        events: {
            "change": redraw,
            "input": redraw
        }
    } );

export { State, make };