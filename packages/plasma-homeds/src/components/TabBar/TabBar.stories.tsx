import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconStar } from '@salutejs/plasma-icons';

import { TabBar, TabBarItem, TabBarSlot } from './TabBar';

const icon = <IconStar size="s" color="inherit" />;

const renderItems = (counter?: number) => (
    <>
        <TabBarItem selected icon={icon} label="Label" />
        <TabBarItem icon={icon} label="Label" />
        <TabBarItem icon={icon} label="Label" />
        <TabBarItem icon={icon} label="Label" />
        <TabBarItem icon={icon} label="Label" counter={counter} />
    </>
);

const Frame = ({ children }: { children: React.ReactNode }) => (
    <div style={{ width: 393, background: 'var(--background-primary)' }}>{children}</div>
);

const meta: Meta<typeof TabBar> = {
    title: 'Navigation/TabBar',
    component: TabBar,
    decorators: [InSpacingDecorator],
    argTypes: {
        separation: {
            options: ['none', 'shadow', 'divider'],
            control: {
                type: 'select',
            },
        },
        island: {
            control: {
                type: 'boolean',
            },
        },
        size: {
            options: ['m'],
            control: {
                type: 'select',
            },
        },
        view: {
            options: ['default'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        island: false,
        separation: 'none',
        size: 'm',
        view: 'default',
    },
};

export default meta;

type Story = StoryObj<typeof TabBar>;

export const Default: Story = {
    render: (args) => (
        <Frame>
            <TabBar {...args}>{renderItems(1)}</TabBar>
        </Frame>
    ),
};

export const Island: Story = {
    args: {
        island: true,
        separation: 'shadow',
    },
    render: (args) => (
        <Frame>
            <TabBar {...args}>{renderItems(1)}</TabBar>
        </Frame>
    ),
};

export const WithSlot: Story = {
    args: {
        island: true,
    },
    render: (args) => (
        <Frame>
            <TabBar {...args}>
                <TabBarItem selected icon={icon} label="Главная" />
                <TabBarSlot>
                    <div style={{ width: '4rem', height: '4rem' }} />
                </TabBarSlot>
                <TabBarItem icon={icon} label="Сценарии" counter={1} weight={0.5} />
            </TabBar>
        </Frame>
    ),
};
