import { carouselConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

const mergedConfig = mergeConfig(carouselConfig);
const CarouselComponent = component(mergedConfig);

export const CarouselOld = CarouselComponent;
