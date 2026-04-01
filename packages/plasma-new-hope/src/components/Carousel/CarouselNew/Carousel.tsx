import { RootProps } from 'src/engines';
import React, { forwardRef, useEffect, useState, Children } from 'react';
import { IconDisclosureLeft, IconDisclosureRight } from 'src/components/_Icon';
import { useDisableScroll } from 'src/hooks';

import { classes } from './Carousel.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base, CarouselWrapper, CarouselTrack, ControlsWrapper, IconButton } from './Carousel.styles';
import { CarouselNewProps } from './Carousel.types';
import { useCarousel } from './hooks/useCarousel';
import { Dots } from './ui';
import { getNormalizedIndex } from './utils';

const VISIBLE_DOTS_DEFAULT = 10;
const DOTS_CENTERED_DEFAULT = false;
const AUTO_PLAY_INTERVAL_DEFAULT = 5000;

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
                index: outerIndex,
                onChangeIndex: outerOnChangeIndex,
                ...rest
            },
            ref,
        ) => {
            const slidesAmount = Children.count(children);

            const [innerIndex, setInnerIndex] = useState(Math.min(slidesAmount - 1, defaultIndex));

            const index = outerIndex ?? innerIndex;

            const onChangeIndex = (newIndex: number) => {
                const normalizedIndex = getNormalizedIndex(newIndex, slidesAmount, loop);

                if (outerOnChangeIndex) {
                    outerOnChangeIndex(normalizedIndex);
                }

                setInnerIndex(normalizedIndex);
            };

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

            const { scrollRef, trackRef } = useCarousel({
                index,
                scrollAlign,
                onChangeIndex,
                swipeEnabled,
            });

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
                                {children}
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
