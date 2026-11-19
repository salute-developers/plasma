import { IconMic } from '@salutejs/plasma-icons';
import { component, sliderConfig, mergeConfig } from '@salutejs/plasma-new-hope/styled-components';
import { useState } from 'react';

const Slider = component(mergeConfig(sliderConfig as any, {}));

const SliderDefault = {
    name: 'Default',
    args: [
        {
            name: 'min',
            value: 0,
        },
        {
            name: 'max',
            value: 150,
        },
        {
            name: 'step',
            value: 1,
        },
        {
            name: 'multipleStepSize',
            value: 10,
        },
        {
            name: 'label',
            value: 'Цена микрофона',
        },
        {
            name: 'showScale',
            value: true,
        },
        {
            name: 'showTicks',
            value: false,
        },
        {
            name: 'showCurrentValue',
            value: false,
        },
        {
            name: 'showIcon',
            value: true,
        },
        {
            name: 'reversed',
            value: false,
        },
        {
            name: 'labelReversed',
            value: false,
        },
        {
            name: 'disabled',
            value: false,
        },
        {
            name: 'orientation',
            value: 'horizontal',
            items: [
                {
                    value: 'horizontal',
                    label: 'horizontal',
                },
                {
                    value: 'vertical',
                    label: 'vertical',
                },
            ],
        },
        {
            name: 'labelPlacement',
            value: 'top',
            items: [
                {
                    value: 'top',
                    label: 'top',
                },
                {
                    value: 'left',
                    label: 'left',
                },
            ],
        },
        {
            name: 'sliderAlign',
            value: 'center',
            items: [
                {
                    value: 'center',
                    label: 'center',
                },
                {
                    value: 'left',
                    label: 'left',
                },
                {
                    value: 'right',
                    label: 'right',
                },
                {
                    value: 'none',
                    label: 'none',
                },
            ],
        },
        {
            name: 'scaleAlign',
            value: 'bottom',
            items: [
                {
                    value: 'side',
                    label: 'side',
                },
                {
                    value: 'bottom',
                    label: 'bottom',
                },
                {
                    value: 'top',
                    label: 'top',
                },
            ],
        },
        {
            name: 'currentValueVisibility',
            value: 'always',
            items: [
                {
                    value: 'always',
                    label: 'always',
                },
                {
                    value: 'hover',
                    label: 'hover',
                },
            ],
        },
        {
            name: 'pointerVisibility',
            value: 'always',
            items: [
                {
                    value: 'always',
                    label: 'always',
                },
                {
                    value: 'hover',
                    label: 'hover',
                },
            ],
        },
    ],
    render: function Story(args: any) {
        const {
            showIcon,
            showTicks,
            orientation,
            labelPlacement,
            size,
            min,
            max,
            step,
            valuePlacementHorizontal,
            valuePlacementVertical,
            ...rest
        } = args;

        const [value, setValue] = useState(30);

        const hideMinValueDiff = 3;
        const hideMaxValueDiff = 5;
        const isVertical = orientation === 'vertical';
        const scaleTicks = showTicks ? [0, 13, 37, 72, 89, 100, 150] : undefined;
        const valuePlacement = isVertical ? valuePlacementVertical : valuePlacementHorizontal;

        const onChange = (values: any) => {
            setValue(values);
        };

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
                    valuePlacement={valuePlacement}
                    onChangeCommitted={onChange}
                    onChange={onChange}
                    hideMinValueDiff={hideMinValueDiff}
                    hideMaxValueDiff={hideMaxValueDiff}
                    {...rest}
                />
            </div>
        );
    },
};

const SliderMultipleValues = {
    name: 'MultipleValues',
    args: [
        {
            name: 'min',
            value: 0,
        },
        {
            name: 'max',
            value: 150,
        },
        {
            name: 'step',
            value: 1,
        },
        {
            name: 'multipleStepSize',
            value: 10,
        },
        {
            name: 'label',
            value: 'Цена товара',
        },
        {
            name: 'disabled',
            value: false,
        },
    ],
    render: function Story(args: any) {
        const { orientation, min, max, ...rest } = args;

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
                        if (event.key === 'Enter') {
                            setValue(sortValues(values));
                        }
                    }}
                    onBlurTextField={(values: number[]) => setValue(sortValues(values))}
                    onChangeCommitted={(values: any) => setValue(sortValues(values))}
                    onChange={(values: any) => setValue(sortValues(values))}
                    {...rest}
                />
            </div>
        );
    },
};

export const SliderStories = [SliderDefault, SliderMultipleValues];
