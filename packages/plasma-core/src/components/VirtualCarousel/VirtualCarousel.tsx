import { useVirtualForPlasma } from '@salutejs/use-virtual';
import React, { RefObject, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';

import { useForkRef } from '../../hooks';
import { applyNoSelect } from '../../mixins';
import { Carousel, CarouselGridWrapper } from '../Carousel';

import type { VirtualCarouselProps as BaseProps } from './types';
import { VirtualCarouselContext } from './VirtualCarouselContext';

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

/**
 * Корневой элемент - ограничивающая обертка карусели.
 */
export const VirtualCarouselWrapper = styled(Carousel)<VirtualCarouselProps>`
    ${({ carouselHeight, axis }) => css`
        ${axis === 'y' ? 'height' : 'width'}: ${carouselHeight}px;
    `}

    ${({ axis }) =>
        axis === 'x'
            ? css`
                  overflow-x: auto;
                  overflow-y: hidden;
              `
            : css`
                  overflow-x: hidden;
                  overflow-y: auto;
              `}
`;

/**
 * Списковый (трековый) элемент карусели для непосредственного вложения айтемов в него.
 */
export const VirtualCarouselTrack = styled.div<
    Pick<VirtualCarouselProps, 'carouselHeight' | 'axis' | 'paddingStart' | 'paddingEnd'>
>`
    position: relative;

    ${({ carouselHeight, axis }) => css`
        ${axis === 'x' ? 'width' : 'height'}: ${carouselHeight}px;
    `}

    ${({ axis, paddingStart, paddingEnd }) =>
        axis === 'x'
            ? css`
                  ${paddingStart &&
                  css`
                      padding-left: ${paddingStart};
                  `}
                  ${paddingEnd
                      ? css`
                            padding-right: ${paddingEnd};
                        `
                      : css`
                            /* stylelint-disable-next-line selector-nested-pattern */
                            ${CarouselGridWrapper} & {
                                padding-right: var(--plasma-grid-margin);
                            }
                        `}
              `
            : css`
                  ${paddingStart &&
                  css`
                      padding-top: ${paddingStart};
                  `}
                  ${paddingEnd &&
                  css`
                      padding-bottom: ${paddingEnd};
                  `}
              `}

    ${applyNoSelect};
`;

/**
 * Компонент для создания списков с прокруткой и виртуализацией.
 */
// eslint-disable-next-line prefer-arrow-callback
export const VirtualCarousel = React.forwardRef<HTMLDivElement, VirtualCarouselProps>(function VirtualCarousel(
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
) {
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleRef = useForkRef<HTMLDivElement>(scrollRef as RefObject<HTMLDivElement>, ref);

    const scrollToFn = React.useCallback(
        (offset: number) => {
            scrollRef.current?.scrollTo({ [axis === 'y' ? 'top' : 'left']: offset, behavior: 'smooth' });
        },
        [axis],
    );

    const { visibleItems, totalSize, currentIndex, scrollToIndex } = useVirtualForPlasma({
        itemCount,
        parentRef: scrollRef as RefObject<HTMLDivElement>,
        horizontal: axis === 'x',
        paddingStart: (paddingStart ? parseFloat(paddingStart) : paddingStart) as number | undefined,
        paddingEnd: (paddingEnd ? parseFloat(paddingEnd) : paddingEnd) as number | undefined,
        estimateSize,
        overscan,
        scrollToFn,
    });

    useEffect(() => {
        if (typeof index === 'number') {
            scrollToIndex(index);
        }
    }, [index, scrollToIndex]);

    useEffect(() => {
        if (typeof index !== 'number' || index !== currentIndex) {
            onIndexChange?.(currentIndex);
        }
    }, [onIndexChange, currentIndex]);

    const style = React.useMemo(() => {
        return { [axis === 'x' ? 'width' : 'height']: `${totalSize}px` };
    }, [axis, totalSize]);

    const context = React.useMemo(() => {
        return { axis };
    }, [axis, totalSize]);

    return (
        <VirtualCarouselContext.Provider value={context}>
            <VirtualCarouselWrapper
                ref={handleRef}
                axis={axis}
                scrollSnapType={scrollSnapType}
                onScroll={onScroll}
                carouselHeight={carouselHeight}
                {...rest}
            >
                <VirtualCarouselTrack
                    axis={axis}
                    paddingStart={paddingStart}
                    paddingEnd={paddingEnd}
                    role={listRole}
                    aria-label={listAriaLabel}
                    style={style}
                    carouselHeight={carouselHeight}
                >
                    {renderItems(visibleItems, currentIndex)}
                </VirtualCarouselTrack>
            </VirtualCarouselWrapper>
        </VirtualCarouselContext.Provider>
    );
});
