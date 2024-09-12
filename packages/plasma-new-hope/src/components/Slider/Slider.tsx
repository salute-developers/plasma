import React, { forwardRef } from 'react';

import type { RootPropsOmitOnChange } from '../../engines';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { SingleSlider, DoubleUncontrolled } from './components';
import type { SingleSliderProps, DoubleUncontrolledProps } from './components';
import { SliderProps } from './Slider.types';

const isSingleValueProps = (props: SliderProps, type: string): props is SingleSliderProps =>
    typeof props.value === 'number' || (type === 'single' && typeof props.value !== 'object');

const isDoubleValueProps = (props: SliderProps, type: string): props is DoubleUncontrolledProps =>
    typeof props.value === 'object' || type === 'double';

export const sliderRoot = (Root: RootPropsOmitOnChange<HTMLDivElement, SliderProps>) =>
    forwardRef<HTMLDivElement, SliderProps>(({ type = 'single', ...props }, ref) => {
        return (
            <Root {...props} ref={ref}>
                {isSingleValueProps(props, type) && <SingleSlider {...props} />}
                {isDoubleValueProps(props, type) && <DoubleUncontrolled {...props} />}
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
