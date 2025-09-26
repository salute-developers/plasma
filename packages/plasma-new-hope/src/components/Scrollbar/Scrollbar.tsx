import React, { forwardRef, useRef, useState, useEffect, useCallback } from 'react';
import cls from 'classnames';
import type { MouseEvent } from 'react';
import type { RootProps } from 'src/engines';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base, StyledScrollBar, StyledContainer, StyledContent, StyledTrack, StyledThumb } from './Scrollbar.styles';
import { classes } from './Scrollbar.tokens';
import { ScrollBarProps } from './Scrollbar.types';

interface ScrollbarState {
    isVisible: boolean;
    thumbHeight: number;
    thumbPosition: number;
    isDragging: boolean;
}

export const scrollbarRoot = (Root: RootProps<HTMLDivElement, ScrollBarProps>) =>
    forwardRef<HTMLDivElement, ScrollBarProps>(
        (
            {
                className,
                view = 'default',
                size = 'm',
                placement = 'right',
                offset = 4,
                verticalOffset = 4,
                autoHide = true,
                autoHideDelay = 2000,
                style,
                children,
                ...rest
            },
            ref,
        ) => {
            const containerRef = useRef<HTMLDivElement>(null);
            const contentRef = useRef<HTMLDivElement>(null);
            const trackRef = useRef<HTMLDivElement>(null);
            const thumbRef = useRef<HTMLDivElement>(null);
            const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

            const [scrollbarState, setScrollbarState] = useState<ScrollbarState>({
                isVisible: false,
                thumbHeight: 0,
                thumbPosition: 0,
                isDragging: false,
            });

            const minScrollbarTrackHeight = 20;

            const calculateScrollbar = useCallback(() => {
                if (!containerRef.current || !contentRef.current) {
                    return { thumbHeight: 0, thumbPosition: 0 };
                }

                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                const trackHeight = clientHeight - verticalOffset * 2;
                const thumbHeight = Math.max((trackHeight / scrollHeight) * trackHeight, minScrollbarTrackHeight);
                const maxScroll = scrollHeight - clientHeight;
                const thumbPosition = maxScroll > 0 ? (scrollTop / maxScroll) * (trackHeight - thumbHeight) : 0;

                return { thumbHeight, thumbPosition };
            }, [verticalOffset]);

            const updateScrollbar = useCallback(
                (show = false) => {
                    if (!containerRef.current) return;

                    const { thumbHeight, thumbPosition } = calculateScrollbar();
                    setScrollbarState((prev) => ({
                        ...prev,
                        thumbHeight,
                        thumbPosition,
                        isVisible: show || prev.isVisible,
                    }));
                },
                [calculateScrollbar],
            );

            const showScrollbarWithDelay = useCallback(() => {
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                }

                updateScrollbar(true);

                if (autoHide) {
                    hideTimeoutRef.current = (setTimeout(() => {
                        setScrollbarState((prev) => ({ ...prev, isVisible: false }));
                        hideTimeoutRef.current = null;
                    }, autoHideDelay) as unknown) as NodeJS.Timeout;
                }
            }, [autoHide, autoHideDelay, updateScrollbar]);

            const handleScroll = useCallback(() => {
                if (!containerRef.current) return;

                showScrollbarWithDelay();
            }, [showScrollbarWithDelay]);

            const handleMouseEnter = useCallback(() => {
                showScrollbarWithDelay();
            }, [showScrollbarWithDelay]);

            const handleScrollbarDrag = useCallback(
                (e: MouseEvent<HTMLDivElement>) => {
                    e.preventDefault();

                    const thumb = e.currentTarget;
                    const track = thumb.parentElement as HTMLDivElement;
                    if (!containerRef.current || !track) return;

                    if (hideTimeoutRef.current) {
                        clearTimeout(hideTimeoutRef.current);
                        hideTimeoutRef.current = null;
                    }

                    const startY = e.clientY;
                    const startThumbPosition = parseFloat(thumb.style.top || '0');
                    const trackRect = track.getBoundingClientRect();
                    const trackHeight = trackRect.height;
                    const thumbHeight = thumb.offsetHeight;

                    const { scrollHeight, clientHeight } = containerRef.current;
                    const maxScroll = scrollHeight - clientHeight;

                    const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
                        const deltaY = moveEvent.clientY - startY;
                        const newThumbPosition = Math.max(
                            0,
                            Math.min(trackHeight - thumbHeight, startThumbPosition + deltaY),
                        );

                        const scrollPercentage = newThumbPosition / (trackHeight - thumbHeight);
                        const newScrollTop = scrollPercentage * maxScroll;

                        if (containerRef.current) {
                            containerRef.current.scrollTop = newScrollTop;
                        }

                        setScrollbarState((prev) => ({
                            ...prev,
                            thumbPosition: newThumbPosition,
                            isDragging: true,
                            isVisible: true,
                        }));
                    };

                    const handleMouseUp = () => {
                        document.removeEventListener('mousemove', handleMouseMove);
                        document.removeEventListener('mouseup', handleMouseUp);

                        setScrollbarState((prev) => ({
                            ...prev,
                            isDragging: false,
                        }));

                        showScrollbarWithDelay();
                    };

                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                },
                [showScrollbarWithDelay],
            );

            useEffect(() => {
                return () => {
                    if (hideTimeoutRef.current) {
                        clearTimeout(hideTimeoutRef.current);
                    }
                };
            }, []);

            useEffect(() => {
                const container = containerRef.current;
                if (!container) return;

                container.addEventListener('scroll', handleScroll);
                container.addEventListener('mouseenter', handleMouseEnter);

                const resizeObserver = new ResizeObserver(() => {
                    updateScrollbar();
                });

                if (contentRef.current) {
                    resizeObserver.observe(contentRef.current);
                }

                return () => {
                    container.removeEventListener('scroll', handleScroll);
                    container.removeEventListener('mouseenter', handleMouseEnter);
                    resizeObserver.disconnect();
                };
            }, [handleScroll, handleMouseEnter, updateScrollbar]);

            useEffect(() => {
                updateScrollbar();
            }, [updateScrollbar]);

            return (
                <Root view={view} size={size} className={cls(classes.scrollBarRoot, className)} ref={ref} {...rest}>
                    <StyledScrollBar
                        className={cls({
                            [classes.scrollBarVisible]: scrollbarState.isVisible,
                            [classes.scrollBarDragging]: scrollbarState.isDragging,
                        })}
                        style={style}
                        data-placement={placement}
                        data-size={size}
                        data-view={view}
                    >
                        <StyledContainer
                            ref={containerRef}
                            className={classes.scrollBarContainer}
                            data-placement={placement}
                        >
                            <StyledContent ref={contentRef} className={classes.scrollBarContent}>
                                {children}
                            </StyledContent>
                        </StyledContainer>

                        <StyledTrack
                            ref={trackRef}
                            className={cls(classes.scrollBarTrack, {
                                [classes.scrollBarTrackVisible]: scrollbarState.isVisible,
                            })}
                            data-placement={placement}
                            style={{
                                [placement]: offset,
                                top: verticalOffset,
                                bottom: verticalOffset,
                            }}
                        >
                            <StyledThumb
                                ref={thumbRef}
                                className={classes.scrollBarThumb}
                                style={{
                                    height: `${scrollbarState.thumbHeight}px`,
                                    top: `${scrollbarState.thumbPosition}px`,
                                }}
                                onMouseDown={handleScrollbarDrag}
                            />
                        </StyledTrack>
                    </StyledScrollBar>
                </Root>
            );
        },
    );

export const scrollbarConfig = {
    name: 'Scrollbar',
    tag: 'div',
    layout: scrollbarRoot,
    base,
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
    },
    defaults: {
        size: 'm',
        view: 'default',
    },
};
