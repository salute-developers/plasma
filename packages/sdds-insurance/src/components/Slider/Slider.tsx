import { sliderConfig, component, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';

import { config } from './Slider.config';

const mergedConfig = mergeConfig(sliderConfig, config);
const SliderComponent = component(mergedConfig);

/**
 * Слайдер позволяет определить числовое значение в пределах указанного промежутка.
 * Можно указать два значения.
 */
export const Slider = SliderComponent;
