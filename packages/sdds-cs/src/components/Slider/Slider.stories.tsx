import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import { InSpacingDecorator, disableProps, getConfigVariations } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconMic } from '@salutejs/plasma-icons';

import { Slider } from './Slider';
import { config } from './Slider.config';

const { views } = getConfigVariations(config);

const pointerSizes = ['small', 'none'];
const sliderAligns = ['center', 'left', 'right', 'none'];
const labelPlacements = ['top', 'left'];
const scaleAligns = ['side', 'bottom'];
const orientations: Array<string> = ['vertical', 'horizontal'];
const visibility = ['always', 'hover'];

const meta: Meta<typeof Slider> = {
    title: 'Data Entry/Slider',
    component: Slider,
    decorators: [InSpacingDecorator],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        pointerSize: {
            options: pointerSizes,
            control: {
                type: 'inline-radio',
            },
        },
        orientation: {
            options: orientations,
            control: {
                type: 'select',
            },
        },
        ...disableProps([
            'size',
            'value',
            'onChangeCommitted',
            'onChangeTextField',
            'onBlurTextField',
            'onKeyDownTextField',
            'ariaLabel',
            'onChange',
            'fontSizeMultiplier',
            'gap',
            'settings',
            'hasHoverAnimation',
            'type',
            'labelContentLeft',
            'rangeValuesPlacement',
            'name',
            'defaultValue',
            'labelContent',
            'showRangeValues',
            'hideMinValueDiff',
            'hideMaxValueDiff',
        ]),
    },
};

export default meta;

type StoryProps = Omit<ComponentProps<typeof Slider>, 'value' | 'onChangeCommitted'>;
type StorySingleProps = StoryProps;

type StorySingle = StoryObj<StorySingleProps>;
type StoryDouble = StoryObj<StoryProps>;

const SliderWrapper = styled.div<{ isVertical?: boolean }>`
    padding: 1rem;

    width: calc(100% - 2rem);
    height: ${({ isVertical }) => (isVertical ? '25rem' : 'auto')};

    background-color: rgb(232, 238, 242, 0.4);
`;

const StoryDefault = (args: StorySingleProps) => {
    const [value, setValue] = useState(30);

    const onChangeCommittedHandle = (values) => {
        setValue(values);
    };

    const onChangeHandle = (values) => {
        setValue(values);
    };

    const { hasIcon, showIcon, orientation, labelPlacement, labelVerticalPlacement, ...rest } = args;
    const isVertical = orientation === 'vertical';

    return (
        <SliderWrapper isVertical={isVertical}>
            <Slider
                value={value}
                orientation={orientation}
                labelPlacement={labelPlacement}
                labelContent={showIcon ? <IconMic size="xs" /> : null}
                onChangeCommitted={onChangeCommittedHandle}
                onChange={onChangeHandle}
                {...rest}
                size="s"
            />
        </SliderWrapper>
    );
};

export const Default: StorySingle = {
    argTypes: {
        sliderAlign: {
            options: sliderAligns,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'orientation', eq: 'vertical' },
        },
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'orientation', eq: 'horizontal' },
        },
        labelReversed: {
            control: {
                type: 'boolean',
                expanded: true,
            },
            if: { arg: 'orientation', eq: 'vertical' },
        },
        scaleAlign: {
            options: scaleAligns,
            control: {
                type: 'inline-radio',
            },
            if: { arg: 'orientation', eq: 'horizontal' },
        },
        orientation: {
            options: orientations,
            control: {
                type: 'inline-radio',
            },
        },
        reversed: {
            control: {
                type: 'boolean',
            },
            if: { arg: 'orientation', eq: 'vertical' },
        },
        pointerVisibility: {
            options: visibility,
            control: {
                type: 'inline-radio',
            },
        },
        currentValueVisibility: {
            options: visibility,
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        view: 'default',
        pointerSize: 'small',
        pointerVisibility: 'always',
        min: 0,
        max: 100,
        orientation: 'horizontal',
        ariaLabel: 'Цена микрофона',
        multipleStepSize: 10,
        label: 'Цена микрофона',
        labelPlacement: 'top',
        sliderAlign: 'center',
        scaleAlign: 'bottom',
        showScale: true,
        showCurrentValue: false,
        currentValueVisibility: 'always',
        showIcon: true,
        reversed: false,
        labelReversed: false,
        disabled: false,
    },
    render: (args) => <StoryDefault {...args} />,
};

const StoryMultipleValues = (args: StoryProps) => {
    const [value, setValue] = useState([10, 80]);
    const sortValues = (values) => {
        return values
            .map((val) => {
                if (val < args.min) {
                    return args.min;
                }
                if (val > args.max) {
                    return args.max;
                }
                return val;
            })
            .sort((a, b) => a - b);
    };

    const onChangeHandle = (values) => {
        setValue(sortValues(values));
    };

    const onChangeCommitedHandle = (values) => {
        setValue(sortValues(values));
    };

    const onBlurTextField = (values) => {
        setValue(sortValues(values));
    };

    const onKeyDownTextField = (values, event) => {
        if (event.key === 'Enter') {
            setValue(sortValues(values));
        }
    };

    return (
        <SliderWrapper isVertical={args.orientation === 'vertical'}>
            <Slider
                value={value}
                onKeyDownTextField={onKeyDownTextField}
                onBlurTextField={onBlurTextField}
                onChangeCommitted={onChangeCommitedHandle}
                onChange={onChangeHandle}
                {...args}
                size="s"
            />
        </SliderWrapper>
    );
};

export const MultipleValues: StoryDouble = {
    args: {
        view: 'default',
        pointerSize: 'small',
        min: 0,
        max: 100,
        disabled: false,
        label: 'Цена товара',
        ariaLabel: ['Минимальная цена товара', 'Максимальная цена товара'],
        multipleStepSize: 10,
    },
    argTypes: {
        pointerSize: {
            options: ['small', 'large'],
            control: {
                type: 'select',
            },
        },
        ...disableProps([
            'size',
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
        ]),
    },
    render: (args) => <StoryMultipleValues {...args} />,
};
