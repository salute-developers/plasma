/* eslint-disable */

import React, { forwardRef, useRef, useState, useEffect } from 'react';
import cls from 'classnames';
import type { MouseEvent } from 'react';
import type { RootProps } from 'src/engines';

import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base, StyledScrollBar, StyledContainer, StyledContent, StyledTrack, StyledThumb } from './Scrollbar.styles';
import { classes } from './Scrollbar.tokens';
import { ScrollBarProps, ScrollbarState } from './Scrollbar.types';
import { parseOffset, calculateScrollbar } from './utils';

const MIN_SCROLLBAR_TRACK_HEIGHT = 20;

export const scrollbarRoot = (Root: RootProps<HTMLDivElement, ScrollBarProps>) =>
    forwardRef<HTMLDivElement, ScrollBarProps>(
        (
            {
                className,
                view = 'default',
                size = 'm',
                placement = 'right',
                offset = '4px',
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
            const hideTimeoutRef = useRef<number | null>(null);
            const isInitializedRef = useRef(false);

            const [scrollbarState, setScrollbarState] = useState<ScrollbarState>({
                isVisible: false,
                thumbHeight: 0,
                thumbPosition: 0,
                isDragging: false,
            });

            const parsedOffset = parseOffset(offset);

            const updateScrollbar = (show = false) => {
                const container = containerRef.current;
                if (!container) return;

                const { thumbHeight, thumbPosition } = calculateScrollbar(
                    container,
                    parsedOffset,
                    MIN_SCROLLBAR_TRACK_HEIGHT,
                );

                setScrollbarState((prevState) => {
                    if (
                        prevState.thumbHeight === thumbHeight &&
                        prevState.thumbPosition === thumbPosition &&
                        prevState.isVisible === (show || prevState.isVisible)
                    ) {
                        return prevState;
                    }

                    return {
                        ...prevState,
                        thumbHeight,
                        thumbPosition,
                        isVisible: show || prevState.isVisible,
                    };
                });
            };

            const clearHideTimeout = () => {
                if (hideTimeoutRef.current) {
                    clearTimeout(hideTimeoutRef.current);
                    hideTimeoutRef.current = null;
                }
            };

            const showScrollbarWithDelay = () => {
                clearHideTimeout();
                updateScrollbar(true);

                if (autoHide) {
                    hideTimeoutRef.current = window.setTimeout(() => {
                        setScrollbarState((prevState) => ({ ...prevState, isVisible: false }));
                    }, autoHideDelay);
                }
            };

            const handleScroll = () => {
                showScrollbarWithDelay();
                updateScrollbar();
            };

            const handleMouseEnter = () => {
                showScrollbarWithDelay();
            };

            const handleScrollbarDrag = (e: MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();

                const thumb = e.currentTarget;
                const track = thumb.parentElement as HTMLDivElement;
                const container = containerRef.current;

                if (!container || !track) return;

                clearHideTimeout();

                const startY = e.clientY;
                const startThumbPosition = parseFloat(thumb.style.top || '0');
                const trackRect = track.getBoundingClientRect();
                const trackHeight = trackRect.height;
                const thumbHeight = thumb.offsetHeight;

                const { scrollHeight, clientHeight } = container;
                const maxScroll = scrollHeight - clientHeight;

                const handleMouseMove = (moveEvent: globalThis.MouseEvent) => {
                    const deltaY = moveEvent.clientY - startY;
                    const newThumbPosition = Math.max(
                        0,
                        Math.min(trackHeight - thumbHeight, startThumbPosition + deltaY),
                    );

                    const scrollPercentage = newThumbPosition / (trackHeight - thumbHeight);
                    const newScrollTop = scrollPercentage * maxScroll;

                    container.scrollTop = newScrollTop;

                    setScrollbarState((prevState) => ({
                        ...prevState,
                        thumbPosition: newThumbPosition,
                        isDragging: true,
                        isVisible: true,
                    }));
                };

                const handleMouseUp = () => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);

                    setScrollbarState((prevState) => ({
                        ...prevState,
                        isDragging: false,
                    }));

                    showScrollbarWithDelay();
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
            };

            const handleTrackClick = (e: MouseEvent<HTMLDivElement>) => {
                e.preventDefault();
                e.stopPropagation();

                const track = e.currentTarget;
                const container = containerRef.current;
                if (!container || !track) return;

                if (thumbRef.current && thumbRef.current.contains(e.target as Node)) {
                    return;
                }

                clearHideTimeout();

                const trackRect = track.getBoundingClientRect();
                const clickY = e.clientY - trackRect.top;
                const trackHeight = trackRect.height;
                const { thumbHeight } = scrollbarState;

                const { scrollHeight, clientHeight } = container;
                const maxScroll = scrollHeight - clientHeight;

                if (maxScroll <= 0) return;

                let newThumbPosition = clickY - thumbHeight / 2;
                newThumbPosition = Math.max(0, Math.min(trackHeight - thumbHeight, newThumbPosition));

                const scrollPercentage = newThumbPosition / (trackHeight - thumbHeight);
                const newScrollTop = scrollPercentage * maxScroll;

                container.scrollTop = newScrollTop;

                setScrollbarState((prevState) => ({
                    ...prevState,
                    thumbPosition: newThumbPosition,
                    isVisible: true,
                }));

                showScrollbarWithDelay();
            };

            useEffect(() => {
                const container = containerRef.current;
                if (!container) return;

                if (!isInitializedRef.current) {
                    updateScrollbar();
                    isInitializedRef.current = true;
                }

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
                    clearHideTimeout();
                };
            }, []);

            useEffect(() => {
                updateScrollbar();
            }, [children, offset]);

            return (
                <Root view={view} size={size} className={cls(classes.scrollBarRoot, className)} ref={ref} {...rest}>
                    <StyledScrollBar
                        className={cls({
                            [classes.scrollBarVisible]: scrollbarState.isVisible,
                            [classes.scrollBarDragging]: scrollbarState.isDragging,
                        })}
                        style={
                            {
                                ...style,
                                '--scrollbar-offset-top': parsedOffset.top,
                                '--scrollbar-offset-right': parsedOffset.right,
                                '--scrollbar-offset-bottom': parsedOffset.bottom,
                                '--scrollbar-offset-left': parsedOffset.left,
                            } as React.CSSProperties
                        }
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
                            onMouseDown={handleTrackClick}
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
