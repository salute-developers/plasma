import React from 'react';
import styled from 'styled-components';

import { applyScrollSnap } from '../../mixins';
import { Col, ColProps as BaseProps } from '../Grid';

import { VirtualCarouselItemProps } from './VirtualCarouselItem';

export interface ColProps extends BaseProps {
    /**
     * Тип ячейки
     */
    type?: 'rel' | 'calc';
}

export type VirtualCarouselColProps = ColProps & VirtualCarouselItemProps;

const StyledCol = styled(Col).attrs((props: VirtualCarouselColProps) => {
    return {
        style: { transform: props.axis === 'x' ? `translateX(${props.start}px)` : `translateY(${props.start}px)` },
    };
})<VirtualCarouselColProps>`
    position: 'absolute';
    top: 0;
    left: 0;
    ${applyScrollSnap};
`;
/**
 * Элемент списка. В рамках интерфейса элемент наследуется от ``Col`` и ``CarouselItem``.
 * Используется для каруселей с сеткой.
 */
export const VirtualCarouselCol: React.FC<VirtualCarouselColProps> = ({ axis, start, children, ...rest }) => {
    return (
        <StyledCol axis={axis} start={start} type="calc" role="group" aria-roledescription="slide" {...rest}>
            {children}
        </StyledCol>
    );
};
