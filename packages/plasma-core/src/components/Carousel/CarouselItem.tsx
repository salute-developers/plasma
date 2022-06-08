import React from 'react';
import styled, { css } from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins';
import type { AsProps } from '../../types';

type WithVirtualizationProps = {
    withUseVirtual?: boolean; // на самом деле true
    virtualTop?: number;
    virtualLeft?: number;
    scrollSnapAlign?: never;
};

type WithoutVirtualizationProps = {
    withUseVirtual?: false;
    virtualTop: never;
    virtualLeft: never;
} & ScrollSnapProps;

export type VirtualizationProps = WithVirtualizationProps | WithoutVirtualizationProps;

export type CarouselItemProps = AsProps & VirtualizationProps & React.HTMLAttributes<HTMLDivElement>;

const StyledItem = styled.div<CarouselItemProps>`
    ${({ withUseVirtual }) =>
        withUseVirtual
            ? css`
                  position: absolute;
              `
            : applyScrollSnap}
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
