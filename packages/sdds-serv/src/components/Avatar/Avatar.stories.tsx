import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'Content/Avatar',
    component: Avatar,
    argTypes: {
        size: { control: 'select', options: ['xxl', 'l', 'm', 's', 'fit'] },
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
        status: 'active',
        isScalable: false,
    },
    argTypes: {
        ...disableProps(['focused']),
    },
};

export const Accessibility: Story = {
    args: {
        role: 'button',
        tabIndex: 0,
        view: 'default',
        size: 'xxl',
        name: 'Иван Фадеев',
        status: 'active',
    },
};
