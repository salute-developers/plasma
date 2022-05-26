import React from 'react';
import { useCarousel, Carousel as StyledCarousel, CarouselTrack as StyledCarouselTrack } from '@salutejs/plasma-core';
import type { CarouselProps as BaseProps } from '@salutejs/plasma-core';

import { useForkRef } from '../../hooks';

export type CarouselProps = Omit<BaseProps, 'axis' | 'animatedScrollByIndex' | 'throttleMs' | 'debounceMs'> & {
    /**
     * При значении `polite` скринридер будет объявлять переключаемые слайды.
     */
    ariaLive?: 'off' | 'polite';
};

/**
 * Компонент для создания списков с прокруткой.
 */
// eslint-disable-next-line prefer-arrow-callback
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(function Carousel(
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
        ...rest
    },
    ref,
) {
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

    return (
        <StyledCarousel ref={handleRef} axis={axis} scrollSnapType={scrollSnapType} {...rest}>
            <StyledCarouselTrack
                ref={trackRef as React.MutableRefObject<HTMLDivElement | null>}
                axis={axis}
                paddingStart={paddingStart}
                paddingEnd={paddingEnd}
                aria-live={ariaLive}
            >
                {children}
            </StyledCarouselTrack>
        </StyledCarousel>
    );
});
