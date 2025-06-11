import { RootProps } from 'src/engines';
import React, { forwardRef, useState, Children } from 'react';
import { IconDisclosureLeft, IconDisclosureRight } from 'src/components/_Icon';

import { classes } from './Carousel.tokens';
import { base as sizeCSS } from './variations/_size/base';
import { base as viewCSS } from './variations/_view/base';
import { base, CarouselWrapper, CarouselTrack, ControlsWrapper, IconButton } from './Carousel.styles';
import { CarouselNewProps } from './Carousel.types';
import { useCarousel } from './hooks/useCarousel';
import { Dots } from './ui';

const VISIBLE_DOTS_DEFAULT = 10;
const DOTS_CENTERED_DEFAULT = false;

/**
 * Компонент для создания списков с прокруткой.
 */
export const carouselNewRoot = (Root: RootProps<HTMLDivElement, CarouselNewProps>) =>
    forwardRef<HTMLDivElement, CarouselNewProps>(
        (
            {
                view,
                size,
                scrollAlign = 'center',
                children,
                controlArrowsDisabled = false,
                paginationOptions,
                className,
                style,
            },
            ref,
        ) => {
            const [index, setIndex] = useState(0);

            const slidesAmount = Children.count(children);

            const handleClickLeft = () => {
                setIndex(Math.max(0, index - 1));
            };

            const handleClickRight = () => {
                setIndex(Math.min(slidesAmount - 1, index + 1));
            };

            const { scrollRef, trackRef } = useCarousel({
                index,
                scrollAlign,
                onIndexChange: setIndex,
            });

            return (
                <Root className={className} style={style} size={size} view={view} ref={ref}>
                    <ControlsWrapper>
                        {index !== 0 && !controlArrowsDisabled && (
                            <IconButton pin="circle-circle" onClick={handleClickLeft}>
                                <IconDisclosureLeft size="m" color="inherit" />
                            </IconButton>
                        )}

                        <CarouselWrapper ref={scrollRef}>
                            <CarouselTrack ref={trackRef}>{children}</CarouselTrack>
                        </CarouselWrapper>

                        {index !== slidesAmount - 1 && !controlArrowsDisabled && (
                            <IconButton
                                className={classes.rightControlButton}
                                pin="circle-circle"
                                onClick={handleClickRight}
                            >
                                <IconDisclosureRight size="m" color="inherit" />
                            </IconButton>
                        )}
                    </ControlsWrapper>

                    {!paginationOptions?.disabled && (
                        <Dots
                            index={index}
                            onChange={setIndex}
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
