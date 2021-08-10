import styled from 'styled-components';
import { Carousel, CarouselProps as BaseCarouselProps } from '@salutejs/plasma-ui';

export type CarouselProps = Omit<BaseCarouselProps, 'detectAvtive' | 'detectThreshold'>;

export type { CarouselProps } from '@salutejs/plasma-ui';

export const CommonCarousel = styled(Carousel)`
    padding-right: var(--plasma-grid-margin);
`;
