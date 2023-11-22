import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { P1 } from '../Typography';

import { Link } from '.';

const views = ['primary'] as const;

const meta: Meta<typeof Link> = {
    title: 'Content/Link',
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

type StoryLinkProps = {
    text: string;
    href: string;
    view: typeof views[number];
    disabled?: boolean;
    focused?: boolean;
};

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
