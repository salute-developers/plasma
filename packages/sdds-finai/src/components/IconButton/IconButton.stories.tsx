import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { IconClose } from '@salutejs/plasma-icons';
import { disableProps, getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { IconButton } from './IconButton';
import { config } from './IconButton.config';

type StoryButtonProps = ComponentProps<typeof IconButton> & { contentType: string; isLoading: boolean };

const { views, sizes } = getConfigVariations(config);
const pins = ['square-square', 'circle-circle'];

const meta: Meta<StoryButtonProps> = {
    title: 'Data Entry/IconButton',
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
        pin: {
            options: pins,
            control: {
                type: 'select',
            },
            table: { defaultValue: { summary: 'bottom' } },
        },
        ...disableProps(['children', 'theme', 'loader', 'onClick', 'onFocus', 'onBlur', 'contentLeft', 'contentRight']),
    },
};

export default meta;

const getSizeForIcon = (size) => {
    if (size === 's' || size === 'xs') {
        return { size };
    }
    if (size === 'xxs') {
        return {
            style: {
                width: '0.75rem',
                height: '0.75rem',
            },
        };
    }

    return { size };
};

export const Default: StoryObj<ComponentProps<typeof IconButton>> = {
    args: {
        children: <IconClose />,
        view: 'default',
        size: 's',
        disabled: false,
        focused: true,
        isLoading: false,
        pin: 'square-square',
    },
    argTypes: { ...disableProps(['children']) },
    render: (args) => (
        <IconButton {...args}>
            <IconClose color="inherit" {...getSizeForIcon(args.size)} />
        </IconButton>
    ),
};
