import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { P1 } from '../Typography';

import { Link } from '.';

const meta: Meta<typeof Link> = {
    title: 'Content/Link',
    component: Link,
    decorators: [InSpacingDecorator],
    argTypes: {
        text: {
            control: {
                type: 'text',
            },
        },
        href: {
            control: {
                type: 'text',
            },
        },
    },
};

export default meta;

type Story = StoryObj<{
    text: string;
    href: string;
    disabled?: boolean;
    focused?: boolean;
}>;

export const Default: Story = {
    args: {
        text: 'приложение',
        href: 'https://google.com',
        disabled: false,
        focused: true,
    },
    render: ({ text, ...props }) => (
        <P1>
            Скачайте{' '}
            <Link target="_blank" {...props}>
                {text}
            </Link>
            .
        </P1>
    ),
};
