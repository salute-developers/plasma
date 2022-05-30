import React from 'react';
import styled, { css } from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins';
import type { AsProps } from '../../types';

type VirtualizationProps = {
    withUseVirtual?: boolean;
    virtualTop?: number;
    virtualLeft?: number;
};

type NoVirtualizationProps = {
    withUseVirtual?: false;
    virtualTop: never;
    virtualLeft: never;
};

export type CarouselItemProps = ScrollSnapProps & AsProps & React.HTMLAttributes<HTMLDivElement>;

type CarouselItemExtendedProps = CarouselItemProps & (VirtualizationProps | NoVirtualizationProps);

const StyledItem = styled.div<CarouselItemExtendedProps>`
    ${({ withUseVirtual }) =>
        withUseVirtual &&
        css`
            position: absolute;
        `}

    ${applyScrollSnap}
`;

export const CarouselItem: React.FC<CarouselItemExtendedProps> = ({
    scrollSnapAlign = 'center',
    virtualTop,
    virtualLeft,
    withUseVirtual = false,
    children,
    ...rest
}) => {
    return (
        <StyledItem
            withUseVirtual={withUseVirtual}
            style={withUseVirtual ? { transform: `translate(${virtualLeft ?? 0}px, ${virtualTop ?? 0}px)` } : undefined}
            scrollSnapAlign={scrollSnapAlign}
            role="group"
            aria-roledescription="slide"
            {...rest}
        >
            {children}
        </StyledItem>
    );
};
