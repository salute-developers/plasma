import React from 'react';
import styled from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins/applyScrollSnap';
import { Col, ColProps } from '../Grid';

import { CarouselVirtualItemProps } from './CarouselVirtualItem';

const StyledCol = styled(Col)<ScrollSnapProps>`
    ${applyScrollSnap};
`;

export interface CarouselVirtualColProps
    extends ColProps,
        CarouselVirtualItemProps,
        React.HTMLAttributes<HTMLDivElement> {
    axis: string;
}

/**
 * Элемент списка. В рамках интерфейса элемент наследуется от ``Col`` и ``CarouselItem``.
 * Используется для каруселей с сеткой.
 */
export const CarouselVirtualCol: React.FC<CarouselVirtualColProps> = ({ axis, start, children, style, ...rest }) => {
    return (
        <StyledCol
            style={{
                transform: axis === 'x' ? `translateX(${start}px)` : `translateY(${start}px)`,
                position: 'absolute',
                top: 0,
                left: 0,
                ...style,
            }}
            type="calc"
            role="group"
            aria-roledescription="slide"
            {...rest}
        >
            {children}
        </StyledCol>
    );
};
