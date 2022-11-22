import styled from 'styled-components';
import { Carousel, CarouselProps as BaseCarouselProps } from '@salutejs/plasma-ui';

export type CarouselProps = Omit<BaseCarouselProps, 'detectActive' | 'detectThreshold'>;

export const CommonCarousel: typeof Carousel = styled(Carousel)`
    padding-right: var(--plasma-grid-margin);
` as typeof Carousel;
