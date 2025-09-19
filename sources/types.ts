import { JSX } from "jsx-dom";

type Option = {
    value: string | null,
    label: string | JSX.Element,
    disabled?: boolean,
    class?: string
};

type Options = {
    left: Option[],
    value: Option,
    right: Option[]
}


const select_prev = ( options: Options ): Options =>
    ({
        left: options.left.slice(0, -1),
        value: options.left[options.left.length - 1],
        right: [options.value].concat(options.right)
    });

const select_prev_recursive = ( options: Options, fallback: Options ): Options =>
    0 === options.left.length
        ? fallback
        : options.left[options.left.length - 1].disabled
            ? select_prev_recursive( select_prev( options ), fallback )
            : select_prev( options );

const maybe_select_prev = ( options: Options ): Options =>
    select_prev_recursive( options, options );


const select_next = ( options: Options ): Options =>
    ({
        left: options.left.concat(options.value),
        value: options.right[0],
        right: options.right.slice(1)
    });

const select_next_recursive = ( options: Options, fallback: Options ): Options =>
    0 === options.right.length
        ? fallback
        : options.right[0].disabled
            ? select_next_recursive( select_next( options ), fallback )
            : select_next( options );

const maybe_select_next = ( options: Options ): Options =>
    select_next_recursive( options, options );


export { Option, Options, maybe_select_prev, maybe_select_next };