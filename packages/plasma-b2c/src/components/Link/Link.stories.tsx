import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { P1 } from '../Typography';

import { Link } from '.';

const views = ['primary'] as const;

export default {
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
} as Meta;

type LinkStoryProps = {
    text: string;
    href: string;
    view: typeof views[number];
    disabled?: boolean;
    focused?: boolean;
};

const args: LinkStoryProps = {
    text: 'приложение',
    href: 'https://google.com',
    view: 'primary',
    disabled: false,
    focused: true,
};

export const Default: Story<LinkStoryProps> = ({ text, ...props }) => (
    <P1>
        Скачайте{' '}
        <Link target="_blank" {...props}>
            {text}
        </Link>
        .
    </P1>
);

Default.args = args;
