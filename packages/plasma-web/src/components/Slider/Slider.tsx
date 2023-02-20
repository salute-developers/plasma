import React from 'react';
import { Slider as SliderCore, SliderProps } from '@salutejs/plasma-core';
import {
    accent as borderColor,
    white as thumbBackgroundColor,
    surfaceLiquid03 as color,
    buttonAccent as fillColor,
} from '@salutejs/plasma-tokens-web';

const sliderSettings = {
    thumbBackgroundColor,
    borderColor,
    color,
    fillColor,
};

export const Slider = (props: SliderProps) => {
    return <SliderCore {...props} settings={sliderSettings} />;
};
