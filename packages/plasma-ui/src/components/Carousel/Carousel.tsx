import React from 'react';
import styled from 'styled-components';
import {
    useCarousel,
    useCarouselLite,
    Carousel as BaseCarousel,
    CarouselTrack as BaseTrack,
    CarouselTemplateProps,
    CarouselProps,
    CarouselLiteProps,
    CarouselVirtualProps,
    applyNoSelect,
} from '@salutejs/plasma-core';

import { useForkRef } from '../../hooks';

const StyledCarousel = styled(BaseCarousel)``;
const StyledCarouselTrack = styled(BaseTrack)`
    ${applyNoSelect};
`;

const CarouselTemplate = React.forwardRef<
    HTMLElement,
    CarouselTemplateProps & {
        trackRef?: React.MutableRefObject<HTMLElement | null>;
        virtualSize?: number;
        liteMode?: boolean;
    }
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
            liteMode,
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
                    liteMode={liteMode}
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
 * Компонент для создания списков с прокруткой. Для прокрутки использует transform translate.
 * Обратно совместим с компонентом Carousel при условии, что пропсы связанные с detectActive не используются.
 */
// eslint-disable-next-line prefer-arrow-callback
export const CarouselLite = React.forwardRef<HTMLDivElement, CarouselLiteProps>(function CarouselLite(
    { index = 0, axis = 'x', scrollAlign, scrollMode, ...rest },
    ref,
) {
    const { scrollRef, trackRef } = useCarouselLite({
        index,
        axis,
        scrollAlign,
        scrollMode,
    });

    const handleRef = useForkRef(scrollRef, ref);

    return <CarouselTemplate ref={handleRef} trackRef={trackRef} axis={axis} liteMode {...rest} />;
});

/**
 * Компонент для создания виртуализированных списков с прокруткой.
 * Адаптирован для использования с хуком useVirtual.
 * ```
 * import { useVirtual } from '@salutejs/use-virtual';
 * ```
 */
// eslint-disable-next-line prefer-arrow-callback
export const CarouselVirtual = React.forwardRef<
    HTMLDivElement,
    CarouselVirtualProps & { trackRef?: React.MutableRefObject<HTMLElement | null> }
>(({ trackRef, ...rest }, ref) => {
    return <CarouselTemplate ref={ref} trackRef={trackRef} {...rest} />;
});
