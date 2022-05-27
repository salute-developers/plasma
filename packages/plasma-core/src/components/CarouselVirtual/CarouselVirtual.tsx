/* eslint-disable no-continue */
import React, { RefObject, useEffect, useRef, forwardRef } from 'react';
import styled from 'styled-components';
import { useVirtualForPlasma } from '@salutejs/use-virtual';
import throttle from 'lodash.throttle';

import { useForkRef } from '../../hooks';
import { applyNoSelect } from '../../mixins/applyNoSelect';

import type { CarouselVirtualProps } from './types';
import { CarouselVirtualBase, CarouselVirtualTrack } from './CarouselVirtualStyled';

const StyledVirtualCarouselTrack = styled(CarouselVirtualTrack)`
    ${applyNoSelect};
`;

const THROTTLE_DEFAULT_MS = 100;

/**
 * Компонент для создания списков с прокруткой.
 */
export const CarouselVirtual = forwardRef<HTMLDivElement, CarouselVirtualProps>(
    (
        {
            axis = 'x',
            scrollSnapType = 'mandatory',
            onScroll,
            onIndexChange,
            detectActive,
            onDetectActiveItem,
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
        const trackRef = useRef<HTMLElement | null>(null);
        const prevIndex = useRef<number | null>(null);
        const handleRef = useForkRef<HTMLDivElement>(scrollRef as RefObject<HTMLDivElement>, ref);
        const currentIndexRef = useRef(0);

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
                    scrollRef.current?.scrollTo({ [axis === 'y' ? 'top' : 'left']: offset, behavior: 'smooth' });
                },
                [axis],
            ),
        });

        currentIndexRef.current = currentIndex;

        const detectActiveItem = React.useCallback(
            throttle(() => {
                if (detectActive === true && typeof onDetectActiveItem === 'function') {
                    onDetectActiveItem(currentIndexRef.current);
                }
            }, THROTTLE_DEFAULT_MS),
            [],
        );

        useEffect(() => {
            const scrollContainer = scrollRef.current;

            if (scrollContainer instanceof HTMLElement) {
                scrollContainer.addEventListener('scroll', detectActiveItem);
            }

            return () => {
                if (scrollContainer instanceof HTMLElement) {
                    scrollContainer.removeEventListener('scroll', detectActiveItem);
                }
            };
        }, []);

        useEffect(() => {
            if (typeof index === 'number') {
                console.log('>>> index in useEffect:', index);
                prevIndex.current = index;
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
                    ref={trackRef as React.MutableRefObject<HTMLDivElement | null>}
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
