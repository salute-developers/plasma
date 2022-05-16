import React from 'react';

export const useFocusedState = <T extends HTMLElement>(ref: React.RefObject<T>): boolean => {
    const [focused, setFocused] = React.useState(false);

    const onFocus = React.useCallback(() => {
        setFocused(true);
    }, []);

    const onBlur = React.useCallback(() => {
        setFocused(false);
    }, []);

    React.useEffect(() => {
        if (ref.current) {
            const element = ref.current;

            element.addEventListener('focusin', onFocus);
            element.addEventListener('focusout', onBlur);

            return () => {
                element.removeEventListener('focusin', onFocus);
                element.removeEventListener('focusout', onBlur);
            };
        }

        return undefined;
    }, [onBlur, onFocus, ref]);

    return focused;
};
