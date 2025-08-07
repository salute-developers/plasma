import React, { ComponentProps, useState } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { WithTheme } from '../../_helpers';

import { NumberInput } from './NumberInput';

const onChange = action('onChange');
const onDecrement = action('onDecrement');
const onIncrement = action('onIncrement');

const views = ['default', 'secondary', 'accent', 'clear'];
const sizes = ['l', 'm', 's', 'xs'];
const shapes = ['cornered', 'pilled'];
const inputBackgroundTypes = ['fill', 'clear'];
const segmentation = ['default', 'segmented', 'solid'];

const meta: Meta<typeof NumberInput> = {
    title: 'Data Entry/NumberInput',
    component: NumberInput,
    decorators: [WithTheme],
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
        shape: {
            options: shapes,
            control: {
                type: 'inline-radio',
            },
        },
        inputBackgroundType: {
            options: inputBackgroundTypes,
            control: {
                type: 'inline-radio',
            },
        },
        segmentation: {
            options: segmentation,
            control: {
                type: 'select',
            },
        },
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
        size: 'l',
        shape: 'cornered',
        inputBackgroundType: 'fill',
        segmentation: 'default',
        min: 0,
        max: 9,
        precision: 2,
        step: 1,
        width: 188,
        isManualInput: false,
        textBefore: '',
        textAfter: '',
        isLoading: false,
        disabled: false,
    },
    render: StoryDefault,
};
