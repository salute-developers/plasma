import React, { forwardRef } from 'react';
import type { RootPropsOmitOnChangeAndDefaultValue } from 'src/engines';
import cls from 'classnames';

import { base as viewCSS } from './variations/_view/base';
import { base as sizeCSS } from './variations/_size/base';
import { base as disabledCSS } from './variations/_disabled/base';
import { SingleSlider, DoubleSlider } from './components';
import type { SingleSliderProps, DoubleSliderProps } from './components';
import { SliderProps, SliderRootProps } from './Slider.types';
import { classes } from './Slider.tokens';

const isSingleValueProps = (props: SliderProps, type: string): props is SingleSliderProps =>
    typeof props.value === 'number' || (type === 'single' && typeof props.value !== 'object');

const isDoubleValueProps = (props: SliderProps, type: string): props is DoubleSliderProps =>
    typeof props.value === 'object' || type === 'double';

export const sliderRoot = (Root: RootPropsOmitOnChangeAndDefaultValue<HTMLDivElement, SliderRootProps>) =>
    forwardRef<HTMLDivElement, SliderProps>(
        ({ type = 'single', view, size, disabled, className, style, ...props }, ref) => {
            if (isSingleValueProps(props, type)) {
                return (
                    <Root
                        ref={ref}
                        view={view}
                        size={size}
                        disabled={disabled}
                        className={cls(className, { [classes.verticalOrientation]: props.orientation === 'vertical' })}
                        style={style}
                    >
                        <SingleSlider disabled={disabled} {...props} />
                    </Root>
                );
            }

            return (
                <Root ref={ref} view={view} size={size} disabled={disabled} className={className} style={style}>
                    {isDoubleValueProps(props, type) && <DoubleSlider disabled={disabled} {...props} />}
                </Root>
            );
        },
    );

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
