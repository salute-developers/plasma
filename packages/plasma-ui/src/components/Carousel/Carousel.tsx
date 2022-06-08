import React from 'react';
import styled from 'styled-components';
import {
    useCarousel,
    Carousel as BaseCarousel,
    CarouselTrack as BaseTrack,
    BasicProps,
    CarouselProps,
    CarouselVirtualProps,
    applyNoSelect,
} from '@salutejs/plasma-core';

import { useForkRef } from '../../hooks';

const StyledCarousel = styled(BaseCarousel)``;
const StyledCarouselTrack = styled(BaseTrack)`
    ${applyNoSelect};
`;

export const CarouselTemplate = React.forwardRef<
    HTMLElement,
    BasicProps & { trackRef?: React.MutableRefObject<HTMLElement | null>; virtualSize?: number }
>(
    (
        {
            axis,
            scrollSnapType,
            trackRef,
            paddingStart,
            paddingEnd,
            listRole,
            listAriaLabel,
            children,
            virtualSize,
            ...rest
        },
        ref,
    ) => {
        return (
            <StyledCarousel ref={ref} axis={axis} scrollSnapType={scrollSnapType} {...rest}>
                <StyledCarouselTrack
                    ref={(trackRef as React.MutableRefObject<HTMLDivElement | null>) || null}
                    axis={axis}
                    paddingStart={paddingStart}
                    paddingEnd={paddingEnd}
                    role={listRole}
                    aria-label={listAriaLabel}
                    virtualSize={virtualSize}
                >
                    {children}
                </StyledCarouselTrack>
            </StyledCarousel>
        );
    },
);

/**
 * Компонент для создания списков с прокруткой.
 */
// eslint-disable-next-line prefer-arrow-callback
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(function Carousel(
    {
        index = 0,
        axis = 'x',
        scrollSnapType = 'mandatory',
        scrollAlign,
        detectActive,
        detectThreshold,
        scaleCallback,
        scaleResetCallback,
        onIndexChange,
        onDetectActiveItem,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
        ...rest
    },
    ref,
) {
    const { scrollRef, trackRef } = useCarousel({
        index,
        axis,
        scrollAlign,
        detectActive,
        detectThreshold,
        scaleCallback,
        scaleResetCallback,
        onIndexChange,
        onDetectActiveItem,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
    });

    const handleRef = useForkRef(scrollRef, ref);

    return (
        <CarouselTemplate ref={handleRef} trackRef={trackRef} axis={axis} scrollSnapType={scrollSnapType} {...rest} />
    );
});

/**
 * Компонент для создания виртуализированных списков с прокруткой.
 */
// eslint-disable-next-line prefer-arrow-callback
export const CarouselVirtual = React.forwardRef<
    HTMLDivElement,
    CarouselVirtualProps & { trackRef?: React.MutableRefObject<HTMLElement | null> }
>(({ trackRef, ...rest }, ref) => {
    return <CarouselTemplate ref={ref} trackRef={trackRef} {...rest} />;
});
