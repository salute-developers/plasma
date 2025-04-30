import { carouselConfig, CarouselItem } from '../../../../components/Carousel';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Carousel.config';

export const mergedConfig = mergeConfig(carouselConfig, config);
export const Carousel = component(mergedConfig);

export { CarouselItem };
