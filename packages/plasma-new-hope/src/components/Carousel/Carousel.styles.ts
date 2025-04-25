import { styled } from '@linaria/react';
import { css } from '@linaria/core';

export const base = css``;

/**
 * Компонент применяется, если требуется компенсировать отступы контейнера в сетке.
 * При обертывании вокруг ``Carousel``, добавляет карусели и ее прокрутке дополнительные отступы.
 * Стилизованный компонент, обладающий всеми свойствами ``div``.
 */
export const CarouselGridWrapper = styled.div`
    overflow: hidden;
    margin-left: calc(var(--plasma-grid-margin) * -1);
    margin-right: calc(var(--plasma-grid-margin) * -1);
`;

export const CarouselWrapper = styled.div<{ scrollSnapType?: 'mandatory' | 'proximity' | 'none' }>`
    position: relative;
    margin: 0;
    padding: 0;
    list-style: none;

    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar {
        display: none;
    }

    overflow-x: auto;
    overflow-y: hidden;

    scroll-behavior: smooth;
    scroll-snap-type: ${({ scrollSnapType }) => `x ${scrollSnapType}`};

    ${CarouselGridWrapper} & {
        scroll-padding: 0 var(--plasma-grid-margin);
        padding-left: var(--plasma-grid-margin);
    }

    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const CarouselTrack = styled.div<{ paddingStart?: string; paddingEnd?: string }>`
    display: inline-flex;
    flex-direction: row;
    padding-left: ${({ paddingStart }) => paddingStart || 0};
    padding-right: ${({ paddingEnd }) => paddingEnd || 0};

    ${CarouselGridWrapper} & {
        padding-right: ${({ paddingEnd }) => paddingEnd || 'var(--plasma-grid-margin)'};
    }
`;
