import { RootProps } from 'src/engines';
import React, { forwardRef, useEffect, useMemo, useCallback, useState, Children } from 'react';
import { IconDisclosureLeft, IconDisclosureRight } from 'src/components/_Icon';
import { useDisableScroll } from 'src/hooks';

import { classes } from './Carousel.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import {
    base,
    CarouselWrapper,
    CarouselTrack,
    CarouselVirtualItem,
    ControlsWrapper,
    IconButton,
} from './Carousel.styles';
import { CarouselNewProps } from './Carousel.types';
import { useCarousel } from './hooks/useCarousel';
import { Dots } from './ui';
import { getNormalizedIndex } from './utils';

const VISIBLE_DOTS_DEFAULT = 10;
const DOTS_CENTERED_DEFAULT = false;
const AUTO_PLAY_INTERVAL_DEFAULT = 5000;
export const VIRTUAL_OVERSCAN = 3;
export const DEFAULT_ESTIMATED_SLIDE_WIDTH = 320;
export const ITEM_VIRTUAL_ATTRIBUTE = 'data-carousel-index';

/**
 * Компонент для создания списков с прокруткой.
 */
export const carouselNewRoot = (Root: RootProps<HTMLDivElement, CarouselNewProps>) =>
    forwardRef<HTMLDivElement, CarouselNewProps>(
        (
            {
                view,
                size,
                scrollAlign = 'start',
                children,
                controlArrowsDisabled = false,
                paginationOptions,
                gap = '20px',
                className,
                style,
                defaultIndex = 0,
                loop = false,
                autoPlay = false,
                autoPlayInterval = AUTO_PLAY_INTERVAL_DEFAULT,
                swipeEnabled = false,
                virtual = false,
                index: outerIndex,
                onChangeIndex: outerOnChangeIndex,
                ...rest
            },
            ref,
        ) => {
            const childrenArray = useMemo(() => Children.toArray(children), [children]);
            const slidesAmount = childrenArray.length;

            const [innerIndex, setInnerIndex] = useState(() => getNormalizedIndex(defaultIndex, slidesAmount, loop));

            const index = outerIndex ?? innerIndex;

            const onChangeIndex = useCallback(
                (newIndex: number) => {
                    const normalizedIndex = getNormalizedIndex(newIndex, slidesAmount, loop);

                    if (outerOnChangeIndex) {
                        outerOnChangeIndex(normalizedIndex);
                    }

                    setInnerIndex(normalizedIndex);
                },
                [slidesAmount, loop, outerOnChangeIndex],
            );

            const handleClickLeft = () => {
                onChangeIndex(index - 1);
            };

            const handleClickRight = () => {
                onChangeIndex(index + 1);
            };

            useEffect(() => {
                if (!autoPlay || slidesAmount <= 1 || autoPlayInterval <= 0 || (!loop && index >= slidesAmount - 1)) {
                    return;
                }

                const interval = window.setInterval(() => {
                    onChangeIndex(index + 1);
                }, autoPlayInterval);

                return () => window.clearInterval(interval);
            }, [autoPlay, autoPlayInterval, index, loop, slidesAmount]);

            const {
                scrollRef,
                trackRef,
                virtualItems,
                beforeSpacerWidth,
                afterSpacerWidth,
                measureVirtualItem,
            } = useCarousel({
                index,
                scrollAlign,
                onChangeIndex,
                swipeEnabled,
                slidesAmount,
                gap,
                virtual,
            });

            const slides = useMemo(() => {
                if (!virtual) {
                    return children;
                }

                return virtualItems.map((virtualItem) => {
                    const child = childrenArray[virtualItem.index];

                    return (
                        <CarouselVirtualItem
                            key={virtualItem.key as React.Key}
                            ref={measureVirtualItem(virtualItem.index)}
                            {...{ [ITEM_VIRTUAL_ATTRIBUTE]: virtualItem.index }}
                        >
                            {child}
                        </CarouselVirtualItem>
                    );
                });
            }, [children, childrenArray, measureVirtualItem, virtual, virtualItems]);

            useDisableScroll(scrollRef);

            return (
                <Root className={className} style={style} size={size} view={view} ref={ref} {...rest}>
                    <ControlsWrapper>
                        {(loop || index !== 0) && !controlArrowsDisabled && (
                            <IconButton className={classes.leftControlButton} onClick={handleClickLeft}>
                                <IconDisclosureLeft size="m" color="inherit" />
                            </IconButton>
                        )}

                        <CarouselWrapper ref={scrollRef} isSwipeEnabled={swipeEnabled}>
                            <CarouselTrack ref={trackRef} gap={gap}>
                                {virtual && beforeSpacerWidth > 0 && (
                                    <div style={{ width: beforeSpacerWidth, flex: '0 0 auto' }} aria-hidden />
                                )}

                                {slides}

                                {virtual && afterSpacerWidth > 0 && (
                                    <div style={{ width: afterSpacerWidth, flex: '0 0 auto' }} aria-hidden />
                                )}
                            </CarouselTrack>
                        </CarouselWrapper>

                        {(loop || index !== slidesAmount - 1) && !controlArrowsDisabled && (
                            <IconButton className={classes.rightControlButton} onClick={handleClickRight}>
                                <IconDisclosureRight size="m" color="inherit" />
                            </IconButton>
                        )}
                    </ControlsWrapper>

                    {!paginationOptions?.disabled && (
                        <Dots
                            index={index}
                            onChange={onChangeIndex}
                            visibleCount={paginationOptions?.visibleDots || VISIBLE_DOTS_DEFAULT}
                            count={slidesAmount}
                            centered={paginationOptions?.centered || DOTS_CENTERED_DEFAULT}
                        />
                    )}
                </Root>
            );
        },
    );

export const carouselNewConfig = {
    name: 'Carousel',
    tag: 'div',
    layout: carouselNewRoot,
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
        size: 's',
    },
};
