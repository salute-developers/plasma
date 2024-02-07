import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';

import { WithTheme } from '../../../_helpers';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'plasma_b2c/Avatar',
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
        status: 'active',
        isScalable: false,
    },
};

export const Accessibility: Story = {
    args: {
        role: 'button',
        tabIndex: 0,
        view: 'default',
        size: 'xxl',
        name: 'Иван Фадеев',
        focused: true,
    },
};
