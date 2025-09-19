import * as Dropdown from "./index";
import { Constructs } from "@nikonov-alex/functional-library";
const { local } = Constructs;


export const selectFirst = ( state: Dropdown.State ): Dropdown.State =>
    0 === state.options.left.length
        ? state
    : ( {
        ... state,
        options: {
            left: [],
            value: state.options.left[0],
            right: state.options.left.toSpliced( 0, 1 )
                .concat( state.options.value )
                .concat( state.options.right )
        }
    } );

export const updateOptions = (
    state: Dropdown.State,
    update: { ( combinedOptions: Dropdown.Option[] ): Dropdown.Option[] }
): Dropdown.State =>
    local( Dropdown.is_opened( state ) ? Dropdown.close( state ) : state, state =>
    local( {
        makeOptions: ( combinedOptions: Dropdown.Option[], selectedIndex: number = 0 ): Dropdown.Options =>
            0 === selectedIndex
                ? { left: [], value: combinedOptions[0], right: combinedOptions.toSpliced( 0, 1 ) }
                : {
                    left: combinedOptions.slice( 0, selectedIndex ),
                    value: combinedOptions[selectedIndex],
                    right: combinedOptions.slice( selectedIndex + 1 )
                },
        combineOptions: ( options: Dropdown.Options ): Dropdown.Option[] =>
            options.left.concat( options.value ).concat( options.right )
    }, ( { combineOptions, makeOptions } ) =>
    local( combineOptions( state.options ), combinedOptions =>
    local( update( combinedOptions ), updatedOptions =>
    local( updatedOptions.findIndex( option => option.value === Dropdown.getValue( state ) ), newSelectedIndex =>
        Dropdown.set_options( state,
            makeOptions( updatedOptions, -1 === newSelectedIndex ? 0 : newSelectedIndex ))
    )))));

export const updateOption = (
    state: Dropdown.State,
    value: string,
    update: { ( combinedOptions: Dropdown.Option[], index: number ): Dropdown.Option[] }
): Dropdown.State =>
    updateOptions( state, combinedOptions =>
    local( combinedOptions.findIndex( option => option.value === value ), index =>
        -1 === index
            ? combinedOptions
            : update( combinedOptions, index )
    ));

export const addOption = ( state: Dropdown.State, option: Dropdown.Option ): Dropdown.State =>
    local( Dropdown.is_opened( state ) ? Dropdown.close( state ) : state, state =>
        Dropdown.set_options( state,
            { ... state.options, right: state.options.right.concat( option ) } )
    );

export const removeOption = ( state: Dropdown.State, value: string ): Dropdown.State =>
    updateOption( state, value, ( combinedOptions, removeIndex ) =>
        combinedOptions.toSpliced( removeIndex, 1 ));

export const changeOption = ( state: Dropdown.State, value: string, newOption: Dropdown.Option ): Dropdown.State =>
    updateOption( state, value, ( combinedOptions, index ) =>
        combinedOptions.with( index, newOption ));