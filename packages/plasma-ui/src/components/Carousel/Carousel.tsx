import React from 'react';
import styled from 'styled-components';
import {
    useCarousel,
    Carousel as BaseCarousel,
    CarouselTrack as BaseTrack,
    CarouselProps as BaseProps,
    CarouselTemplateProps,
    CarouselVirtualProps,
    applyNoSelect,
} from '@salutejs/plasma-core';

import { useForkRef } from '../../hooks';

export type CarouselProps = BaseProps & {
    /**
     * Сменить WAI-ARIA Role списка.
     */
    listRole?: string;
    /**
     * Сменить WAI-ARIA Label списка.
     */
    listAriaLabel?: string;
};

const StyledCarousel = styled(BaseCarousel)``;
const StyledCarouselTrack = styled(BaseTrack)`
    ${applyNoSelect};
`;

export const CarouselTemplate = React.forwardRef<
    HTMLElement,
    CarouselTemplateProps & { trackRef: React.MutableRefObject<HTMLElement | null> }
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
            withUseVirtual,
            children,
            ...rest
        },
        ref,
    ) => {
        return (
            <StyledCarousel ref={ref} axis={axis} scrollSnapType={scrollSnapType} {...rest}>
                <StyledCarouselTrack
                    ref={trackRef as React.MutableRefObject<HTMLDivElement | null>}
                    axis={axis}
                    paddingStart={paddingStart}
                    paddingEnd={paddingEnd}
                    role={listRole}
                    aria-label={listAriaLabel}
                    withUseVirtual={withUseVirtual}
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
    CarouselVirtualProps & { trackRef: React.MutableRefObject<HTMLElement | null> }
>(({ scrollSnapType = 'mandatory', trackRef, ...rest }, ref) => {
    return <CarouselTemplate ref={ref} trackRef={trackRef} scrollSnapType={scrollSnapType} {...rest} />;
});
