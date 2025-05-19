import React, { forwardRef } from 'react';
import { useForkRef } from '@salutejs/plasma-core';

import { RootProps } from '../../engines';

import { base, CarouselWrapper, CarouselTrack } from './Carousel.styles';
import { CarouselProps } from './Carousel.types';
import { useCarousel } from './useCarousel';
import { useDragScroll } from './useDragScroll';

/**
 * Компонент для создания списков с прокруткой.
 */
export const carouselRoot = (Root: RootProps<HTMLDivElement, CarouselProps>) =>
    forwardRef<HTMLDivElement, CarouselProps>(
        (
            {
                index = 0,
                scrollSnapType = 'mandatory',
                scrollAlign,
                detectActive,
                detectThreshold,
                scaleCallback,
                scaleResetCallback,
                onIndexChange,
                paddingStart,
                paddingEnd,
                children,
                ariaLive = 'off',
                isDragScrollDisabled = false,
                ...rest
            },
            ref,
        ) => {
            const axis = 'x';

            const { scrollRef, trackRef } = useCarousel({
                index,
                axis,
                scrollAlign,
                detectActive,
                detectThreshold,
                scaleCallback,
                scaleResetCallback,
                onIndexChange,
            });

            const handleRef = useForkRef(scrollRef, ref);

            useDragScroll(scrollRef, isDragScrollDisabled);

            return (
                <Root index={index}>
                    {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                    {/* @ts-ignore */}
                    <CarouselWrapper ref={handleRef} scrollSnapType={scrollSnapType} {...rest}>
                        <CarouselTrack
                            ref={trackRef as React.MutableRefObject<HTMLDivElement | null>}
                            paddingStart={paddingStart}
                            paddingEnd={paddingEnd}
                            aria-live={ariaLive}
                        >
                            {children}
                        </CarouselTrack>
                    </CarouselWrapper>
                </Root>
            );
        },
    );

export const carouselConfig = {
    name: 'Carousel',
    tag: 'div',
    layout: carouselRoot,
    base,
    variations: {},
    defaults: {},
};
