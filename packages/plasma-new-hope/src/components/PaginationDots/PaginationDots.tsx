import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cls from 'classnames';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { usePreviousValue } from '../../hooks';
import { base as viewCSS } from '../PaginationDots/variations/_view/base';
import { base as sizeCSS } from '../PaginationDots/variations/_size/base';

import { PaginationDotsProps } from './PaginationDots.types';
import { AnimatedDotsWrapper, base, Dot, Line, Wrapper } from './PaginationDots.styles';
import { classes } from './PaginationDots.tokens';
import { getDotSize } from './utils/getDotSize';
import { useAnimation } from './hooks/useAnimation';

const sizesMap = {
    xs: 18,
    s: 20,
    m: 24,
} as const;

export type DotSize = keyof typeof sizesMap;

const getInitialOffset = (value: number, visibleCount: number, count: number) => {
    const middle = Math.floor(visibleCount / 2);

    if (value < middle) {
        return 0;
    }

    if (count - value <= middle) {
        return count - visibleCount;
    }

    return value - middle;
};

export const getVisualOffsets = (dots: DotSize[], innerViewValue: number) => {
    const before = dots.slice(0, innerViewValue).reduce((acc, size) => acc + sizesMap[size], 0);
    const after = dots.slice(innerViewValue + 1).reduce((acc, size) => acc + sizesMap[size], 0);

    return (after - before) / 2;
};

const getFirstAnimatedDotsOffset = (dots: DotSize[], prevDots: DotSize[]) => {
    const sizeBefore = sizesMap[prevDots[0]];
    const sizeAfter = sizesMap[dots[0]];

    return sizeBefore - sizeAfter;
};

const getLastAnimatedDotsOffset = (dots: DotSize[], prevDots: DotSize[]) => {
    const sizeBefore = sizesMap[prevDots[prevDots.length - 1]];
    const sizeAfter = sizesMap[dots[dots.length - 1]];

    return sizeBefore - sizeAfter;
};

/*
        (m) m m s xs  value: 0, offset: 0
      m (m) m s xs    value: 1, offset: 0
    m m (m) s xs      value: 2, offset: 0
    s m (m) s xs      value: 3, offset: 1
   xs s (m) s xs      value: 4, offset: 2

 */

const isDebug = false;

export const paginationDotsRoot = (Root: RootProps<HTMLDivElement, PaginationDotsProps>) =>
    forwardRef<HTMLDivElement, PaginationDotsProps>(
        (
            {
                view,
                size,

                activeElementView = 'dot',
                orientation = 'horizontal',
                centered = false,
                value = 0,
                count = 0,
                visibleCount,
                onChange,

                ...rest
            },
            outerRef,
        ) => {
            const innerRef = useRef<HTMLDivElement>(null);
            const wrapperRef = useRef<HTMLDivElement>(null);
            const activeElementRef = useRef<HTMLDivElement>(null);
            const animatedDotsWrapperRef = useRef<HTMLDivElement>(null);

            useForkRef(outerRef, innerRef);

            const innerValue = Math.min(value, count - 1);
            const innerVisibleCount = Math.min(visibleCount || count, count);

            const isLineView = activeElementView === 'line';
            const isVertical = orientation === 'vertical';
            const hasScroll = innerVisibleCount < count;

            const [currentValue, setCurrentValue] = useState(innerValue);
            const [prevValue, setPrevValue] = useState<number | undefined>();
            const [offset, setOffset] = useState(() => getInitialOffset(innerValue, innerVisibleCount, count));
            const prevOffset = usePreviousValue(offset) as number;
            const prevDotsRef = useRef<DotSize[]>([]);

            const dots = new Array(innerVisibleCount)
                .fill(null)
                .map((_, index) => getDotSize(size, index + offset, offset, count, innerVisibleCount));

            const setVisualOffset = (currentValueNew: number, newOffset: number) => {
                const innerViewValue = currentValueNew - newOffset;

                // canScrollBackward || canScrollForward
                const withAnimation = centered ? true : newOffset !== offset;

                if (!animatedDotsWrapperRef.current || !withAnimation) {
                    if (wrapperRef.current) {
                        wrapperRef.current.style.transform = 'none';
                    }
                    return;
                }

                const visualOffset = getVisualOffsets(dots, innerViewValue);

                if (wrapperRef.current) {
                    wrapperRef.current.style.transform = isVertical
                        ? `translateY(${visualOffset}px)`
                        : `translateX(${visualOffset}px)`;
                }
            };

            if (isDebug) {
                console.log(
                    '!!!',
                    JSON.stringify({
                        prevValue,
                        prevOffset,
                        value: innerValue,
                        offset,
                    }),
                );
            }

            const canScrollForward =
                prevValue !== undefined ? !!offset && count - innerVisibleCount > prevOffset : false;
            const canScrollBackward = Boolean(prevOffset && offset + innerVisibleCount !== count);

            const {
                skipAnimation,
                hasAnimation,
                hasForwardAnimation,
                hasBackwardAnimation,
                setSkipAnimation,
                setHasForwardAnimation,
                setHasBackwardAnimation,
                handleAnimationEnd,
            } = useAnimation({
                innerViewIndex: currentValue - offset,
                dots,
                prevDots: prevDotsRef.current,
                canScrollBackward,
                canScrollForward,
                isVertical,
                activeElementRef,
                animatedDotsWrapperRef,
                onAnimationEnd: () => {
                    console.log('!!! onAnimationEnd');
                    const newOffset = getInitialOffset(innerValue, innerVisibleCount, count);
                    setOffset(newOffset);
                    setPrevValue(undefined);
                    setSkipAnimation(true);
                },
            });

            const hasAnimatedDot =
                hasAnimation &&
                innerVisibleCount > 2 &&
                ((hasBackwardAnimation && canScrollBackward) || (hasForwardAnimation && canScrollForward));

            const calcOffset = (currentValue: number, prevValue: number) => {
                if (prevValue === undefined || (centered && !hasScroll)) {
                    return;
                }

                const toFront = currentValue > prevValue;
                const toBack = currentValue < prevValue;

                const newOffset = getInitialOffset(currentValue, innerVisibleCount, count);
                const withAnimation = centered ? true : newOffset !== offset;

                if (toFront) {
                    if (withAnimation) {
                        setHasForwardAnimation(true);
                        prevDotsRef.current = [...dots];
                        setOffset(newOffset);
                    } else {
                        setOffset(newOffset);
                    }
                } else if (toBack) {
                    if (withAnimation) {
                        setHasBackwardAnimation(true);
                        prevDotsRef.current = [...dots];
                        setOffset(newOffset);
                    } else {
                        setOffset(newOffset);
                    }
                }
            };

            useLayoutEffect(() => {
                setVisualOffset(innerValue, offset);
            }, [isVertical, centered]);

            useLayoutEffect(() => {
                if (prevValue === undefined) {
                    setVisualOffset(innerValue, offset);
                    if (animatedDotsWrapperRef.current) {
                        animatedDotsWrapperRef.current.style.transition = 'none';
                        animatedDotsWrapperRef.current.style.transform = 'none';
                    }
                }
            }, [innerValue, offset, prevValue]);

            useLayoutEffect(() => {
                setSkipAnimation(true);
                setPrevValue(undefined);
            }, [count, innerVisibleCount, isVertical, isLineView, hasScroll]);

            useEffect(() => {
                // setSkipAnimation(true);
                // setPrevValue(undefined);
            }, []);

            const onMove = (newValue: number) => {
                setSkipAnimation(false);

                calcOffset(newValue, currentValue);
                setCurrentValue(newValue);
                setPrevValue(currentValue);

                onChange?.(newValue);
            };

            if (!innerVisibleCount || innerVisibleCount <= 0) {
                return null;
            }

            const dotsNodes = dots.map((dotSize, viewIndex) => {
                const dotIndex = viewIndex + offset;
                const isCurrent = dotIndex === currentValue;

                const isClickable = dotIndex === currentValue - 1 || dotIndex === currentValue + 1;
                const onClick = isClickable && !hasAnimation ? () => onMove(dotIndex) : undefined;

                if (isCurrent) {
                    const ActiveElement = activeElementView === 'dot' ? Dot : Line;
                    return (
                        <ActiveElement
                            key={viewIndex}
                            ref={activeElementRef}
                            data-size={size}
                            data-view={activeElementView}
                            className={cls(
                                classes.active,
                                isVertical && classes.vertical,
                                skipAnimation && classes.skipAnimation,
                            )}
                        >
                            {isDebug ? dotIndex : null}
                        </ActiveElement>
                    );
                }

                const isPrevActive = prevValue === dotIndex;
                const innerViewValue = dotIndex - offset;
                const isFirst = innerViewValue === 0;
                const isLast = innerViewValue === innerVisibleCount - 1;

                return (
                    <Dot
                        key={viewIndex}
                        className={cls(
                            isVertical && classes.vertical,
                            isClickable && classes.clickable,
                            isPrevActive && classes.prevActive,
                            skipAnimation && classes.skipAnimation,
                        )}
                        style={{
                            visibility:
                                (isLast && hasForwardAnimation && canScrollForward) ||
                                (isFirst && hasBackwardAnimation && canScrollBackward)
                                    ? 'hidden'
                                    : 'visible',
                        }}
                        data-size={dotSize}
                        data-view={activeElementView}
                        onClick={onClick}
                    >
                        {isDebug ? dotIndex : null}
                    </Dot>
                );
            });

            return (
                <Root
                    size={size}
                    view={view}
                    className={cls(centered && classes.centered, isVertical && classes.vertical)}
                    ref={innerRef}
                    {...rest}
                >
                    <Wrapper ref={wrapperRef} data-size={size}>
                        {hasAnimatedDot && (
                            <Dot
                                className={cls(isVertical && classes.vertical, {
                                    hidden: hasForwardAnimation,
                                    showed: hasBackwardAnimation,
                                })}
                                data-view={activeElementView}
                                data-size={dots[0]}
                                style={
                                    isVertical
                                        ? { top: `${getFirstAnimatedDotsOffset(dots, prevDotsRef.current)}px` }
                                        : { left: `${getFirstAnimatedDotsOffset(dots, prevDotsRef.current)}px` }
                                }
                            >
                                {isDebug ? offset + (hasForwardAnimation ? -1 : 0) : null}
                            </Dot>
                        )}
                        <AnimatedDotsWrapper ref={animatedDotsWrapperRef} onTransitionEnd={handleAnimationEnd}>
                            {dotsNodes}
                        </AnimatedDotsWrapper>
                        {hasAnimatedDot && (
                            <Dot
                                className={cls(isVertical && classes.vertical, {
                                    hidden: hasBackwardAnimation,
                                    showed: hasForwardAnimation,
                                })}
                                data-view={activeElementView}
                                data-size={dots[dots.length - 1]}
                                style={
                                    isVertical
                                        ? { bottom: `${getLastAnimatedDotsOffset(dots, prevDotsRef.current)}px` }
                                        : { right: `${getLastAnimatedDotsOffset(dots, prevDotsRef.current)}px` }
                                }
                            >
                                {isDebug ? offset + innerVisibleCount + (hasForwardAnimation ? -1 : 0) : null}
                            </Dot>
                        )}
                    </Wrapper>
                </Root>
            );
        },
    );

export const paginationDotsConfig = {
    name: 'PaginationDots',
    tag: 'div',
    layout: paginationDotsRoot,
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
        view: 'default',
        size: 'm',
    },
};
