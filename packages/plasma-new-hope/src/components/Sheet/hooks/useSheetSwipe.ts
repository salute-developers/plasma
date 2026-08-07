import throttle from 'lodash.throttle';
import { useEffect, useRef, useState, RefObject } from 'react';

import type { SheetSnapPoint } from '../Sheet.types';
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

export const useSheetSwipe = (args: {
    contentWrapperRef: RefObject<HTMLDivElement>;
    contentRef: RefObject<HTMLDivElement>;
    handleRef: RefObject<HTMLDivElement>;
    onClose: () => void;
    throttleMs?: number;
    hasScrollEvents?: boolean;
    opened?: boolean;
    snapPoints?: SheetSnapPoint[];
    defaultSnapPoint?: SheetSnapPoint;
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
        defaultSnapPoint,
        onSnapPointChange,
    } = args;

    const isSnapEnabled = Boolean(snapPoints && snapPoints.length > 0);

    const [isTopScroll, setIsTopScroll] = useState(true);
    const [activeSnapPoint, setActiveSnapPoint] = useState<SheetSnapPoint | undefined>(() =>
        resolveActiveSnapPoint(snapPoints, defaultSnapPoint),
    );

    const isOverscroll = useRef(false);
    const startY = useRef(0);
    const currentY = useRef(0);
    const startHeight = useRef(0);
    const activeSnapPointRef = useRef(activeSnapPoint);
    const onSnapPointChangeRef = useRef(onSnapPointChange);
    const onCloseRef = useRef(onClose);

    activeSnapPointRef.current = activeSnapPoint;
    onSnapPointChangeRef.current = onSnapPointChange;
    onCloseRef.current = onClose;

    const commitSnapPoint = (next: SheetSnapPoint) => {
        if (next === activeSnapPointRef.current) {
            return;
        }

        setActiveSnapPoint(next);
        onSnapPointChangeRef.current?.(next);
    };

    // Синхронизация высоты с активной snap-точкой
    useEffect(() => {
        const contentWrapperEl = contentWrapperRef.current;

        if (!contentWrapperEl) {
            return;
        }

        if (!isSnapEnabled || !opened || !snapPoints) {
            contentWrapperEl.style.height = '';
            return;
        }

        const { points, pointsPx } = getSortedSnapPoints(snapPoints, window.innerHeight);
        const current = resolveActiveSnapPoint(points, activeSnapPoint) ?? points[0];
        const index = Math.max(
            0,
            points.findIndex((point) => point === current),
        );

        applyHeight(contentWrapperEl, pointsPx[index]);
    }, [opened, isSnapEnabled, snapPoints, activeSnapPoint, contentWrapperRef]);

    // Сброс точки при повторном открытии
    const wasOpenedRef = useRef(Boolean(opened));
    useEffect(() => {
        const justOpened = opened && !wasOpenedRef.current;
        wasOpenedRef.current = Boolean(opened);

        if (!justOpened || !isSnapEnabled || !snapPoints) {
            return;
        }

        setActiveSnapPoint(resolveActiveSnapPoint(snapPoints, defaultSnapPoint));
    }, [opened, isSnapEnabled, defaultSnapPoint, snapPoints]);

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

        contentWrapperEl.style.willChange = isSnapEnabled ? 'height' : 'transform';

        const onTouchStart = (event: TouchEvent) => {
            isOverscroll.current = false;

            startY.current = event.changedTouches[0].clientY;
            currentY.current = startY.current;
            startHeight.current = contentWrapperEl.offsetHeight;

            contentWrapperEl.style.transition = 'none';
        };

        const onTouchMove = (event: TouchEvent) => {
            const { clientY } = event.changedTouches[0];

            if (isOverscroll.current) {
                startY.current = Infinity;
                return;
            }

            if (isSnapEnabled && snapPoints) {
                currentY.current = clientY;
                const deltaY = currentY.current - startY.current;
                const { pointsPx } = getSortedSnapPoints(snapPoints, window.innerHeight);
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

            if (!Number.isFinite(startY.current)) {
                if (isSnapEnabled && snapPoints) {
                    const { points, pointsPx } = getSortedSnapPoints(snapPoints, window.innerHeight);
                    const current = resolveActiveSnapPoint(points, activeSnapPointRef.current) ?? points[0];
                    const index = Math.max(
                        0,
                        points.findIndex((point) => point === current),
                    );
                    applyHeight(contentWrapperEl, pointsPx[index]);
                }

                return;
            }

            const endY = event.changedTouches[0].clientY;
            const offsetY = endY - startY.current;

            if (isSnapEnabled && snapPoints) {
                const { points, pointsPx } = getSortedSnapPoints(snapPoints, window.innerHeight);
                const rawHeight = startHeight.current - offsetY;
                const currentHeight = Math.max(0, rawHeight);
                const lowestHeight = pointsPx[0];

                if (rawHeight < lowestHeight * (1 - SWIPE_THRESHOLD)) {
                    contentWrapperEl.style.height = '';
                    onCloseRef.current();
                    return;
                }

                const nearestIndex = findNearestSnapPoint(currentHeight, pointsPx);

                applyHeight(contentWrapperEl, pointsPx[nearestIndex]);
                commitSnapPoint(points[nearestIndex]);
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
    }, [isTopScroll, hasScrollEvents, throttleMs, isSnapEnabled, snapPoints, contentWrapperRef, contentRef, handleRef]);
};
