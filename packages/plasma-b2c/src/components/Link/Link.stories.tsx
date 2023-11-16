import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { P1 } from '../Typography';

import { Link } from '.';

const views = ['primary'] as const;

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
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type Story = StoryObj<{
    text: string;
    href: string;
    view: typeof views[number];
    disabled?: boolean;
    focused?: boolean;
}>;

export const Default: Story = {
    args: {
        text: 'приложение',
        href: 'https://google.com',
        view: 'primary',
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
