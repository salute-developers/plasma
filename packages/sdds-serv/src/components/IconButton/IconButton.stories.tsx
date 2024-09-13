import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconClose } from '@salutejs/plasma-icons';
import styled from 'styled-components';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { IconButton } from './IconButton';

type StoryButtonProps = ComponentProps<typeof IconButton> & { contentType: string; isLoading: boolean };

const views = ['default', 'accent', 'secondary', 'success', 'warning', 'critical', 'clear', 'dark', 'black', 'white'];
const sizes = ['l', 'm', 's', 'xs'];
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

const StyledIcon = styled(IconClose)`
    color: #f00f;
`;

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
        ...disableProps(['children', 'theme', 'loader', 'onClick', 'onFocus', 'onBlur', 'contentLeft', 'contentRight']),
    },
};

export default meta;

const getSizeForIcon = (size) => {
    const map = {
        mr: 's',
        lr: 's',
        m: 'm',
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
    render: (args) => {
        return (
            <>
                <IconClose color="inhert" size={getSizeForIcon(args.size)} />
                <StyledIcon color="inhert" size={getSizeForIcon(args.size)} />
            </>
        );
    },
};
