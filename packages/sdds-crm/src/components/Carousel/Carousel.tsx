import { carouselNewConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Carousel.config';

const mergedConfig = mergeConfig(carouselNewConfig, config);
const Carousel = component(mergedConfig);

export { Carousel };
