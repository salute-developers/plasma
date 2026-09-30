import React from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconPlasma } from '@salutejs/plasma-icons';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { EmbeddedButton } from './EmbeddedButton';

type StoryProps = ComponentProps<typeof EmbeddedButton> & {
    buttonContainerWidth?: string;
    buttonContainerHeight?: string;
};

const views = ['default', 'secondary', 'accent', 'positive', 'warning', 'negative', 'info'];
const sizes = ['l', 'm', 's', 'xs'];
const positions = [
    'center',
    'center-left',
    'center-right',
    'top',
    'top-left',
    'top-right',
    'bottom',
    'bottom-left',
    'bottom-right',
];
const iconSizeMap = {
    l: '2.25rem',
    m: '1.5rem',
    s: '1rem',
    xs: '0.75rem',
};

const meta: Meta<StoryProps> = {
    title: '_Beta/Data Entry/EmbeddedButton',
    component: EmbeddedButton,
    decorators: [InSpacingDecorator],
    argTypes: {
        view: { options: views, control: 'select' },
        size: { options: sizes, control: 'select' },
        position: { options: positions, control: 'select' },
        disabled: { control: 'boolean' },
        isLoading: { control: 'boolean' },
        buttonContainerWidth: { control: 'text', table: { category: 'example-related' } },
        buttonContainerHeight: { control: 'text', table: { category: 'example-related' } },
    },
    args: {
        buttonContainerWidth: '10rem',
        buttonContainerHeight: '10rem',
        view: 'default',
        size: 'm',
        position: 'center',
        disabled: false,
        isLoading: false,
    },
};

export default meta;

export const Default: StoryObj<StoryProps> = {
    render: ({ buttonContainerWidth, buttonContainerHeight, size = 'm', ...rest }) => (
        <div style={{ width: buttonContainerWidth, height: buttonContainerHeight }}>
            <EmbeddedButton size={size} {...rest}>
                <IconPlasma color="inherit" style={{ width: iconSizeMap[size], height: iconSizeMap[size] }} />
            </EmbeddedButton>
        </div>
    ),
};
