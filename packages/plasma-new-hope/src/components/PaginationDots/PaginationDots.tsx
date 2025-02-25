import React, { forwardRef, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';
import { base as viewCSS } from '../PaginationDots/variations/_view/base';
import { base as sizeCSS } from '../PaginationDots/variations/_size/base';
import { cx } from '../../utils';

import { PaginationDotsProps } from './PaginationDots.types';
import { AfterWrapper, base, BeforeWrapper, CenterWrapper, Dot, Line } from './PaginationDots.styles';
import { classes } from './PaginationDots.tokens';

const getDotSize = (size: string | undefined, index: number, offset: number, count: number, visibleCount: number) => {
    const innerViewValue = index - offset;

    const canScrollBackward = offset;
    const canScrollForward = count - (visibleCount + offset);

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
            return canScrollForward === 1 ? 's' : 'xs';
        }

        if (isSecondLast && canScrollForward > 1) {
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
            // const ref =
            useForkRef(outerRef, innerRef);

            const [currentValue, setCurrentValue] = useState(value);
            const [prevValue, setPrevValue] = useState<number | undefined>();
            const [offset, setOffset] = useState(0);

            const innerVisibleCount = Math.min(visibleCount || count, count);

            const dots = new Array(innerVisibleCount).fill(null);

            const isVertical = orientation === 'vertical';

            const calcOffset = () => {
                const diff = count - innerVisibleCount;

                if (!diff) {
                    return;
                }

                const innerViewValue = value - offset;
                const toFront = value > currentValue;
                const toBack = value < currentValue;

                const canScrollBackward = offset;
                const canScrollForward = count - (innerVisibleCount + offset);

                if (toFront && innerVisibleCount - innerViewValue <= 2 && canScrollForward) {
                    setOffset((prevOffset) => Math.min(prevOffset + 1, innerVisibleCount));
                } else if (toBack && innerViewValue <= 1 && canScrollBackward) {
                    setOffset((prevOffset) => Math.max(prevOffset - 1, 0));
                }
            };

            useLayoutEffect(() => {
                setPrevValue(currentValue);
                setCurrentValue(value);

                calcOffset();
            }, [value]);

            useEffect(() => {
                setPrevValue(0);
                setCurrentValue(0);
                setOffset(0);
            }, [count, innerVisibleCount]);

            const prevHeight = useRef(0);
            const height = useRef(0);

            useLayoutEffect(() => {
                if (centered) {
                    prevHeight.current = getHeight(innerRef.current);
                    height.current = prevHeight.current;
                }
            }, [centered]);

            if (!innerVisibleCount || innerVisibleCount <= 0) {
                return null;
            }

            const innerViewValue = value - offset;

            const dotsNodes = dots.map((_, i) => {
                const index = i + offset;
                const isCurrent = index === currentValue;

                const isClickable = Boolean(onChange && (index === currentValue - 1 || index === currentValue + 1));

                const onClick = isClickable
                    ? () => {
                          setPrevValue(currentValue);
                          onChange?.(index);
                      }
                    : undefined;

                if (isCurrent) {
                    const ActiveElement = activeElementView === 'dot' ? Dot : Line;
                    return (
                        <ActiveElement
                            key={index}
                            data-size={size}
                            onClick={onClick}
                            className={cx(classes.active, isVertical && classes.vertical)}
                        >
                            {/* {index}*/}
                        </ActiveElement>
                    );
                }

                const isPrevActive = activeElementView === 'line' && prevValue === index;

                const dotSize = getDotSize(size, index, offset, count, innerVisibleCount);

                return (
                    <Dot
                        key={index}
                        className={cx(
                            isVertical && classes.vertical,
                            isClickable && classes.clickable,
                            isPrevActive && classes.prevActive,
                        )}
                        // style={index === 0 ? firstStyle : undefined}
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
                    className={cx(centered && classes.centered, isVertical && classes.vertical)}
                    ref={innerRef}
                    {...rest}
                >
                    {!centered && dotsNodes}
                    {centered && (
                        <>
                            <CenterWrapper>
                                <BeforeWrapper>{dotsNodes.slice(0, innerViewValue)}</BeforeWrapper>
                                {dotsNodes[innerViewValue]}
                                <AfterWrapper>{dotsNodes.slice(innerViewValue + 1)}</AfterWrapper>
                            </CenterWrapper>
                        </>
                    )}
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
