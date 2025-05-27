type Option<T> = {
    value: T,
    label: string,
    disabled?: boolean,
    class?: string
};

type Options<T> = {
    left: Option<T>[],
    value: Option<T>,
    right: Option<T>[]
}



const select_prev = <T>( options: Options<T> ): Options<T> =>
    ({
        left: options.left.slice(0, -1),
        value: options.left[options.left.length - 1],
        right: [options.value].concat(options.right)
    });

const select_prev_recursive = <T>( options: Options<T>, fallback: Options<T> ): Options<T> =>
    0 === options.left.length
        ? fallback
        : options.left[options.left.length - 1].disabled
            ? select_prev_recursive( select_prev( options ), fallback )
            : select_prev( options );

const maybe_select_prev = <T>( options: Options<T> ): Options<T> =>
    select_prev_recursive( options, options );


const select_next = <T>( options: Options<T> ): Options<T> =>
    ({
        left: options.left.concat(options.value),
        value: options.right[0],
        right: options.right.slice(1)
    });

const select_next_recursive = <T>( options: Options<T>, fallback: Options<T> ): Options<T> =>
    0 === options.right.length
        ? fallback
        : options.right[0].disabled
            ? select_next_recursive( select_next( options ), fallback )
            : select_next( options );

const maybe_select_next = <T>( options: Options<T> ): Options<T> =>
    select_next_recursive( options, options );


export { Option, Options, maybe_select_prev, maybe_select_next };