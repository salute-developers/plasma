import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { Avatar } from './Avatar';

const extraPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const extraType = ['', 'counter'];
const counterViews = ['default', 'accent', 'positive', 'negative'];

const meta: Meta<typeof Avatar> = {
    title: 'Data Display/Avatar',
    component: Avatar,
    argTypes: {
        view: { control: 'inline-radio', options: ['default'] },
        size: { control: 'select', options: ['xxl', 'm', 's', 'fit'] },
        status: { control: 'select', options: ['active', 'inactive'] },
        type: {
            control: 'select',
            options: extraType,
            if: { arg: 'hasExtra', truthy: true },
        },
        extraPlacement: {
            control: 'select',
            options: extraPlacements,
            if: { arg: 'hasExtra', truthy: true },
        },
        counterView: {
            control: 'select',
            options: counterViews,
            defaultValue: 'default',
            if: { arg: 'type', eq: 'counter' },
        },
        count: {
            control: 'number',
            if: { arg: 'type', eq: 'counter' },
        },
        maxCount: {
            control: 'number',
            if: { arg: 'type', eq: 'counter' },
        },
    },
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Avatar>>;

export const Default: Story = {
    args: {
        view: 'default',
        size: 's',
        name: 'Иван Фадеев',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        status: 'active',
        isScalable: false,
        hasExtra: false,
        extraPlacement: 'bottom-left',
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
        size: 's',
        name: 'Иван Фадеев',
        status: 'active',
    },
};
