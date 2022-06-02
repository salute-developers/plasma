import React from 'react';
import styled from 'styled-components';
import {
    useCarousel,
    Carousel as BaseCarousel,
    CarouselTrack as BaseTrack,
    CarouselProps as BaseProps,
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
        paddingStart,
        paddingEnd,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
        listRole,
        listAriaLabel,
        children,
        withUseVirtual,
        carouselSize,
        ...rest
    },
    ref,
) {
    const { scrollRef, trackRef } = useCarousel({
        index,
        axis,
        scrollAlign,
        detectActive: withUseVirtual ? false : detectActive,
        detectThreshold,
        scaleCallback,
        scaleResetCallback,
        onIndexChange,
        onDetectActiveItem,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
        withUseVirtual,
    });
    const handleRef = useForkRef(scrollRef, ref);

    return (
        <StyledCarousel ref={handleRef} axis={axis} scrollSnapType={scrollSnapType} {...rest}>
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
});
