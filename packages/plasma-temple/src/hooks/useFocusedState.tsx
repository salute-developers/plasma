import { useEffect, useState } from 'react';

export const useFocusedState = <T extends HTMLElement>(ref: React.RefObject<T>): boolean => {
    const [focused, setFocused] = useState(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        const handleFocus = (event: FocusEvent) => {
            event.preventDefault();
            setFocused(true);
        };

        const handleBlur = () => {
            setFocused(false);
        };

        const element = ref.current;

        element.addEventListener('focusin', handleFocus);
        element.addEventListener('focusout', handleBlur);

        return () => {
            element.removeEventListener('focusin', handleFocus);
            element.removeEventListener('focusout', handleBlur);
        };
    }, [ref]);

    return focused;
};
