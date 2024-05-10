import { sliderConfig } from '../../../../components/Slider';
import { component, mergeConfig } from '../../../../engines';

import { config } from './Slider.config';

const mergedConfig = mergeConfig(sliderConfig, config);
export const Slider = component(mergedConfig);

/**
 * Слайдер позволяет определить числовое значение в пределах указанного промежутка.
 * Можно указать два значения.
 */
