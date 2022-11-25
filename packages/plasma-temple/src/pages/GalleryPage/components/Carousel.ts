import styled, { StyledComponent } from 'styled-components';
import { Carousel, CarouselProps as BaseCarouselProps } from '@salutejs/plasma-ui';

export type CarouselProps = Omit<BaseCarouselProps, 'detectActive' | 'detectThreshold'>;

type StyledCarousel = StyledComponent<typeof Carousel, any, CarouselProps, never>;

export const CommonCarousel: StyledCarousel = styled(Carousel)`
    padding-right: var(--plasma-grid-margin);
`;
