import React from 'react';
import styled from 'styled-components';

import { applyScrollSnap, ScrollSnapProps } from '../../mixins';
import type { AsProps } from '../../types';

export interface CarouselItemProps extends ScrollSnapProps, AsProps, React.HTMLAttributes<HTMLDivElement> {}

const StyledItem = styled.div<CarouselItemProps>`
    ${applyScrollSnap}
`;

export const CarouselItem: React.FC<CarouselItemProps> = ({ scrollSnapAlign = 'center', children, ...rest }) => {
    return (
        <StyledItem scrollSnapAlign={scrollSnapAlign} role="group" aria-roledescription="slide" {...rest}>
            {children}
        </StyledItem>
    );
};
