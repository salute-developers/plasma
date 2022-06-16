import { useCallback, useEffect, RefObject } from 'react';

export interface UseFocusParams {
    preventScroll?: boolean;
    trigger?: boolean;
}

// TODO: #71 it should be new 'WithAutoFocus'
export function useAutoFocus<T extends HTMLElement>(ref: RefObject<T>, params: UseFocusParams = {}) {
    const { preventScroll, trigger = true } = params;

    const setFocus = useCallback(() => {
        ref.current?.focus({ preventScroll });
        if (ref.current !== document.activeElement) {
            document.addEventListener('transitionend', setFocus, { once: true });
        } else {
            document.removeEventListener('transitionend', setFocus);
        }
    }, [preventScroll]);

    useEffect(() => {
        trigger && setFocus();
        return () => document.removeEventListener('transitionend', setFocus);
    }, [trigger]);

    return setFocus;
}
