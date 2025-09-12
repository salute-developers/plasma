import React from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { disableProps } from '@salutejs/plasma-sb-utils';

import { argTypesFromConfig, WithTheme } from '../../_helpers';

import { Avatar, mergedConfig } from './Avatar';

const extraPlacements = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
const extraType = ['', 'badge', 'counter'];
const counterViews = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'];
const badgeViews = ['default', 'accent', 'positive', 'warning', 'negative', 'dark', 'light'];

const meta: Meta<typeof Avatar> = {
    title: 'Data Display/Avatar',
    decorators: [WithTheme],
    component: Avatar,
    argTypes: {
        ...argTypesFromConfig(mergedConfig),
        status: { control: 'select', options: ['active', 'inactive'] },
        type: {
            control: 'select',
            options: extraType,
            if: { arg: 'hasExtra', truthy: true },
        },
        shape: {
            control: 'select',
            options: ['circled', 'rounded'],
        },
        extraPlacement: {
            control: 'select',
            options: extraPlacements,
            if: { arg: 'hasExtra', truthy: true },
        },
        counterView: {
            control: 'select',
            options: counterViews,
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
        badgeView: {
            control: 'select',
            options: badgeViews,
            if: { arg: 'type', eq: 'badge' },
        },
        text: {
            control: 'text',
            if: { arg: 'type', eq: 'badge' },
        },
        customColor: {
            control: 'color',
            if: { arg: 'type', eq: 'badge' },
        },
        customBackgroundColor: {
            control: 'color',
            if: { arg: 'type', eq: 'badge' },
        },
        pilled: {
            control: 'boolean',
            if: { arg: 'type', eq: 'badge' },
        },
    },
};

export default meta;

type StoryProps = ComponentProps<typeof Avatar> & {
    enableContentLeft: boolean;
    enableContentRight: boolean;
};
type Story = StoryObj<StoryProps>;

const BellIcon = (props) => (
    <svg width="100%" viewBox="0 0 24 24" fill="none" {...props}>
        <path
            d="M11.501 21.28c1.088 0 1.978-.889 1.978-1.977H9.524c0 1.088.88 1.978 1.977 1.978zm5.933-5.932v-4.944c0-3.035-1.622-5.576-4.45-6.248v-.673c0-.82-.662-1.483-1.483-1.483-.82 0-1.483.662-1.483 1.483v.672c-2.838.673-4.45 3.204-4.45 6.25v4.943l-1.275 1.276c-.623.623-.188 1.69.692 1.69h13.022c.88 0 1.325-1.067.702-1.69l-1.275-1.276z"
            fill="currentColor"
        />
    </svg>
);

export const Default: Story = {
    args: {
        view: 'default',
        size: 'xxl',
        name: 'Иван Фадеев',
        url: 'https://avatars.githubusercontent.com/u/1813468?v=4',
        isScalable: false,
        hasExtra: false,
        extraPlacement: 'top-right',
        type: undefined,
        counterView: 'accent',
        count: 3,
        maxCount: 10,
        badgeView: 'accent',
        text: '31',
        pilled: true,
        enableContentLeft: false,
        enableContentRight: false,
        shape: 'circled',
    },
    argTypes: {
        enableContentLeft: {
            control: { type: 'boolean' },
            if: { arg: 'type', eq: 'badge' },
        },
        enableContentRight: {
            control: { type: 'boolean' },
            if: { arg: 'type', eq: 'badge' },
        },
        ...disableProps(['focused']),
    },
    render: ({ enableContentLeft, enableContentRight, size, ...rest }: StoryProps) => {
        const iconSize = () => {
            switch (size) {
                case 'xxl':
                    return '1rem';
                case 'm':
                    return '0.625rem';
                default:
                    return '0.75rem';
            }
        };

        return (
            <>
                <Avatar
                    contentLeft={enableContentLeft ? <BellIcon width={iconSize()} height={iconSize()} /> : undefined}
                    contentRight={
                        !enableContentLeft && enableContentRight ? (
                            <BellIcon width={iconSize()} height={iconSize()} />
                        ) : undefined
                    }
                    size={size}
                    {...rest}
                />
            </>
        );
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
        hasExtra: false,
        extraPlacement: 'top-right',
        type: undefined,
        counterView: 'accent',
        count: 3,
        maxCount: 10,
        badgeView: 'accent',
        text: '31',
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
        hasExtra: false,
        extraPlacement: 'top-right',
        type: undefined,
        counterView: 'accent',
        count: 3,
        maxCount: 10,
        badgeView: 'accent',
        text: '31',
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
        hasExtra: false,
        extraPlacement: 'top-right',
        type: undefined,
        counterView: 'accent',
        count: 3,
        maxCount: 10,
        badgeView: 'accent',
        text: '31',
    },
};
