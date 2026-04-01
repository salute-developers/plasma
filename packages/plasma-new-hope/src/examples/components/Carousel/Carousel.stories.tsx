import type { ComponentProps } from 'react';
import type { Meta } from '@storybook/react-vite';
import { getCarouselStories } from '@salutejs/plasma-sb-utils';

import { Carousel } from './Carousel';
import { config } from './Carousel.config';

type CarouselProps = ComponentProps<typeof Carousel>;

const { meta: META, Default } = getCarouselStories({
    component: Carousel,
    componentConfig: config,
});

const meta: Meta<CarouselProps> = {
    ...META,
    title: 'Data Entry/Carousel',
};

export default meta;

export { Default };
