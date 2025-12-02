import React, { useState, ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import { InSpacingDecorator, disableProps } from '../../helpers';

import { NumberInput } from './NumberInput';

const onChange = action('onChange');
const onDecrement = action('onDecrement');
const onIncrement = action('onIncrement');

const shapes = ['cornered', 'pilled'];

const meta: Meta<typeof NumberInput> = {
    title: 'Data Entry/NumberInput',
    component: NumberInput,
    decorators: [InSpacingDecorator],
    argTypes: {
        min: {
            control: {
                type: 'number',
            },
        },
        max: {
            control: {
                type: 'number',
            },
        },
        shape: {
            options: shapes,
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['view', 'size', 'segmentation', 'inputBackgroundType']),
    },
};

export default meta;

type StoryPropsDefault = ComponentProps<typeof NumberInput>;

const StoryDefault = (args: StoryPropsDefault) => {
    const [value, setValue] = useState<number | string | undefined>(5);

    const handleChange = (_: any, newValue: number | string | undefined) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <NumberInput
            {...args}
            value={value}
            onChange={handleChange}
            onDecrement={onDecrement}
            onIncrement={onIncrement}
        />
    );
};

export const Default: StoryObj<StoryPropsDefault> = {
    args: {
        view: 'default',
        size: 's',
        shape: 'cornered',
        inputBackgroundType: 'clear',
        segmentation: 'solid',
        min: 0,
        max: 9,
        step: 1,
        width: 140,
        isManualInput: false,
        textBefore: '',
        textAfter: '',
        isLoading: false,
        disabled: false,
    },
    render: StoryDefault,
};
