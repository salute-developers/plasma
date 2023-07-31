import throttle from 'lodash.throttle';
import React, { useEffect, useRef, useState } from 'react';

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

export const useSheetSwipe = (args: {
    contentWrapperRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    handleRef: React.RefObject<HTMLDivElement>;
    throttleMs?: number;
    onClose: () => void;
}) => {
    const { contentWrapperRef, contentRef, handleRef, onClose, throttleMs = THROTTLE_DEFAULT_MS } = args;
    const [isTopScroll, setIsTopScroll] = useState(true);
    const startY = useRef(0);
    const currentY = useRef(0);

    useEffect(() => {
        const contentWrapperEl = contentWrapperRef.current;
        const handleEl = handleRef.current;
        const contentEl = contentRef.current;

        const triggerElement = !isTopScroll ? handleEl : contentWrapperEl;

        if (!triggerElement || !contentEl || !contentWrapperEl) {
            return;
        }

        const nodes = Array.from<HTMLElement>(contentWrapperEl.querySelectorAll('*'));
        const scrollableElements = nodes.filter(isScrollable);

        contentWrapperEl.style.willChange = 'transform';

        const onTouchStart = (event: TouchEvent) => {
            startY.current = event.changedTouches[0].clientY;
            currentY.current = startY.current;

            contentWrapperEl.style.transition = 'none';
        };

        const onTouchMove = (event: TouchEvent) => {
            const { clientY } = event.changedTouches[0];
            currentY.current = Math.max(startY.current, clientY);
            const offsetY = currentY.current - startY.current;

            contentWrapperEl.style.transform = `translateY(${offsetY}px)`;
        };

        const onTouchEnd = (event: TouchEvent) => {
            const curtainHeight = contentWrapperEl.offsetHeight;
            const endY = event.changedTouches[0].clientY;
            const offsetY = endY - startY.current;

            contentWrapperEl.style.transform = '';
            contentWrapperEl.style.transition = '';

            if (offsetY / curtainHeight > SWIPE_THRESHOLD) {
                onClose();
            }
        };

        const onScroll = throttle((event: Event) => {
            const onTop = (event.target as HTMLElement).scrollTop <= 0;

            if (onTop) {
                contentWrapperEl.style.transition = 'transform 0.3s';
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
    }, [isTopScroll]);
};
