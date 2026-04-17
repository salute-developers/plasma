import React, { useState } from 'react';
import { action } from 'storybook/actions';
import { IconMic } from '@salutejs/plasma-icons';

import { disableProps } from '../../index';

const onChangeCommitted = action('onChangeCommitted');
const onChange = action('onChange');

export const createDefaultStory = (Slider: any) => {
    return ({ showIcon, showTicks, orientation, labelPlacement, size, min, max, step, ...rest }: any) => {
        const [value, setValue] = useState(30);
        const isVertical = orientation === 'vertical';
        const scaleTicks = showTicks ? [0, 13, 37, 72, 89, 100, 150] : undefined;

        return (
            <div style={{ width: isVertical ? 'auto' : '25rem', height: isVertical ? '25rem' : 'auto' }}>
                <Slider
                    value={value}
                    size={size}
                    min={min}
                    max={max}
                    step={step}
                    orientation={orientation}
                    labelPlacement={labelPlacement}
                    labelContent={showIcon ? <IconMic size={size === 's' ? 'xs' : 's'} /> : null}
                    scaleTicks={scaleTicks}
                    onChangeCommitted={(values: any) => {
                        setValue(values);
                        onChangeCommitted(values);
                    }}
                    onChange={(values: any) => {
                        setValue(values);
                        onChange(values);
                    }}
                    {...rest}
                />
            </div>
        );
    };
};

export const createMultipleValuesStoryArgTypes = () => ({
    argTypes: {
        pointerSize: {
            options: ['small', 'large'],
            control: { type: 'select' },
            table: { category: 'variation' },
        },
        ...disableProps([
            'orientation',
            'labelPlacement',
            'scaleAlign',
            'sliderAlign',
            'reversed',
            'labelReversed',
            'showCurrentValue',
            'showScale',
            'pointerVisibility',
            'currentValueVisibility',
            'showIcon',
            'showTicks',
        ]),
    },
    args: {
        label: 'Цена товара',
        multipleStepSize: 10,
    },
});

export const createMultipleValuesStory = (Slider: any) => {
    return ({ orientation, min, max, ...args }: any) => {
        const [value, setValue] = useState([10, 80]);

        const sortValues = (values: number[]) =>
            values
                .map((val) => {
                    if (val < min) return min;
                    if (val > max) return max;
                    return val;
                })
                .sort((a, b) => a - b);

        return (
            <div
                style={{
                    width: orientation === 'vertical' ? 'auto' : '25rem',
                    height: orientation === 'vertical' ? '25rem' : 'auto',
                }}
            >
                <Slider
                    value={value}
                    min={min}
                    max={max}
                    onKeyDownTextField={(values: number[], event: React.KeyboardEvent) => {
                        if (event.key === 'Enter') setValue(sortValues(values));
                    }}
                    onBlurTextField={(values: number[]) => setValue(sortValues(values))}
                    onChangeCommitted={(values: any) => setValue(sortValues(values))}
                    onChange={(values: any) => setValue(sortValues(values))}
                    {...args}
                />
            </div>
        );
    };
};
