import React from 'react';
import styled from 'styled-components';
import { useCarouselItem } from '@salutejs/plasma-core';
import { applyScrollSnap, ScrollSnapProps } from '@salutejs/plasma-core/mixins';
import type { AsProps } from '@salutejs/plasma-core/types';

const StyledCarouselItem = styled.div`
    ${applyScrollSnap};
`;

export interface CarouselItemProps extends ScrollSnapProps, AsProps, React.HTMLAttributes<HTMLDivElement> {}

/**
 * Элемент списка. Используется для каруселей без сетки.
 */
export const CarouselItem: React.FC<CarouselItemProps> = ({ children, ...rest }) => {
    const itemRef = useCarouselItem<HTMLDivElement>();

    return (
        <StyledCarouselItem ref={itemRef} {...rest}>
            {children}
        </StyledCarouselItem>
    );
};
