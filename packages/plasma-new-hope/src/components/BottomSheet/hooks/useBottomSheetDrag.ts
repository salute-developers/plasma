import { useEffect, useRef, RefObject } from 'react';

import type { BottomSheetSnapPoint, BottomSheetSnapPoints } from '../BottomSheet.types';
import { findNearestSnapPoint, getSortedSnapPoints, resolveActiveSnapPoint } from '../../Sheet/utils';
import { applyHeight } from '../utils';

const CLOSE_DOWN_RATIO = 0.25;
const SWIPE_THRESHOLD = 0.2;

const isInteractive = (target: EventTarget | null) =>
    target instanceof Element && Boolean(target.closest('button, a, input, textarea, select, [role="button"]'));

export const useBottomSheetDrag = (args: {
    panelRef: RefObject<HTMLDivElement>;
    handleRef: RefObject<HTMLDivElement>;
    bodyRef: RefObject<HTMLDivElement>;
    enabled: boolean;
    onClose: () => void;
    snapPoints?: BottomSheetSnapPoints;
    initialSnapPoint?: BottomSheetSnapPoint;
    onSnapPointChange?: (snapPoint: BottomSheetSnapPoint) => void;
    onSnapSettled?: () => void;
}) => {
    const {
        panelRef,
        handleRef,
        bodyRef,
        enabled,
        onClose,
        snapPoints,
        initialSnapPoint,
        onSnapPointChange,
        onSnapSettled,
    } = args;

    const snapPointsRef = useRef(snapPoints);
    const initialSnapPointRef = useRef(initialSnapPoint);
    const activeSnapPointRef = useRef(resolveActiveSnapPoint(snapPoints, initialSnapPoint));
    const onCloseRef = useRef(onClose);
    const onSnapPointChangeRef = useRef(onSnapPointChange);
    const onSnapSettledRef = useRef(onSnapSettled);

    snapPointsRef.current = snapPoints;
    initialSnapPointRef.current = initialSnapPoint;
    onCloseRef.current = onClose;
    onSnapPointChangeRef.current = onSnapPointChange;
    onSnapSettledRef.current = onSnapSettled;

    const commitSnapPoint = (next: BottomSheetSnapPoint) => {
        if (next === activeSnapPointRef.current) {
            return;
        }

        activeSnapPointRef.current = next;
        onSnapPointChangeRef.current?.(next);
    };

    useEffect(() => {
        const panel = panelRef.current;
        const handle = handleRef.current;
        const body = bodyRef.current;

        if (!enabled || !panel) {
            return undefined;
        }

        let startY = 0;
        let currentY = 0;
        let startHeight = 0;
        let tracking = false;

        const canStartDrag = (target: EventTarget | null) => {
            if (isInteractive(target)) {
                return false;
            }

            if (!(target instanceof Node)) {
                return true;
            }

            if (handle?.contains(target)) {
                return true;
            }

            return !(body?.contains(target) && body.scrollTop > 0);
        };

        const startDrag = (clientY: number) => {
            tracking = true;
            startY = clientY;
            currentY = clientY;
            startHeight = panel.offsetHeight;
            panel.style.transition = 'none';
        };

        const moveDrag = (clientY: number, event: { cancelable: boolean; preventDefault: () => void }) => {
            if (!tracking) {
                return;
            }

            currentY = clientY;
            const deltaY = currentY - startY;
            const points = snapPointsRef.current;

            if (points?.length) {
                const { pointsPx } = getSortedSnapPoints(points, window.innerHeight);
                const maxHeight = pointsPx[pointsPx.length - 1];

                // На верхней точке жест вверх отдаём нативному скроллу контента
                if (deltaY < 0 && startHeight >= maxHeight) {
                    return;
                }

                const nextHeight = Math.min(maxHeight, Math.max(0, startHeight - deltaY));

                if (deltaY !== 0 && event.cancelable) {
                    event.preventDefault();
                }

                applyHeight(panel, nextHeight);
                return;
            }

            if (deltaY > 0) {
                if (event.cancelable) {
                    event.preventDefault();
                }

                panel.style.transform = `translateY(${deltaY}px)`;
            }
        };

        const endDrag = () => {
            if (!tracking) {
                return;
            }

            tracking = false;
            panel.style.transition = '';

            const deltaY = currentY - startY;
            const points = snapPointsRef.current;

            if (points?.length) {
                const { points: sortedPoints, pointsPx } = getSortedSnapPoints(points, window.innerHeight);
                const rawHeight = startHeight - deltaY;
                const currentHeight = Math.max(0, rawHeight);
                const lowestHeight = pointsPx[0];

                if (rawHeight < lowestHeight * (1 - SWIPE_THRESHOLD)) {
                    onCloseRef.current();
                    return;
                }

                const nearestIndex = findNearestSnapPoint(currentHeight, pointsPx);

                applyHeight(panel, pointsPx[nearestIndex]);
                commitSnapPoint(sortedPoints[nearestIndex]);
                onSnapSettledRef.current?.();
                return;
            }

            panel.style.transform = '';

            if (deltaY > startHeight * CLOSE_DOWN_RATIO) {
                onCloseRef.current();
            }
        };

        const onTouchStart = (event: TouchEvent) => {
            if (!canStartDrag(event.target)) {
                return;
            }

            startDrag(event.changedTouches[0].clientY);
        };

        const onTouchMove = (event: TouchEvent) => {
            moveDrag(event.changedTouches[0].clientY, event);
        };

        const onTouchEnd = () => {
            endDrag();
        };

        const onPointerDown = (event: PointerEvent) => {
            if (event.pointerType === 'touch') {
                return;
            }

            if (!canStartDrag(event.target)) {
                return;
            }

            panel.setPointerCapture(event.pointerId);
            startDrag(event.clientY);
        };

        const onPointerMove = (event: PointerEvent) => {
            if (event.pointerType === 'touch') {
                return;
            }

            moveDrag(event.clientY, event);
        };

        const onPointerUp = (event: PointerEvent) => {
            if (event.pointerType === 'touch') {
                return;
            }

            if (panel.hasPointerCapture(event.pointerId)) {
                panel.releasePointerCapture(event.pointerId);
            }

            endDrag();
        };

        panel.addEventListener('touchstart', onTouchStart);
        panel.addEventListener('touchmove', onTouchMove, { passive: false });
        panel.addEventListener('touchend', onTouchEnd);
        panel.addEventListener('pointerdown', onPointerDown);
        panel.addEventListener('pointermove', onPointerMove, { passive: false });
        panel.addEventListener('pointerup', onPointerUp);

        return () => {
            panel.removeEventListener('touchstart', onTouchStart);
            panel.removeEventListener('touchmove', onTouchMove);
            panel.removeEventListener('touchend', onTouchEnd);
            panel.removeEventListener('pointerdown', onPointerDown);
            panel.removeEventListener('pointermove', onPointerMove);
            panel.removeEventListener('pointerup', onPointerUp);
        };
    }, [enabled, panelRef, handleRef, bodyRef]);

    return {
        activeSnapPointRef,
        snapPointsRef,
        initialSnapPointRef,
    };
};
