import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { TextField } from '../TextField/TextField';

import { TextFieldGroup } from './TextFieldGroup';

type StoryProps = Omit<ComponentProps<typeof TextFieldGroup>, 'gap'> & {
    itemsCount?: number;
    gapDefaultShape?: string;
    gapSegmentedShape?: string;
};
type Story = StoryObj<StoryProps>;

const sizes = ['m'];
const orientationValues = ['horizontal', 'vertical'];
const gapDefaultValues = ['dense', 'wide'];
const gapSegmentedValues = ['none', 'dense'];
const shapeValues = ['segmented', 'default'];
const stretchingValues = ['auto', 'filled'];

const meta: Meta<typeof TextFieldGroup> = {
    title: 'Data Entry/TextFieldGroup',
    decorators: [InSpacingDecorator],
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
