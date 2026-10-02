import { useEffect, RefObject } from 'react';

export function useDisableScroll(ref: RefObject<HTMLElement>, enabled = true) {
    useEffect(() => {
        if (!enabled || !ref.current) return;

        const el = ref.current;

        // Вертикальный wheel оставляем странице. Горизонтальный жест не должен прокручивать предка.
        const preventHorizontalWheel = (event: WheelEvent) => {
            if (Math.abs(event.deltaX) <= Math.abs(event.deltaY)) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();
        };

        el.addEventListener('wheel', preventHorizontalWheel, { passive: false });

        return () => {
            el.removeEventListener('wheel', preventHorizontalWheel);
        };
    }, [ref, enabled]);
}
