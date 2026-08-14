import throttle from 'lodash.throttle';
import { useEffect, useRef, useState, RefObject } from 'react';

import type { SheetSnapPoint, SheetSnapPoints } from '../Sheet.types';
import { findNearestSnapPoint, getSortedSnapPoints, resolveActiveSnapPoint } from '../utils';

const SWIPE_THRESHOLD = 0.2;
const THROTTLE_DEFAULT_MS = 0;

const isScrollable = (element: HTMLElement | null) => {
    if (!element) {
        return false;
    }

    const style = getComputedStyle(element);

    return (
        style.overflow === 'scroll' ||
        style.overflow === 'auto' ||
        style.overflowY === 'scroll' ||
        style.overflowY === 'auto'
    );
};

const applyHeight = (element: HTMLElement, heightPx: number) => {
    element.style.height = `${heightPx}px`;
};

const applyActiveSnapHeight = (element: HTMLElement, snapPoints: SheetSnapPoints, preferred?: SheetSnapPoint) => {
    const { points, pointsPx } = getSortedSnapPoints(snapPoints, window.innerHeight);
    const current = resolveActiveSnapPoint(points, preferred) ?? points[0];
    const index = Math.max(
        0,
        points.findIndex((point) => point === current),
    );

    applyHeight(element, pointsPx[index]);

    return current;
};

export const useSheetSwipe = (args: {
    contentWrapperRef: RefObject<HTMLDivElement>;
    contentRef: RefObject<HTMLDivElement>;
    handleRef: RefObject<HTMLDivElement>;
    onClose: () => void;
    throttleMs?: number;
    hasScrollEvents?: boolean;
    opened?: boolean;
    snapPoints?: SheetSnapPoints;
    initialSnapPoint?: SheetSnapPoint;
    onSnapPointChange?: (snapPoint: SheetSnapPoint) => void;
}) => {
    const {
        contentWrapperRef,
        contentRef,
        handleRef,
        hasScrollEvents,
        onClose,
        throttleMs = THROTTLE_DEFAULT_MS,
        opened,
        snapPoints,
        initialSnapPoint,
        onSnapPointChange,
    } = args;

    const [isTopScroll, setIsTopScroll] = useState(true);

    const isOverscroll = useRef(false);
    const startY = useRef(0);
    const currentY = useRef(0);
    const startHeight = useRef(0);
    const wasOpenedRef = useRef(Boolean(opened));
    const snapPointsRef = useRef(snapPoints);
    const initialSnapPointRef = useRef(initialSnapPoint);
    const activeSnapPointRef = useRef(resolveActiveSnapPoint(snapPoints, initialSnapPoint));
    const onSnapPointChangeRef = useRef(onSnapPointChange);
    const onCloseRef = useRef(onClose);

    snapPointsRef.current = snapPoints;
    initialSnapPointRef.current = initialSnapPoint;
    onSnapPointChangeRef.current = onSnapPointChange;
    onCloseRef.current = onClose;

    const commitSnapPoint = (next: SheetSnapPoint) => {
        if (next === activeSnapPointRef.current) {
            return;
        }

        activeSnapPointRef.current = next;
        onSnapPointChangeRef.current?.(next);
    };

    // Высота по активной snap-точке. При повторном открытии сброс на initialSnapPoint.
    useEffect(() => {
        const contentWrapperEl = contentWrapperRef.current;
        const points = snapPointsRef.current;
        const justOpened = opened && !wasOpenedRef.current;

        wasOpenedRef.current = Boolean(opened);

        if (!contentWrapperEl) {
            return undefined;
        }

        if (!opened) {
            const resetToInitialHeight = () => {
                const nextPoints = snapPointsRef.current;

                if (!nextPoints?.length) {
                    contentWrapperEl.style.height = '';
                    return;
                }

                activeSnapPointRef.current = applyActiveSnapHeight(
                    contentWrapperEl,
                    nextPoints,
                    initialSnapPointRef.current,
                );
            };

            if (parseFloat(getComputedStyle(contentWrapperEl).transitionDuration) === 0) {
                resetToInitialHeight();
                return undefined;
            }

            const onTransitionEnd = (event: TransitionEvent) => {
                if (event.target !== contentWrapperEl || event.propertyName !== 'transform') {
                    return;
                }

                resetToInitialHeight();
            };

            contentWrapperEl.addEventListener('transitionend', onTransitionEnd);

            return () => {
                contentWrapperEl.removeEventListener('transitionend', onTransitionEnd);
            };
        }

        if (!points?.length) {
            contentWrapperEl.style.height = '';
            return;
        }

        const preferred = justOpened ? initialSnapPointRef.current : activeSnapPointRef.current;

        activeSnapPointRef.current = applyActiveSnapHeight(contentWrapperEl, points, preferred);

        return undefined;
    }, [opened]);

    useEffect(() => {
        const contentWrapperEl = contentWrapperRef.current;
        const handleEl = handleRef.current;
        const contentEl = contentRef.current;

        const triggerElement = !isTopScroll ? handleEl : contentWrapperEl;

        if (!triggerElement || !contentEl || !contentWrapperEl || !hasScrollEvents) {
            return;
        }

        const nodes = Array.from<HTMLElement>(contentWrapperEl.querySelectorAll('*'));
        const scrollableElements = nodes.filter(isScrollable);

        contentWrapperEl.style.willChange = snapPointsRef.current?.length ? 'height' : 'transform';

        const onTouchStart = (event: TouchEvent) => {
            isOverscroll.current = false;

            startY.current = event.changedTouches[0].clientY;
            currentY.current = startY.current;
            startHeight.current = contentWrapperEl.offsetHeight;

            contentWrapperEl.style.transition = 'none';
        };

        const onTouchMove = (event: TouchEvent) => {
            const { clientY } = event.changedTouches[0];
            const points = snapPointsRef.current;

            if (isOverscroll.current) {
                startY.current = Infinity;
                return;
            }

            if (points?.length) {
                currentY.current = clientY;
                const deltaY = currentY.current - startY.current;
                const { pointsPx } = getSortedSnapPoints(points, window.innerHeight);
                const maxHeight = pointsPx[pointsPx.length - 1];

                // На верхней точке жест вверх отдаём нативному скроллу контента
                if (deltaY < 0 && startHeight.current >= maxHeight) {
                    return;
                }

                const nextHeight = Math.min(maxHeight, Math.max(0, startHeight.current - deltaY));

                if (deltaY !== 0 && event.cancelable) {
                    event.preventDefault();
                }

                applyHeight(contentWrapperEl, nextHeight);
                return;
            }

            currentY.current = Math.max(startY.current, clientY);
            const offsetY = currentY.current - startY.current;

            if (offsetY !== 0 && event.cancelable) {
                event.preventDefault();
            }

            contentWrapperEl.style.transform = `translateY(${offsetY}px)`;
        };

        const onTouchEnd = (event: TouchEvent) => {
            isOverscroll.current = false;
            contentWrapperEl.style.transition = '';

            const points = snapPointsRef.current;

            if (!Number.isFinite(startY.current)) {
                if (points?.length) {
                    applyActiveSnapHeight(contentWrapperEl, points, activeSnapPointRef.current);
                }

                return;
            }

            const endY = event.changedTouches[0].clientY;
            const offsetY = endY - startY.current;

            if (points?.length) {
                const { points: sortedPoints, pointsPx } = getSortedSnapPoints(points, window.innerHeight);
                const rawHeight = startHeight.current - offsetY;
                const currentHeight = Math.max(0, rawHeight);
                const lowestHeight = pointsPx[0];

                if (rawHeight < lowestHeight * (1 - SWIPE_THRESHOLD)) {
                    onCloseRef.current();
                    return;
                }

                const nearestIndex = findNearestSnapPoint(currentHeight, pointsPx);

                applyHeight(contentWrapperEl, pointsPx[nearestIndex]);
                commitSnapPoint(sortedPoints[nearestIndex]);
                return;
            }

            contentWrapperEl.style.transform = '';

            const curtainHeight = contentWrapperEl.offsetHeight;

            if (offsetY / curtainHeight > SWIPE_THRESHOLD) {
                onCloseRef.current();
            }
        };

        const onScroll = throttle((event: Event) => {
            const onTop = (event.target as HTMLElement).scrollTop <= 0;

            if (!onTop) {
                isOverscroll.current = true;
            }

            setIsTopScroll(onTop);
        }, throttleMs);

        triggerElement.addEventListener('touchstart', onTouchStart);
        triggerElement.addEventListener('touchmove', onTouchMove);
        triggerElement.addEventListener('touchend', onTouchEnd);

        scrollableElements.forEach((element) => {
            element.addEventListener('scroll', onScroll);
        });

        return () => {
            triggerElement.removeEventListener('touchstart', onTouchStart);
            triggerElement.removeEventListener('touchmove', onTouchMove);
            triggerElement.removeEventListener('touchend', onTouchEnd);

            scrollableElements.forEach((element) => {
                element.removeEventListener('scroll', onScroll);
            });
        };
    }, [isTopScroll, hasScrollEvents, throttleMs, contentWrapperRef, contentRef, handleRef]);
};
