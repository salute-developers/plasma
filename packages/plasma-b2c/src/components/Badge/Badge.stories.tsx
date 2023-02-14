import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IconSettings } from '@salutejs/plasma-icons';
import { disableProps, InSpacingDecorator } from '@salutejs/plasma-sb-utils';

import { Badge, badgeSizes, badgeViews, BadgeSize, BadgeView, BadgeProps } from '.';

const sizeKeys = Object.keys(badgeSizes) as BadgeSize[];
const viewKeys = Object.keys(badgeViews) as BadgeView[];

const propsToDisable = ['contentLeft', 'circled', 'theme', 'as', 'forwardedAs'];

export default {
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
        ...disableProps(propsToDisable),
    },
} as Meta;

export const Default: Story<BadgeProps & { enableIcon: boolean }> = ({ enableIcon, ...rest }) => (
    <Badge contentLeft={enableIcon && <IconSettings color="inherit" size="xs" />} {...rest} />
);

Default.args = {
    text: 'Badge',
    size: 'l',
    view: 'primary',
    enableIcon: false,
};
