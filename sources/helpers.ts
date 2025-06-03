import * as Dropdown from "./index";
import { Constructs } from "@nikonov-alex/functional-library";
const { local } = Constructs;


export const updateOptions = <T>(
    state: Dropdown.State<T>,
    update: { ( combinedOptions: Dropdown.Option<T>[] ): Dropdown.Option<T>[] }
): Dropdown.State<T> =>
    local( Dropdown.is_opened( state ) ? Dropdown.close( state ) : state, state =>
    local( {
        makeOptions: ( combinedOptions: Dropdown.Option<T>[], selectedIndex: number = 0 ): Dropdown.Options<T> =>
            0 === selectedIndex
                ? { left: [], value: combinedOptions[0], right: combinedOptions.toSpliced( 0, 1 ) }
                : {
                    left: combinedOptions.slice( 0, selectedIndex ),
                    value: combinedOptions[selectedIndex],
                    right: combinedOptions.slice( selectedIndex + 1 )
                },
        combineOptions: ( options: Dropdown.Options<T> ): Dropdown.Option<T>[] =>
            options.left.concat( options.value ).concat( options.right )
    }, ( { combineOptions, makeOptions } ) =>
    local( combineOptions( state.options ), combinedOptions =>
    local( update( combinedOptions ), updatedOptions =>
    local( updatedOptions.findIndex( option => option.value === Dropdown.getValue( state ) ), newSelectedIndex =>
        Dropdown.set_options( state,
            makeOptions( updatedOptions, -1 === newSelectedIndex ? 0 : newSelectedIndex ))
    )))));

export const updateOption = <T>(
    state: Dropdown.State<T>,
    value: T,
    update: { ( combinedOptions: Dropdown.Option<T>[], index: number ): Dropdown.Option<T>[] }
): Dropdown.State<T> =>
    updateOptions( state, combinedOptions =>
    local( combinedOptions.findIndex( option => option.value === value ), index =>
        -1 === index
            ? combinedOptions
            : update( combinedOptions, index )
    ));

export const addOption = <T>( state: Dropdown.State<T>, option: Dropdown.Option<T> ): Dropdown.State<T> =>
    local( Dropdown.is_opened( state ) ? Dropdown.close( state ) : state, state =>
        Dropdown.set_options( state,
            { ... state.options, right: state.options.right.concat( option ) } )
    );

export const removeOption = <T>( state: Dropdown.State<T>, value: T ): Dropdown.State<T> =>
    updateOption( state, value, ( combinedOptions, removeIndex ) =>
        combinedOptions.toSpliced( removeIndex, 1 ));

export const changeOption = <T>( state: Dropdown.State<T>, value: T, newOption: Dropdown.Option<T> ): Dropdown.State<T> =>
    updateOption( state, value, ( combinedOptions, index ) =>
        combinedOptions.with( index, newOption ));