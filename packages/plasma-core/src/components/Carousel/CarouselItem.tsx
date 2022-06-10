import React from 'react';
import styled from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins';
import type { AsProps } from '../../types';

export type CarouselItemProps = ScrollSnapProps & AsProps & React.HTMLAttributes<HTMLDivElement>;

export type CarouselItemVirtualProps = AsProps &
    React.HTMLAttributes<HTMLDivElement> & {
        left?: number;
        top?: number;
    };

const StyledItem = styled.div<CarouselItemProps>`
    ${applyScrollSnap}
`;

const StyledItemVirtual = styled.div<CarouselItemVirtualProps>`
    position: absolute;
`;

export const CarouselItem: React.FC<CarouselItemProps> = ({ scrollSnapAlign = 'center', children, ...rest }) => {
    return (
        <StyledItem scrollSnapAlign={scrollSnapAlign} role="group" aria-roledescription="slide" {...rest}>
            {children}
        </StyledItem>
    );
};

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
