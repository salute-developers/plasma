import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { argTypesFromConfig, WithTheme } from '../../../_helpers';

import { Avatar, mergedConfig } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'plasma_web/Avatar',
    decorators: [WithTheme],
    component: Avatar,
    argTypes: {
        ...argTypesFromConfig(mergedConfig),
        status: { control: 'select', options: ['active', 'inactive'] },
    },
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Avatar>>;

export const Default: Story = {
    args: {
        view: 'default',
        size: 'xxl',
        name: 'Иван Фадеев',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        isScalable: false,
    },
    argTypes: {
        ...disableProps(['focused']),
    },
};

export const Accessibility: Story = {
    args: {
        role: 'button',
        name: 'Геннадий Силуянович',
        tabIndex: 0,
        view: 'default',
        size: 'xxl',
        status: 'active',
        focused: true,
    },
};

export const AccessibilityWithURL: Story = {
    args: {
        role: 'button',
        tabIndex: 0,
        view: 'default',
        size: 'xxl',
        status: 'active',
        focused: true,
        name: 'Микула Селянинович',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
    },
};

export const AccessibilityWithCustomText: Story = {
    args: {
        role: 'button',
        tabIndex: 0,
        view: 'default',
        size: 'xxl',
        status: 'inactive',
        focused: true,
        customText: 'ФИО',
    },
};
