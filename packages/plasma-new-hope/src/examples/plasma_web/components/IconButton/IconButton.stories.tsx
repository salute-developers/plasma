import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

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
        children: <IconChevronLeft />,
        view: 'primary',
        size: 'm',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    render: (args) => <IconButton {...args} icon={<IconChevronLeft size={getSizeForIcon(args.size)} />} />,
};
