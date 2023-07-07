import throttle from 'lodash.throttle';
import React, { useEffect, useState } from 'react';

const SWIPE_THRESHOLD = 0.2;
const THROTTLE_DEFAULT_MS = 100;

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

    useEffect(() => {
        const contentWrapperEl = contentWrapperRef.current;
        const handleEl = handleRef.current;
        const contentEl = contentRef.current;

        const triggerElement = !isTopScroll && isScrollable(contentEl) ? handleEl : contentWrapperEl;

        if (!triggerElement || !contentEl || !contentWrapperEl) {
            return;
        }

        const nodes = Array.from<HTMLElement>(contentWrapperEl.querySelectorAll('*'));
        const scrollableElements = nodes.filter(isScrollable);

        let startY = 0;
        let currentY = 0;

        contentWrapperEl.style.willChange = 'transform';

        const onTouchStart = (event: TouchEvent) => {
            startY = event.changedTouches[0].clientY;
            currentY = startY;

            contentWrapperEl.style.transition = 'none';
        };

        const onTouchMove = (event: TouchEvent) => {
            const { clientY } = event.changedTouches[0];
            currentY = Math.max(startY, clientY);
            const offsetY = currentY - startY;

            contentWrapperEl.style.transform = `translateY(${offsetY}px)`;
        };

        const onTouchEnd = (event: TouchEvent) => {
            const curtainHeight = contentWrapperEl.offsetHeight;
            const endY = event.changedTouches[0].clientY;
            const offsetY = endY - startY;

            contentWrapperEl.style.transform = '';
            contentWrapperEl.style.transition = '';

            if (offsetY / curtainHeight > SWIPE_THRESHOLD) {
                onClose();
            }
        };

        const onScroll = throttle((event: Event) => {
            setIsTopScroll((event.target as HTMLElement).scrollTop <= 0);
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
