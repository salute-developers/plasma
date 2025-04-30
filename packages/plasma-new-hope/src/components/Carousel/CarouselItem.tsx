import React from 'react';
import { styled } from '@linaria/react';

import { SnapAlign, SnapStop, CarouselItemProps } from './Carousel.types';

const StyledItem = styled.div<{ scrollSnapAlign: SnapAlign; scrollSnapStop: SnapStop }>`
    scroll-snap-align: ${({ scrollSnapAlign }) => scrollSnapAlign || 'none'};
    scroll-snap-stop: ${({ scrollSnapAlign, scrollSnapStop }) => (scrollSnapAlign ? scrollSnapStop : 'normal')};
`;

export const CarouselItem: React.FC<CarouselItemProps> = ({
    scrollSnapAlign = 'center',
    scrollSnapStop = 'always',
    children,
    ...rest
}) => {
    return (
        <StyledItem
            scrollSnapAlign={scrollSnapAlign}
            scrollSnapStop={scrollSnapStop}
            role="group"
            aria-roledescription="slide"
            {...rest}
        >
            {children}
        </StyledItem>
    );
};
