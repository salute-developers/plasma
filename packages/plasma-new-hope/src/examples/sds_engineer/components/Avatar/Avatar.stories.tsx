import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'sds_engineer/Avatar',
    decorators: [WithTheme],
    component: Avatar,
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Avatar>>;

export const Default: Story = {
    args: {
        view: 'default',
        size: 'xxl',
        name: 'Иван Фадеев',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        status: undefined,
        actionType: undefined,
        actionIcon: 'https://www.svgrepo.com/show/475150/chat.svg',
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
