import { useEffect, RefObject } from 'react';

export function useDisableScroll(ref: RefObject<HTMLElement>, enabled = true) {
    useEffect(() => {
        if (!enabled || !ref.current) return;

        const el = ref.current;

        const preventScroll = (e: Event) => {
            e.preventDefault();
            e.stopPropagation();
        };

        el.addEventListener('wheel', preventScroll, { passive: false });
        el.addEventListener('touchmove', preventScroll, { passive: false });

        return () => {
            el.removeEventListener('wheel', preventScroll);
            el.removeEventListener('touchmove', preventScroll);
        };
    }, [ref, enabled]);
}
