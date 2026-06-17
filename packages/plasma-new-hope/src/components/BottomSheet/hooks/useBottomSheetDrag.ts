import { useEffect, useRef, RefObject } from 'react';

export type SheetHeightState = 'auto' | 'collapsed' | 'expanded';

const COLLAPSED_RATIO = 0.5;
const MAX_HEIGHT_FALLBACK_RATIO = 0.9;
const CLOSE_DOWN_RATIO = 0.25;
const MOVE_THRESHOLD_PX = 5;

const isInteractive = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest('button, a, input, textarea, select, [role="button"]'));

export const useBottomSheetDrag = (args: {
    panelRef: RefObject<HTMLDivElement>;
    handleRef: RefObject<HTMLDivElement>;
    enabled: boolean;
    overflows: boolean;
    onSettle: (state: SheetHeightState) => void;
    onClose: () => void;
}) => {
    const { panelRef, handleRef, enabled, overflows, onSettle, onClose } = args;

    const startY = useRef(0);
    const currentY = useRef(0);
    const startHeight = useRef(0);
    const tracking = useRef(false);
    const hasMoved = useRef(false);

    useEffect(() => {
        const panel = panelRef.current;
        const handle = handleRef.current;

        if (!enabled || !panel || !handle) {
            return undefined;
        }

        const getMaxPx = () => {
            const parsed = parseFloat(getComputedStyle(panel).maxHeight);

            return Number.isFinite(parsed) && parsed > 0 ? parsed : window.innerHeight * MAX_HEIGHT_FALLBACK_RATIO;
        };

        const onPointerMove = (event: PointerEvent) => {
            if (!tracking.current) {
                return;
            }

            currentY.current = event.clientY;
            const deltaY = currentY.current - startY.current;

            if (Math.abs(deltaY) > MOVE_THRESHOLD_PX) {
                hasMoved.current = true;
            }

            if (deltaY > 0) {
                panel.style.height = '';
                panel.style.transform = `translateY(${deltaY}px)`;
            } else if (overflows) {
                panel.style.transform = '';
                panel.style.height = `${Math.min(startHeight.current - deltaY, getMaxPx())}px`;
            }

            if (event.cancelable) {
                event.preventDefault();
            }
        };

        const onPointerEnd = () => {
            if (!tracking.current) {
                return;
            }

            tracking.current = false;
            window.removeEventListener('pointermove', onPointerMove);
            window.removeEventListener('pointerup', onPointerEnd);
            window.removeEventListener('pointercancel', onPointerEnd);

            const deltaY = currentY.current - startY.current;

            panel.style.transition = '';
            panel.style.transform = '';
            panel.style.height = '';

            if (!hasMoved.current) {
                return;
            }

            if (overflows) {
                const collapsedPx = window.innerHeight * COLLAPSED_RATIO;
                const maxPx = getMaxPx();
                const projected = Math.min(Math.max(startHeight.current - deltaY, 0), maxPx);

                if (projected < collapsedPx / 2) {
                    onClose();
                } else if (projected < (collapsedPx + maxPx) / 2) {
                    onSettle('collapsed');
                } else {
                    onSettle('expanded');
                }

                return;
            }

            if (deltaY > startHeight.current * CLOSE_DOWN_RATIO) {
                onClose();
            }
        };

        const onPointerDown = (event: PointerEvent) => {
            if (isInteractive(event.target)) {
                return;
            }

            tracking.current = true;
            hasMoved.current = false;
            startY.current = event.clientY;
            currentY.current = event.clientY;
            startHeight.current = panel.offsetHeight;
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
    }, [enabled, overflows, panelRef, handleRef, onSettle, onClose]);
};
