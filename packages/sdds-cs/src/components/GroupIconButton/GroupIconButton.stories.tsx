import React from 'react';
import { IconClose } from '@salutejs/plasma-icons';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { IconButton } from '../IconButton/IconButton';

import { GroupIconButton } from './GroupIconButton';

type StoryProps = ComponentProps<typeof GroupIconButton> & { itemsCount?: number };
type Story = StoryObj<StoryProps>;

const views = ['accent', 'secondary', 'clear'];
const sizes = ['s'];
const orientationValues = ['horizontal', 'vertical'];
const gapValues = ['none', 'dense', 'wide'];
const shapeValues = ['segmented', 'default', 'pilled'];
const stretchingValues = ['auto', 'filled'];

const meta: Meta<typeof GroupIconButton> = {
    title: 'Data Entry/GroupIconButton',
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
            <GroupIconButton {...args}>
                {Array(itemsCount)
                    .fill(true)
                    .map((_, i) => (
                        <IconButton>
                            <IconClose color="inherit" size="s" />
                        </IconButton>
                    ))}
            </GroupIconButton>
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
                <h3>Группа IconButton с разными темами</h3>
                <GroupIconButton {...args}>
                    <IconButton view="accent">
                        <IconClose color="inherit" size="s" />
                    </IconButton>
                    <IconButton view="secondary">
                        <IconClose color="inherit" size="s" />
                    </IconButton>
                    <IconButton view="clear">
                        <IconClose color="inherit" size="s" />
                    </IconButton>
                    <IconButton view="clear">
                        <IconClose color="inherit" size="s" />
                    </IconButton>
                </GroupIconButton>
            </>
        );
    },
};
