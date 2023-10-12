import React from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { IconSettings } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Badge, badgeSizes, badgeViews, BadgeSize, BadgeView } from '.';
import type { BadgeProps } from '.';

const sizeKeys = Object.keys(badgeSizes) as BadgeSize[];
const viewKeys = Object.keys(badgeViews) as BadgeView[];

const meta: Meta<BadgeProps> = {
    title: 'Content/Badge',
    component: Badge,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: sizeKeys,
            control: {
                type: 'inline-radio',
            },
        },
        view: {
            options: viewKeys,
            control: {
                type: 'select',
            },
        },
        ...disableProps(['contentLeft', 'circled', 'theme', 'as', 'forwardedAs']),
    },
};

export default meta;

export const Default: StoryObj<BadgeProps & { enableIcon: boolean }> = {
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
