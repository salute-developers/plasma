import React, { forwardRef } from 'react';

import type { RootPropsOmitOnChangeAndDefaultValue } from '../../engines';
import { cx } from '../../utils';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { SingleSlider, DoubleUncontrolled } from './components';
import type { SingleSliderProps, DoubleUncontrolledProps } from './components';
import { SliderProps } from './Slider.types';
import { classes } from './Slider.tokens';

// TODO: проверить, можно ли обойтись без каста типов

const isSingleValueProps = (props: SliderProps, type: string): props is SingleSliderProps =>
    typeof props.value === 'number' || (type === 'single' && typeof props.value !== 'object');

const isDoubleValueProps = (props: SliderProps, type: string): props is DoubleUncontrolledProps =>
    typeof props.value === 'object' || type === 'double';

export const sliderRoot = (Root: RootPropsOmitOnChangeAndDefaultValue<HTMLDivElement, SliderProps>) =>
    forwardRef<HTMLDivElement, SliderProps>(({ type = 'single', ...props }, ref) => {
        if (isSingleValueProps(props, type)) {
            return (
                <Root
                    {...props}
                    className={cx(props.orientation === 'vertical' && classes.verticalOrientation, props.className)}
                    ref={ref}
                >
                    <SingleSlider {...props} />
                </Root>
            );
        }

        return (
            <Root ref={ref} {...props}>
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
