import React, { useRef, useState, useEffect } from 'react';

import { DraggableScrollContainer, ScrollableContainer } from './DraggableContainer.styles';

type DraggableContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const DraggableContainer: React.FC<DraggableContainerProps> = ({ children, className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!contentRef.current) return;

        setIsDragging(true);
        setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
        setScrollLeft(contentRef.current.scrollLeft);

        if (containerRef.current) {
            containerRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging || !contentRef.current) return;

        const x = e.pageX - (containerRef.current?.offsetLeft || 0);
        const walk = x - startX;
        contentRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        if (!contentRef.current) return;

        setIsDragging(true);
        setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
        setScrollLeft(contentRef.current.scrollLeft);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || !contentRef.current) return;

        const x = e.touches[0].pageX - (containerRef.current?.offsetLeft || 0);
        const walk = x - startX;
        contentRef.current.scrollLeft = scrollLeft - walk;
    };

    useEffect(() => {
        return () => {
            setIsDragging(false);
        };
    }, []);

    return (
        <DraggableScrollContainer
            ref={containerRef}
            className={className}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <ScrollableContainer ref={contentRef}>{children}</ScrollableContainer>
        </DraggableScrollContainer>
    );
};
