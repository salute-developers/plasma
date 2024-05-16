import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { iconButtonConfig } from '../../../../components/IconButton';
import { mergeConfig } from '../../../../engines';
import { WithTheme, argTypesFromConfig } from '../../../_helpers';
import { IconChevronLeft } from '../../../../components/_Icon';

import { config } from './IconButton.config';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
    title: 'plasma_web/IconButton',
    decorators: [WithTheme],
    component: IconButton,
    argTypes: {
        ...argTypesFromConfig(mergeConfig(iconButtonConfig, config)),
        pin: {
            options: [
                'square-square',
                'square-clear',
                'clear-square',
                'clear-clear',
                'clear-circle',
                'circle-clear',
                'circle-circle',
                '',
            ],
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
    },
};

export default meta;

const getSizeForIcon = (size) => {
    const map = {
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
        children: <IconChevronLeft />,
        view: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    argTypes: { ...disableProps(['children']) },
    render: (args) => (
        <IconButton {...args}>
            <IconChevronLeft size={getSizeForIcon(args.size)} />
        </IconButton>
    ),
};
