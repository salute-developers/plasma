import React from 'react';

import { Slider as SliderSingleValue } from './Single';
import { Slider as SliderDoubleValues } from './Double';
import type { SliderProps, SingleSliderProps, SliderInternalProps } from './types';

const isSingleValueProps = (props: SliderProps): props is SingleSliderProps => typeof props.value === 'number';

/**
 * Слайдер позволяет определить числовое значение в пределах указанного промежутка.
 * Можно указать два значения.
 * Только для приложения Салют.
 */
export const SliderCore: React.FC<SliderProps & SliderInternalProps> = (props) => {
    if (isSingleValueProps(props)) {
        return <SliderSingleValue {...props} />;
    }
    return <SliderDoubleValues {...props} />;
};
