import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import styled from 'styled-components';
import { IconClose } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { IconButton } from './IconButton';

type StoryButtonProps = ComponentProps<typeof IconButton> & { contentType: string; isLoading: boolean };

const views = ['default', 'accent', 'secondary', 'success', 'warning', 'critical', 'clear', 'dark', 'black', 'white'];
const sizes = ['xl', 'l', 'm', 's', 'xs', 'xxs'];
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
        mr: 's',
        lr: 's',
        m: 's',
        l: 's',
        xl: 's',
        sr: 'xs',
        s: 'xs',
        xsr: 'xs',
        xxs: 'xs',
    };
    if (map[size]) {
        return map[size];
    }

    return size;
};

const StyledIconClose = styled(IconClose)<{ customSize?: string }>`
    ${({ customSize }) =>
        customSize &&
        `
            width: ${customSize};
            height: ${customSize};
        `}
`;

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
            <StyledIconClose
                color="inherit"
                customSize={args.size === 'm' ? '1.25rem' : undefined}
                size={getSizeForIcon(args.size)}
            />
        </IconButton>
    ),
};
