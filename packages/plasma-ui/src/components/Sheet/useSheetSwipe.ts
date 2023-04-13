import React, { useEffect, useState } from 'react';

const SWIPE_THRESHOLD = 0.2;

export const useSheetSwipe = (args: {
    contentWrapperRef: React.RefObject<HTMLDivElement>;
    contentRef: React.RefObject<HTMLDivElement>;
    handleRef: React.RefObject<HTMLDivElement>;
    onClose: () => void;
}) => {
    const { contentWrapperRef, contentRef, handleRef, onClose } = args;
    const [isTopScroll, setIsTopScroll] = useState(true);

    useEffect(() => {
        const contentWrapperEl = contentWrapperRef.current;
        const handleEl = handleRef.current;
        const contentEl = contentRef.current;

        const hasScroll = contentEl && contentEl.scrollHeight > contentEl.clientHeight;
        const triggerElement = !isTopScroll && hasScroll ? handleEl : contentWrapperEl;

        if (!triggerElement || !contentEl || !contentWrapperEl) {
            return;
        }

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

        const onScroll = () => {
            setIsTopScroll(contentEl.scrollTop <= 0);
        };

        triggerElement.addEventListener('touchstart', onTouchStart);
        triggerElement.addEventListener('touchmove', onTouchMove);
        triggerElement.addEventListener('touchend', onTouchEnd);
        contentEl.addEventListener('scroll', onScroll);

        return () => {
            triggerElement.removeEventListener('touchstart', onTouchStart);
            triggerElement.removeEventListener('touchmove', onTouchMove);
            triggerElement.removeEventListener('touchend', onTouchEnd);
            contentEl.removeEventListener('scroll', onScroll);
        };
    }, [isTopScroll]);
};
