import { useCallback, useEffect, useState } from 'react';

const SCROLL_SPEED = 2;

export const useDragScroll = <T extends HTMLElement>(
    scrollRef: React.MutableRefObject<T | null>,
    isDragScrollDisabled: boolean | null = false,
) => {
    const [isDragging, setDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseMove = useCallback(
        (e: MouseEvent): void => {
            if (isDragging && scrollRef && scrollRef.current) {
                const dx = (e.clientX - startX) * SCROLL_SPEED;
                scrollRef.current.scrollLeft = scrollLeft - dx;
            }
        },
        [scrollRef, scrollLeft, isDragging, startX],
    );

    const handleMouseUp = useCallback((): void => {
        setDragging(false);

        if (scrollRef && scrollRef.current) {
            scrollRef.current.style.cursor = 'grab';
        }
    }, [scrollRef, setDragging]);

    const handleMouseDown = useCallback(
        (e: MouseEvent): void => {
            setDragging(true);

            if (scrollRef && scrollRef.current) {
                setStartX(e.clientX);
                setScrollLeft(scrollRef.current.scrollLeft);

                scrollRef.current.style.cursor = 'grabbing';
            }
        },
        [scrollRef, setDragging, setStartX, setScrollLeft, handleMouseUp, handleMouseMove],
    );

    useEffect(() => {
        if (scrollRef && scrollRef.current && !isDragScrollDisabled) {
            scrollRef.current.style.userSelect = 'none';
            scrollRef.current.addEventListener('mousedown', handleMouseDown);
            scrollRef.current.addEventListener('mouseup', handleMouseUp);
            scrollRef.current.addEventListener('mouseleave', handleMouseUp);
            scrollRef.current.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            if (scrollRef && scrollRef.current && !isDragScrollDisabled) {
                scrollRef.current.removeEventListener('mousedown', handleMouseDown);
                scrollRef.current.removeEventListener('mouseup', handleMouseUp);
                scrollRef.current.removeEventListener('mouseleave', handleMouseUp);
                scrollRef.current.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, [scrollRef, handleMouseDown, handleMouseUp, handleMouseMove, isDragScrollDisabled]);
};
