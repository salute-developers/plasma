import { useEffect, RefObject } from 'react';

const CLOSE_DOWN_RATIO = 0.25;

const isInteractive = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest('button, a, input, textarea, select, [role="button"]'));

export const useBottomSheetDrag = (args: {
    panelRef: RefObject<HTMLDivElement>;
    handleRef: RefObject<HTMLDivElement>;
    enabled: boolean;
    onClose: () => void;
}) => {
    const { panelRef, handleRef, enabled, onClose } = args;

    useEffect(() => {
        const panel = panelRef.current;
        const handle = handleRef.current;

        if (!enabled || !panel || !handle) {
            return undefined;
        }

        let startY = 0;
        let currentY = 0;
        let startHeight = 0;
        let tracking = false;

        const onPointerMove = (event: PointerEvent) => {
            if (!tracking) {
                return;
            }

            currentY = event.clientY;
            const deltaY = currentY - startY;

            if (deltaY > 0) {
                panel.style.transform = `translateY(${deltaY}px)`;
            }

            if (event.cancelable) {
                event.preventDefault();
            }
        };

        const onPointerEnd = () => {
            if (!tracking) {
                return;
            }

            tracking = false;
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerEnd);
            window.removeEventListener('pointercancel', onPointerEnd);

            const deltaY = currentY - startY;

            panel.style.transition = '';
            panel.style.transform = '';

            if (deltaY > startHeight * CLOSE_DOWN_RATIO) {
                onClose();
            }
        };

        const onPointerDown = (event: PointerEvent) => {
            if (isInteractive(event.target)) {
                return;
            }

            tracking = true;
            startY = event.clientY;
            currentY = event.clientY;
            startHeight = panel.offsetHeight;
            panel.style.transition = 'none';

            window.addEventListener('pointermove', onPointerMove, { passive: false });
            window.addEventListener('pointerup', onPointerEnd);
            window.addEventListener('pointercancel', onPointerEnd);

            event.preventDefault();
        };

        handle.addEventListener('pointerdown', onPointerDown);

        return () => {
            handle.removeEventListener('pointerdown', onPointerDown);
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerEnd);
            window.removeEventListener('pointercancel', onPointerEnd);
        };
    }, [enabled, panelRef, handleRef, onClose]);
};
