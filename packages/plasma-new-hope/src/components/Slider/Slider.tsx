import React, { forwardRef } from 'react';

import type { RootPropsOmitOnChange } from '../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { SingleSlider, DoubleSlider } from './components';
import type { SingleSliderProps } from './components';
import { SliderProps } from './Slider.types';

const isSingleValueProps = (props: SliderProps): props is SingleSliderProps => typeof props.value === 'number';

export const sliderRoot = (Root: RootPropsOmitOnChange<HTMLDivElement, SliderProps>) =>
    forwardRef<HTMLDivElement, SliderProps>((props, ref) => {
        return (
            <Root ref={ref} {...props}>
                {isSingleValueProps(props) && <SingleSlider {...props} />}
                {!isSingleValueProps(props) && <DoubleSlider {...props} />}
            </Root>
        );
    });

export const sliderConfig = {
    name: 'Slider',
    tag: 'div',
    layout: sliderRoot,
    base: '',
    variations: {
        view: {
            css: viewCSS,
        },
        size: {
            css: sizeCSS,
        },
        disabled: {
            css: disabledCSS,
            attrs: true,
        },
    },
    defaults: {
        view: 'default',
        size: 'm',
    },
};
