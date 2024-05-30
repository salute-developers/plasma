import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import styled from 'styled-components';
import { disableProps } from '@salutejs/plasma-sb-utils';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { WithTheme } from '../../../_helpers';

import { Slider } from './Slider';

const sizes = ['l', 'm', 's'];
const views = ['default', 'accent', 'gradient'];
const labelPlacements = ['outer', 'inner'];
const rangeValuesPlacement = ['outer', 'inner'];

const meta: Meta<typeof Slider> = {
    title: 'plasma_b2c/Slider',
    component: Slider,
    decorators: [WithTheme],
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps([
            'value',
            'onChangeCommitted',
            'ariaLabel',
            'onChange',
            'fontSizeMultiplier',
            'gap',
            'settings',
            'hasHoverAnimation',
        ]),
    },
};

export default meta;

type StoryProps = Omit<ComponentProps<typeof Slider>, 'value' | 'onChangeCommitted'>;
type StorySingleProps = StoryProps;

type StorySingle = StoryObj<StorySingleProps>;
type StoryDouble = StoryObj<StoryProps>;

const SliderWrapper = styled.div`
    width: 25rem;
`;

const StoryDefault = (args: StorySingleProps) => {
    const [value, setValue] = useState(30);

    const onChangeCommittedHandle = (values) => {
        setValue(values);
    };

    const onChangeHandle = (values) => {
        setValue(values);
    };

    return (
        <SliderWrapper>
            <Slider value={value} onChangeCommitted={onChangeCommittedHandle} onChange={onChangeHandle} {...args} />
        </SliderWrapper>
    );
};

export const Default: StorySingle = {
    argTypes: {
        labelPlacement: {
            options: labelPlacements,
            control: {
                type: 'inline-radio',
            },
        },
        rangeValuesPlacement: {
            options: rangeValuesPlacement,
            control: {
                type: 'inline-radio',
            },
        },
    },
    args: {
        view: 'default',
        size: 'm',
        min: 0,
        max: 100,
        disabled: false,
        ariaLabel: 'Цена товара',
        multipleStepSize: 10,
        label: 'Цена товара',
        labelPlacement: 'outer',
        rangeValuesPlacement: 'outer',
        showRangeValues: true,
        showCurrentValue: false,
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
        <SliderWrapper>
            <Slider
                value={value}
                onKeyDownTextField={onKeyDownTextField}
                onBlurTextField={onBlurTextField}
                onChangeCommitted={onChangeCommitedHandle}
                onChange={onChangeHandle}
                {...args}
            />
        </SliderWrapper>
    );
};

export const MultipleValues: StoryDouble = {
    args: {
        view: 'default',
        size: 'm',
        min: 0,
        max: 100,
        disabled: false,
        label: 'Цена товара',
        ariaLabel: ['Минимальная цена товара', 'Максимальная цена товара'],
        multipleStepSize: 10,
    },
    render: (args) => <StoryMultipleValues {...args} />,
};
