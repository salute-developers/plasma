import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { WithTheme } from '../../../_helpers';
import { TextField } from '../TextField/TextField';

import { TextFieldGroup } from './TextFieldGroup';

type StoryProps = Omit<ComponentProps<typeof TextFieldGroup>, 'gap'> & {
    itemsCount?: number;
    gapDefaultShape?: string;
    gapSegmentedShape?: string;
};
type Story = StoryObj<StoryProps>;

const sizes = ['l', 'm', 's', 'xs'];
const orientationValues = ['horizontal', 'vertical'];
const gapDefaultValues = ['dense', 'wide'];
const gapSegmentedValues = ['none', 'dense'];
const shapeValues = ['segmented', 'default'];
const stretchingValues = ['auto', 'filled'];

const meta: Meta<typeof TextFieldGroup> = {
    title: 'plasma_b2c/TextFieldGroup',
    decorators: [WithTheme],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        orientation: {
            options: orientationValues,
            control: {
                type: 'inline-radio',
            },
        },
        shape: {
            options: shapeValues,
            control: {
                type: 'select',
            },
        },
        stretching: {
            options: stretchingValues,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['gap']),
    },
};

export default meta;

export const Default: Story = {
    argTypes: {
        gapDefaultShape: {
            options: gapDefaultValues,
            control: { type: 'select' },
            if: { arg: 'shape', eq: 'default' },
        },
        gapSegmentedShape: {
            options: gapSegmentedValues,
            control: { type: 'select' },
            if: { arg: 'shape', eq: 'segmented' },
        },
    },
    args: {
        size: 'm',
        shape: 'default',
        gapDefaultShape: 'dense',
        gapSegmentedShape: 'dense',
        orientation: 'horizontal',
        itemsCount: 5,
        stretching: 'auto',
    },
    render: ({ itemsCount, gapDefaultShape, gapSegmentedShape, ...args }: StoryProps) => {
        return (
            <TextFieldGroup {...args} gap={(gapDefaultShape || gapSegmentedShape) as any}>
                {Array(itemsCount)
                    .fill(true)
                    .map((_, i) => (
                        <TextField placeholder={`input #${i}`} />
                    ))}
            </TextFieldGroup>
        );
    },
};

export const CustomTextFields: Story = {
    args: {
        ...Default.args,
        isCommonTextFieldStyles: false,
    },
    argTypes: {
        ...Default.argTypes,
        ...disableProps(['itemsCount']),
    },
    render: ({ gapDefaultShape, gapSegmentedShape, ...args }: StoryProps) => {
        return (
            <>
                <h3>Группа TextField с разными размерами</h3>
                <TextFieldGroup {...args} gap={(gapDefaultShape || gapSegmentedShape) as any}>
                    <TextField placeholder="Размер l" size="l" />
                    <TextField placeholder="Размер m" size="m" />
                    <TextField placeholder="Размер s" size="s" />
                    <TextField placeholder="Размер xs" size="xs" />
                </TextFieldGroup>
            </>
        );
    },
};
