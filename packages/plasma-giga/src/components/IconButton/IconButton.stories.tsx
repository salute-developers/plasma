import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconClose } from '@salutejs/plasma-icons';
import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { IconButton } from './IconButton';
import { config } from './IconButton.config';

type StoryButtonProps = ComponentProps<typeof IconButton> & { contentType: string; isLoading: boolean };

const { views, sizes } = getConfigVariations(config);
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
    title: 'Data Entry/IconButton',
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
        ...disableProps([
            'focused',
            'children',
            'theme',
            'loader',
            'onClick',
            'onFocus',
            'onBlur',
            'contentLeft',
            'contentRight',
        ]),
    },
};

export default meta;

const getSizeForIcon = (size) => {
    const map = {
        xl: 's',
        xlr: 's',
        mr: 's',
        lr: 's',
        m: 's',
        l: 's',
        sr: 's',
        xsr: 'xs',
    };
    if (map[size]) {
        return map[size];
    }

    return size;
};

export const Default: StoryObj<ComponentProps<typeof IconButton>> = {
    args: {
        children: <IconClose />,
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    argTypes: { ...disableProps(['children']) },
    render: (args) => (
        <IconButton {...args}>
            <IconClose color="inherit" size={getSizeForIcon(args.size)} />
        </IconButton>
    ),
};
