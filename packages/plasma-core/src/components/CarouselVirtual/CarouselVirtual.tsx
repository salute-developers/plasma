import React, { RefObject, useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { useVirtualForPlasma } from '@salutejs/use-virtual';

import { useForkRef } from '../../hooks';
import { applyNoSelect } from '../../mixins/applyNoSelect';

import type { CarouselVirtualProps as BaseProps } from './types';
import { CarouselVirtualBase, CarouselVirtualTrack } from './CarouselVirtualStyled';

export type VirtualCarouselProps = BaseProps & {
    /**
     * Сменить WAI-ARIA Role списка.
     */
    listRole?: string;
    /**
     * Сменить WAI-ARIA Label списка.
     */
    listAriaLabel?: string;
    index?: number;
};

const StyledVirtualCarouselTrack = styled(CarouselVirtualTrack)`
    ${applyNoSelect};
`;

/**
 * Компонент для создания списков с прокруткой.
 */
export const CarouselVirtual = forwardRef<HTMLDivElement, VirtualCarouselProps>(
    (
        {
            axis = 'x',
            scrollSnapType = 'mandatory',
            onScroll,
            onIndexChange,
            paddingStart,
            paddingEnd,
            listRole,
            listAriaLabel,
            itemCount,
            estimateSize,
            overscan,
            renderItems,
            carouselHeight,
            index,
            ...rest
        },
        ref,
    ) => {
        const scrollRef = useRef<HTMLDivElement>(null);
        const handleRef = useForkRef<HTMLDivElement>(scrollRef as RefObject<HTMLDivElement>, ref);
        const { visibleItems, totalSize, currentIndex, scrollToIndex } = useVirtualForPlasma({
            itemCount,
            parentRef: scrollRef as RefObject<HTMLDivElement>,
            horizontal: axis === 'x',
            paddingStart: (paddingStart ? parseFloat(paddingStart) : paddingStart) as number | undefined,
            paddingEnd: (paddingEnd ? parseFloat(paddingEnd) : paddingEnd) as number | undefined,
            estimateSize,
            overscan,
            scrollToFn: React.useCallback(
                (offset: number) => {
                    scrollRef.current!.scrollTo({ [axis === 'y' ? 'top' : 'left']: offset, behavior: 'smooth' });
                },
                [axis],
            ),
        });

        useEffect(() => {
            if (typeof index === 'number') {
                console.log('>>> index in useEffect:', index);
                scrollToIndex(index);
            }
        }, [index, scrollToIndex]);

        useEffect(() => {
            if (typeof index !== 'number' || index !== currentIndex) {
                onIndexChange?.(currentIndex);
            }
        }, [onIndexChange, currentIndex]);

        return (
            <CarouselVirtualBase
                ref={handleRef}
                axis={axis}
                scrollSnapType={scrollSnapType}
                onScroll={onScroll}
                carouselHeight={carouselHeight}
                {...rest}
            >
                <StyledVirtualCarouselTrack
                    axis={axis}
                    paddingStart={paddingStart}
                    paddingEnd={paddingEnd}
                    role={listRole}
                    aria-label={listAriaLabel}
                    style={{ [axis === 'x' ? 'width' : 'height']: `${totalSize}px` }}
                    carouselHeight={carouselHeight}
                >
                    {renderItems(visibleItems, currentIndex)}
                </StyledVirtualCarouselTrack>
            </CarouselVirtualBase>
        );
    },
);
