import React from 'react';
import styled, { css } from 'styled-components';
import { applyScrollSnap, ScrollSnapProps, CarouselItemProps, VirtualizationProps } from '@salutejs/plasma-core';

import { Col, ColProps } from '../Grid';

const StyledCol = styled(Col)<ScrollSnapProps & VirtualizationProps>`
    ${({ withUseVirtual }) =>
        withUseVirtual &&
        css`
            position: absolute;
        `}

    ${applyScrollSnap};
`;

export type CarouselColProps = ColProps & CarouselItemProps & React.HTMLAttributes<HTMLDivElement>;

/**
 * Элемент списка. В рамках интерфейса элемент наследуется от ``Col`` и ``CarouselItem``.
 * Используется для каруселей с сеткой.
 */
export const CarouselCol: React.FC<CarouselColProps> = ({
    virtualLeft,
    virtualTop,
    withUseVirtual,
    children,
    ...rest
}) => {
    return (
        <StyledCol
            type="calc"
            role="group"
            aria-roledescription="slide"
            withUseVirtual={withUseVirtual}
            style={withUseVirtual ? { transform: `translate(${virtualLeft ?? 0}px, ${virtualTop ?? 0}px)` } : undefined}
            {...rest}
        >
            {children}
        </StyledCol>
    );
};
