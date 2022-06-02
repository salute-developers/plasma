import React from 'react';
import styled, { css } from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins';
import type { AsProps } from '../../types';

type WithVirtualizationProps = {
    withUseVirtual?: boolean;
    virtualTop?: number;
    virtualLeft?: number;
};

type WithoutVirtualizationProps = {
    withUseVirtual?: false;
    virtualTop: never;
    virtualLeft: never;
};

export type VirtualizationProps = WithVirtualizationProps | WithoutVirtualizationProps;

export type CarouselItemProps = ScrollSnapProps & AsProps & VirtualizationProps & React.HTMLAttributes<HTMLDivElement>;

const StyledItem = styled.div<CarouselItemProps>`
    ${({ withUseVirtual }) =>
        withUseVirtual &&
        css`
            position: absolute;
        `}

    ${applyScrollSnap}
`;

export const CarouselItem: React.FC<CarouselItemProps> = ({
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
