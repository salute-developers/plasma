import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import cls from 'classnames';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { base as viewCSS } from '../PaginationDots/variations/_view/base';
import { base as sizeCSS } from '../PaginationDots/variations/_size/base';

import { PaginationDotsProps } from './PaginationDots.types';
import {
    AfterWrapper,
    AnimatedItems,
    base,
    BeforeWrapper,
    CenterWrapper,
    Dot,
    Line,
    Wrapper,
} from './PaginationDots.styles';
import { classes } from './PaginationDots.tokens';

const getDotSize = (size: string | undefined, index: number, offset: number, count: number, visibleCount: number) => {
    const innerViewValue = index - offset;
    const toEnd = count - (visibleCount + offset);

    const canScrollBackward = Boolean(offset);
    const canScrollForward = Boolean(toEnd);

    const isFirst = innerViewValue === 0;
    const isSecond = innerViewValue === 1;

    const isSecondLast = innerViewValue === visibleCount - 2;
    const isLast = innerViewValue === visibleCount - 1;

    if (size === 's') {
        if ((isFirst && canScrollBackward) || (isLast && canScrollForward)) {
            return 'xs';
        }

        return 's';
    }

    if (canScrollBackward) {
        // (m) m m s xs
        // m (m) m s xs
        // m m (m) s xs
        // s m (m) s xs
        // xs s m (m) s
        // xs s m (m) s
        // xs s m m (m)
        if (isFirst) {
            return offset === 1 ? 's' : 'xs';
        }
        if (isSecond && offset > 1) {
            return 's';
        }
    }

    if (canScrollForward) {
        if (isLast) {
            return toEnd === 1 ? 's' : 'xs';
        }

        if (isSecondLast && toEnd > 1) {
            return 's';
        }
    }

    return 'm';
};

const getHeight = (ref: HTMLDivElement | null): number => {
    return ref
        ? ([...ref.children] as HTMLDivElement[]).reduce((res, child) => {
              res += child.offsetHeight;
              return res;
          }, 0)
        : 0;
};

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
            const animatedRef = useRef<HTMLDivElement>(null);

            useForkRef(outerRef, innerRef);

            const innerValue = Math.min(value, count - 1);
            const innerVisibleCount = Math.min(visibleCount || count, count);
            const half = Math.floor(innerVisibleCount / 2);

            const [skipAnimation, setSkipAnimation] = useState(true);
            const [currentValue, setCurrentValue] = useState(innerValue);
            const [prevValue, setPrevValue] = useState<number | undefined>();
            const [offset, setOffset] = useState(() => {
                if (innerValue < half) {
                    return 0;
                }

                if (count - innerValue <= half) {
                    return count - innerVisibleCount;
                }

                return innerValue - half;
            });

            const [hasBackwardAnimation, setHasBackwardAnimation] = useState(false);
            const [hasForwardAnimation, setHasForwardAnimation] = useState(false);

            const hasAnimation = hasForwardAnimation || hasBackwardAnimation;
            const innerOffset = offset + (hasForwardAnimation ? 1 : 0) + (hasBackwardAnimation ? -1 : 0);
            const innerViewValue = currentValue - offset;

            const dots = new Array(innerVisibleCount).fill(null);

            const isLineView = activeElementView === 'line';
            const isVertical = orientation === 'vertical';

            const calcOffset = () => {
                const diff = count - innerVisibleCount;

                if (!diff || prevValue === undefined) {
                    return;
                }

                const toFront = currentValue > prevValue;
                const toBack = currentValue < prevValue;

                const canScrollBackward = Boolean(offset);
                const canScrollForward = Boolean(count - (innerVisibleCount + offset));

                if (toFront && canScrollForward && innerVisibleCount - innerViewValue <= half) {
                    if (isLineView) {
                        setHasForwardAnimation(true);
                    } else {
                        setOffset((prevOffset) => Math.min(prevOffset + 1, count - 1));
                    }
                } else if (toBack && canScrollBackward && innerViewValue <= Math.max(half - 1, 1)) {
                    if (isLineView) {
                        setHasBackwardAnimation(true);
                    } else {
                        setOffset((prevOffset) => Math.max(prevOffset - 1, 0));
                    }
                }
            };

            useLayoutEffect(() => {
                calcOffset();
            }, [prevValue]);

            useLayoutEffect(() => {
                if (hasForwardAnimation) {
                    const { current: wrapperEl } = wrapperRef;
                    const { current: animatedEl } = animatedRef;

                    if (!wrapperEl || !animatedEl) {
                        return;
                    }

                    const { offsetWidth: width, offsetHeight: height } = wrapperEl.lastChild as HTMLElement;
                    if (isVertical) {
                        animatedEl.style.transform = `translateY(${height}px)`;
                        setTimeout(() => {
                            if (animatedEl) {
                                animatedEl.style.transition = 'transform 0.5s linear';
                                animatedEl.style.transform = `translateY(${0}px)`;
                            }
                        });
                    } else {
                        animatedEl.style.transform = `translateX(${width}px)`;
                        setTimeout(() => {
                            if (animatedEl) {
                                animatedEl.style.transition = 'transform 0.5s linear';
                                animatedEl.style.transform = `translateX(${0}px)`;
                            }
                        });
                    }
                }
            }, [hasForwardAnimation, isVertical]);

            useLayoutEffect(() => {
                if (hasBackwardAnimation) {
                    const { current: wrapperEl } = wrapperRef;
                    const { current: animatedEl } = animatedRef;

                    if (!wrapperEl || !animatedEl) {
                        return;
                    }

                    const { offsetWidth: width, offsetHeight: height } = wrapperEl.firstChild as HTMLElement;
                    if (isVertical) {
                        animatedEl.style.transform = `translateY(-${height}px)`;
                        setTimeout(() => {
                            if (animatedEl) {
                                animatedEl.style.transition = 'transform 0.5s linear';
                                animatedEl.style.transform = `translateY(${0}px)`;
                            }
                        });
                    } else {
                        animatedEl.style.transform = `translateX(-${width}px)`;
                        setTimeout(() => {
                            if (animatedEl) {
                                animatedEl.style.transition = 'transform 0.5s linear';
                                animatedEl.style.transform = `translateX(${0}px)`;
                            }
                        });
                    }
                }
            }, [hasBackwardAnimation, isVertical]);

            useEffect(() => {
                setSkipAnimation(true);
                setPrevValue(undefined);
                // setCurrentValue(0);
                // setOffset(0);
            }, [count, innerVisibleCount]);

            const prevHeight = useRef(0);
            const height = useRef(0);

            useLayoutEffect(() => {
                if (centered) {
                    prevHeight.current = getHeight(innerRef.current);
                    height.current = prevHeight.current;
                }
            }, [centered]);

            const handleAnimationEnd = () => {
                if (hasForwardAnimation) {
                    setOffset((prevOffset) => Math.min(prevOffset + 1, count - innerVisibleCount));
                }

                if (hasBackwardAnimation) {
                    setOffset((prevOffset) => Math.max(prevOffset - 1, 0));
                }

                if (animatedRef.current) {
                    animatedRef.current.style.transition = 'none';
                    animatedRef.current.style.transform = 'none';
                }

                setHasForwardAnimation(false);
                setHasBackwardAnimation(false);
                setPrevValue(undefined);
            };

            if (!innerVisibleCount || innerVisibleCount <= 0) {
                return null;
            }

            const dotsNodes = dots.map((_, i) => {
                const index = i + innerOffset;
                const isCurrent = index === currentValue;

                const isClickable = Boolean(onChange && (index === currentValue - 1 || index === currentValue + 1));

                const innerViewValue = index - innerOffset;
                const isFirst = innerViewValue === 0;
                const isLast = innerViewValue === innerVisibleCount - 1;

                const onClick = isClickable
                    ? () => {
                          setSkipAnimation(false);

                          setCurrentValue(index);
                          setPrevValue(currentValue);
                          onChange?.(index);
                      }
                    : undefined;

                if (isCurrent) {
                    const ActiveElement = activeElementView === 'dot' ? Dot : Line;
                    return (
                        <ActiveElement
                            key={`${index}-active`}
                            data-size={size}
                            onClick={onClick}
                            className={cls(
                                classes.active,
                                isVertical && classes.vertical,
                                skipAnimation && classes.skipAnimation,
                            )}
                            onAnimationEnd={handleAnimationEnd}
                        />
                    );
                }

                const isPrevActive = activeElementView === 'line' && prevValue === index;

                const dotSize = getDotSize(size, index, innerOffset, count, innerVisibleCount);

                return (
                    <Dot
                        key={index}
                        className={cls(
                            isVertical && classes.vertical,
                            isClickable && classes.clickable,
                            isPrevActive && classes.prevActive,
                            skipAnimation && classes.skipAnimation,
                        )}
                        style={{
                            visibility:
                                (isLast && hasForwardAnimation) || (isFirst && hasBackwardAnimation)
                                    ? 'hidden'
                                    : 'visible',
                        }}
                        data-size={dotSize}
                        onClick={onClick}
                    >
                        {/* {index}*/}
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
                    <Wrapper ref={wrapperRef}>
                        {hasAnimation && (
                            <Dot
                                className={cls(isVertical && classes.vertical, {
                                    hidden: hasForwardAnimation,
                                    showed: hasBackwardAnimation,
                                })}
                                style={
                                    isVertical
                                        ? {
                                              top: 0,
                                          }
                                        : { left: 0 }
                                }
                                data-size={getDotSize(size, innerOffset, innerOffset, count, innerVisibleCount)}
                            />
                        )}
                        <AnimatedItems ref={animatedRef}>
                            {(!centered || isLineView) && dotsNodes}
                            {centered && !isLineView && (
                                <CenterWrapper>
                                    <BeforeWrapper>{dotsNodes.slice(0, innerViewValue)}</BeforeWrapper>
                                    {dotsNodes[innerViewValue]}
                                    <AfterWrapper>{dotsNodes.slice(innerViewValue + 1)}</AfterWrapper>
                                </CenterWrapper>
                            )}
                        </AnimatedItems>
                        {hasAnimation && (
                            <Dot
                                className={cls(isVertical && classes.vertical, {
                                    hidden: hasBackwardAnimation,
                                    showed: hasForwardAnimation,
                                })}
                                style={
                                    isVertical
                                        ? { bottom: 0 }
                                        : {
                                              right: 0,
                                          }
                                }
                                data-size={getDotSize(
                                    size,
                                    offset + innerVisibleCount + (hasBackwardAnimation ? -2 : 0),
                                    innerOffset,
                                    count,
                                    innerVisibleCount,
                                )}
                            />
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
