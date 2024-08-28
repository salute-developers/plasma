import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';

import { ButtonGroup } from './ButtonGroup';

type StoryProps = ComponentProps<typeof ButtonGroup> & { itemsCount?: number };
type Story = StoryObj<StoryProps>;

const views = ['accent', 'secondary', 'clear'];
const sizes = ['s'];
const orientationValues = ['horizontal', 'vertical'];
const gapValues = ['none', 'dense', 'wide'];
const shapeValues = ['segmented', 'default'];
const stretchingValues = ['auto', 'filled'];

const meta: Meta<typeof ButtonGroup> = {
    title: 'Controls/ButtonGroup',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'select',
            },
        },
        view: {
            options: views,
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
        gap: {
            options: gapValues,
            control: {
                type: 'select',
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
    },
};

export default meta;

export const Default: Story = {
    args: {
        view: 'accent',
        size: 's',
        gap: 'dense',
        orientation: 'horizontal',
        shape: 'default',
        itemsCount: 5,
        stretching: 'auto',
    },
    render: ({ itemsCount, ...args }: StoryProps) => {
        return (
            <ButtonGroup {...args}>
                {Array(itemsCount)
                    .fill(true)
                    .map((_, i) => (
                        <Button text={`Button ${i}`} />
                    ))}
            </ButtonGroup>
        );
    },
};

export const CustomButtons: Story = {
    args: {
        ...Default.args,
        isCommonButtonStyles: false,
    },
    argTypes: {
        ...disableProps(['itemsCount']),
    },
    render: (args: StoryProps) => {
        return (
            <>
                <h3>Группа кнопок с разными темами</h3>
                <ButtonGroup {...args}>
                    <Button text="Primary" view="accent" />
                    <Button text="Negative" view="secondary" />
                    <Button text="Positive" view="clear" />
                    <Button text="Clear" view="clear" />
                </ButtonGroup>
            </>
        );
    },
};
