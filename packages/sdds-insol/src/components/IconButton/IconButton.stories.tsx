import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import styled from 'styled-components';
import { IconClose } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator, getConfigVariations } from '@salutejs/plasma-sb-utils';

import { config } from './IconButton.config';
import { config as configOutline } from './IconButton.outline.config';
import { IconButton } from './IconButton';

type StoryButtonProps = ComponentProps<typeof IconButton> & {
    viewOutline: string;
    contentType: string;
    isLoading: boolean;
};

const { views, sizes } = getConfigVariations(config);
const { views: viewsOutline } = getConfigVariations(configOutline);

const appearances = ['default', 'outline'];
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
        appearance: {
            options: appearances,
            control: {
                type: 'select',
            },
        },
        view: {
            name: 'view',
            options: views,
            control: {
                type: 'select',
            },
            if: {
                arg: 'appearance',
                eq: 'default',
            },
        },
        viewOutline: {
            name: 'view',
            options: viewsOutline,
            control: {
                type: 'select',
            },
            if: {
                arg: 'appearance',
                eq: 'outline',
            },
        },
        size: {
            options: sizes,
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
        m: 's',
        l: 's',
        xl: 's',
        s: 'xs',
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

export const Default: StoryObj<StoryButtonProps> = {
    args: {
        children: <IconClose />,
        appearance: 'default',
        view: 'default',
        viewOutline: 'default',
        size: 'm',
        disabled: false,
        focused: true,
        isLoading: false,
    },
    argTypes: { ...disableProps(['children']) },
    render: ({ viewOutline, view, ...args }: StoryButtonProps) => (
        <IconButton view={args.appearance === 'default' ? view : viewOutline} {...args}>
            <StyledIconClose
                color="inherit"
                customSize={args.size === 'm' ? '1.25rem' : undefined}
                size={getSizeForIcon(args.size)}
            />
        </IconButton>
    ),
};
