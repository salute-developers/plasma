import { Meta } from '@storybook/react';

import { Basic, Vertical, MusicPage, CenterItem } from '../Carousel/Carousel.stories';

export default {
    title: 'Controls/CarouselVirtual',
} as Meta;

/**
 * TODO
 * carouselHeight={carouselHeight} переименовать в height
 * scrollSnapType - как это поддерживает CarouselVirtual?
 */

export { Basic, Vertical, MusicPage, CenterItem };
