import React, { useRef, useState, useEffect } from 'react';
import cls from 'classnames';

import { DraggableScrollContainer, ScrollableContainer } from './DraggableContainer.styles';

type DraggableContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const DraggableContainer: React.FC<DraggableContainerProps> = ({ children, className = '' }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [preventLinkClick, setPreventLinkClick] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!contentRef.current) return;

        setIsDragging(true);
        setPreventLinkClick(false);
        setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
        setScrollLeft(contentRef.current.scrollLeft);

        if (containerRef.current) {
            containerRef.current.style.cursor = 'grabbing';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setPreventLinkClick(false);

        if (containerRef.current) {
            containerRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (!isDragging || !contentRef.current) return;

        const offsetLeft = containerRef.current?.offsetLeft || 0;
        const x = e.pageX - offsetLeft;
        const step = x - startX;

        if (!preventLinkClick && Math.abs(step) > 5) {
            setPreventLinkClick(true);
        }

        contentRef.current.scrollLeft = scrollLeft - step;
    };

    const handleMouseLeave = () => {
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
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, startX, scrollLeft]);

    useEffect(() => {
        return () => {
            setIsDragging(false);
            setPreventLinkClick(false);
        };
    }, []);

    return (
        <DraggableScrollContainer
            ref={containerRef}
            className={className}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
        >
            <ScrollableContainer ref={contentRef} className={cls({ inactiveLinks: preventLinkClick })}>
                {children}
            </ScrollableContainer>
        </DraggableScrollContainer>
    );
};
