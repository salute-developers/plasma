import { carouselNewConfig, CarouselItem } from '../../../../components/Carousel';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Carousel.config';

export const mergedConfig = mergeConfig(carouselNewConfig, config);
export const Carousel = component(mergedConfig);

export { CarouselItem };
