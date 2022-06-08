import React from 'react';
import styled from 'styled-components';
import { applyScrollSnap, ScrollSnapProps, CarouselItemProps, CarouselItemVirtualProps } from '@salutejs/plasma-core';

import { Col, ColProps } from '../Grid';

const StyledCol = styled(Col)<ScrollSnapProps>`
    ${applyScrollSnap}
`;

const StyledColVirtual = styled(Col)`
    position: absolute;
`;

export type CarouselColProps = ColProps & CarouselItemProps & React.HTMLAttributes<HTMLDivElement>;
export type CarouselColVirtualProps = ColProps & CarouselItemVirtualProps & React.HTMLAttributes<HTMLDivElement>;

/**
 * Элемент списка. В рамках интерфейса элемент наследуется от ``Col`` и ``CarouselItem``.
 * Используется для каруселей с сеткой.
 */
export const CarouselCol: React.FC<CarouselColProps> = ({ children, ...rest }) => {
    return (
        <StyledCol type="calc" role="group" aria-roledescription="slide" {...rest}>
            {children}
        </StyledCol>
    );
};

export const CarouselColVirtual = ({ left, top, children, ...props }: CarouselColVirtualProps) => {
    return (
        <StyledColVirtual
            type="calc"
            role="group"
            aria-roledescription="slide"
            style={{ transform: `translate(${left ?? 0}px, ${top ?? 0}px)` }}
            {...props}
        >
            {children}
        </StyledColVirtual>
    );
};
