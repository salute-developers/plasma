import React, { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { getConfigVariations, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { TextM } from '../Typography';

import { config } from './Link.config';

import { Link } from '.';

const { views } = getConfigVariations(config);

const underlineOptions = ['none', 'hover', 'always'];

const meta: Meta<typeof Link> = {
    title: 'Navigation/Link',
    decorators: [InSpacingDecorator],
    component: Link,
    argTypes: {
        view: {
            options: views,
            control: {
                type: 'select',
            },
        },
        underline: {
            options: underlineOptions,
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
        view: 'default',
        disabled: false,
        focused: true,
        underline: 'none',
    },
    render: ({ text, ...props }) => (
        <TextM>
            Скачайте{' '}
            <Link target="_blank" {...props}>
                {text}
            </Link>
            .
        </TextM>
    ),
};
