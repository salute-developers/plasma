import React, { useState, useCallback, useRef, ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconClose } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { IconButton } from './IconButton';

type StoryButtonProps = ComponentProps<typeof IconButton> & { contentType: string; isLoading: boolean };

const views = ['accent', 'primary', 'secondary', 'success', 'warning', 'critical', 'clear', 'dark', 'black', 'white'];
const sizes = ['l', 'm', 's', 'xs', 'xxs'];
const pins = [
    'square-square',
    'square-clear',
    'clear-square',
    'clear-clear',
    'clear-circle',
    'circle-clear',
    'circle-circle',
    '',
];

const meta: Meta<StoryButtonProps> = {
    title: 'Controls/IconButton',
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizes,
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        pin: {
            options: pins,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
        ...disableProps(['theme', 'loader', 'onClick', 'onFocus', 'onBlur', 'contentLeft', 'contentRight']),
    },
};

export default meta;

const getSizeForIcon = (size) => {
    if (size === 'mr') {
        return 'm';
    }
    if (size === 'lr') {
        return 'l';
    }
    if (size === 'sr') {
        return 's';
    }
    if (size === 'xsr') {
        return 'xs';
    }
    return size;
};

export const Default: StoryObj<ComponentProps<typeof IconButton>> = {
    args: {
        children: <IconClose />,
        view: 'primary',
        size: 'm',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    render: (args) => <IconButton {...args} icon={<IconClose size={getSizeForIcon(args.size)} />} />,
};
