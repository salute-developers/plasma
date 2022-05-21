import React from 'react';
import styled from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins';
import type { AsProps } from '../../types';

import type { ScrollAxis } from './types';

export type VirtualCarouselItemProps = ScrollSnapProps &
    AsProps &
    React.HTMLAttributes<HTMLDivElement> & {
        /**
         * Смещение по оси
         */
        start: number;
        /**
         * Ось
         */
        axis: ScrollAxis;
    };

const StyledItem = styled.div.attrs((props: VirtualCarouselItemProps) => {
    return {
        style: {
            transform: props.axis === 'x' ? `translateX(${props.start}px)` : `translateY(${props.start}px)`,
        },
    };
})<VirtualCarouselItemProps>`
    position: absolute;
    top: 0;
    left: 0;
    ${applyScrollSnap}
`;

export const VirtualCarouselItem: React.FC<VirtualCarouselItemProps> = ({
    scrollSnapAlign = 'center',
    children,
    ...rest
}) => {
    return (
        <StyledItem scrollSnapAlign={scrollSnapAlign} role="group" aria-roledescription="slide" {...rest}>
            {children}
        </StyledItem>
    );
};
