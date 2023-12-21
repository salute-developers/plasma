import React from 'react';
import styled from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins';
import type { AsProps } from '../../types';

export type CarouselItemProps = ScrollSnapProps & AsProps & React.HTMLAttributes<HTMLDivElement>;

export type CarouselItemVirtualProps = AsProps &
    React.HTMLAttributes<HTMLDivElement> & {
        /**
         * позиция элемента (start из useVirtual)
         * в случае оси "x"
         */
        left?: number;
        /**
         * позиция элемента (start из useVirtual)
         * в случае оси "y"
         */
        top?: number;
    };

const StyledItem = styled.div<CarouselItemProps>`
    ${applyScrollSnap}
`;

const StyledItemVirtual = styled.div<CarouselItemVirtualProps>`
    position: absolute;
`;

export const CarouselItem: React.FC<CarouselItemProps> = ({
    scrollSnapAlign = 'center',
    scrollSnapStop = 'always',
    children,
    ...rest
}) => {
    return (
        <StyledItem
            scrollSnapAlign={scrollSnapAlign}
            scrollSnapStop={scrollSnapStop}
            role="group"
            aria-roledescription="slide"
            {...rest}
        >
            {children}
        </StyledItem>
    );
};

/**
 * Компонент для использовани внутри CarouselVirtual для элементов с фиксированным размером.
 * Адаптирован для использования с хуком useVirtual.
 * ```
 * import { useVirtual } from '@salutejs/use-virtual';
 * ```
 */
export const CarouselItemVirtual = ({ left, top, children, style, ...rest }: CarouselItemVirtualProps) => {
    return (
        <StyledItemVirtual
            role="group"
            aria-roledescription="slide"
            style={{ transform: `translate(${left ?? 0}px, ${top ?? 0}px)`, ...style }}
            {...rest}
        >
            {children}
        </StyledItemVirtual>
    );
};
