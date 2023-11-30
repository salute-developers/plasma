import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconSettings } from '@salutejs/plasma-icons';

import { disableProps, InSpacingDecorator } from '../../helpers';

import { Badge, badgeSizes, badgeViews } from '.';
import type { BadgeProps } from '.';

const meta: Meta<BadgeProps> = {
    title: 'Content/Badge',
    decorators: [InSpacingDecorator],
    component: Badge,
    argTypes: {
        size: {
            options: Object.keys(badgeSizes),
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: Object.keys(badgeViews),
            control: {
                type: 'inline-radio',
            },
        },
        ...disableProps(['contentLeft', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

export const Default: StoryObj<BadgeProps & { enableIcon: boolean }> = {
    argTypes: { ...meta.argTypes, ...disableProps(['circled']) },
    args: {
        text: 'Badge',
        size: 'l',
        view: 'primary',
        enableIcon: false,
    },
    render: ({ enableIcon, ...rest }) => (
        <Badge contentLeft={enableIcon && <IconSettings color="inherit" size="xs" />} {...rest} />
    ),
};

export const Quantity: StoryObj<BadgeProps> = {
    args: {
        text: '11',
        size: 's',
        view: 'secondary',
        circled: true,
    },
};
