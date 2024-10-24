import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Button } from '../Button/Button';

import { ButtonGroup } from './ButtonGroup';

type StoryProps = ComponentProps<typeof ButtonGroup> & { itemsCount?: number };
type Story = StoryObj<StoryProps>;

const views = ['accent', 'default', 'secondary', 'success', 'warning', 'critical', 'clear'];
const sizes = ['l', 'm', 's', 'xs', 'xxs'];
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
        view: 'default',
        size: 'm',
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
                    <Button text="Primary" view="default" />
                    <Button text="Negative" view="success" />
                    <Button text="Positive" view="warning" />
                    <Button text="Clear" view="clear" />
                </ButtonGroup>

                <h3>Группа кнопок с разными размерами</h3>
                <ButtonGroup {...args}>
                    <Button text="Primary" view="default" size="l" />
                    <Button text="Negative" view="success" size="m" />
                    <Button text="Positive" view="warning" size="s" />
                    <Button text="Clear" view="clear" size="l" />
                </ButtonGroup>
            </>
        );
    },
};
