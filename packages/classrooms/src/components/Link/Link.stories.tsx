import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { P1 } from '../Typography';

import { Link } from '.';

const meta: Meta<typeof Link> = {
    title: 'Content/Link',
    decorators: [InSpacingDecorator],
    component: Link,
    argTypes: {
        view: {
            options: [
                'primary',
                'secondary',
                'tertiary',
                'paragraph',
                'accent',
                'positive',
                'warning',
                'negative',
                'clear',
            ],
            control: {
                type: 'select',
            },
        },
    },
};

export default meta;

type StoryLinkProps = {
    text: string;
    href: string;
} & ComponentProps<typeof Link>;

export const Default: StoryObj<StoryLinkProps> = {
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
