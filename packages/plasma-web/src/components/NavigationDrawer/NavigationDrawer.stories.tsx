import React, { useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';
import { InSpacingDecorator } from '@salutejs/plasma-sb-utils';
import { IconBlankDocOutline, IconBlankOutline } from '@salutejs/plasma-icons';

import { Button } from '../Button';

import { NavigationDrawer } from './NavigationDrawer';

const size: Array<string> = ['s', 'm'];

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: -1rem;
`;

const SlotContainer = styled.div`
    border: 1px solid #08080816;
    padding: 2px;
    min-height: 24px;
    overflow: hidden;
`;

const sections = [
    {
        label: 'Section 1',
        items: [
            {
                label: 'Item 1 Selected',
                icon: <IconBlankOutline />,
                selected: true,
                action: action('Item 1 clicked'),
            },
            { label: 'Item 2', icon: <IconBlankOutline />, action: action('Item 2 clicked') },
            {
                label: 'Link to Google',
                icon: <IconBlankOutline />,
                action: 'https://google.com',
            },
            {
                label: 'Item 4',
                icon: <IconBlankOutline />,
                action: action('Item 4 clicked'),
                disabled: true,
            },
            { label: 'Item 5', icon: <IconBlankOutline />, action: action('Item 5 clicked') },
            {
                label: 'Item 6',
                icon: <IconBlankOutline />,
                action: action('Item 6 clicked'),
                hasIndicator: true,
            },
            { label: 'Item 7', icon: <IconBlankOutline />, action: action('Item 7 clicked') },
            {
                label: 'Item 8',
                icon: <IconBlankOutline />,
                action: action('Item 8 clicked'),
                counter: 5,
            },
        ],
    },
    {
        label: 'Section 2',
        items: [{ label: 'Item 9', icon: <IconBlankDocOutline />, action: action('Item 9 clicked') }],
    },
    {
        items: [{ label: 'Item 10', icon: <IconBlankOutline />, action: action('Item 10 clicked') }],
    },
];

const NavigationDrawerDemo = (props: ComponentProps<typeof NavigationDrawer>) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Container>
            {/* @ts-expect-error TODO: fix this */}
            <NavigationDrawer
                {...props}
                opened={isOpen}
                header={<SlotContainer>Header</SlotContainer>}
                footer={<SlotContainer>Footer</SlotContainer>}
                sections={sections}
            >
                <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
            </NavigationDrawer>
        </Container>
    );
};

const NavigationDrawerWithDrawer = (props: ComponentProps<typeof NavigationDrawer>) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            {/* @ts-expect-error TODO: fix this */}
            <NavigationDrawer
                {...props}
                opened={isOpen}
                mode="drawer"
                footer={<SlotContainer>Footer</SlotContainer>}
                sections={sections}
                sidebarProps={{
                    onMouseEnter: () => setIsOpen(true),
                    onMouseLeave: () => setIsOpen(false),
                }}
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </NavigationDrawer>
        </Container>
    );
};

const NavigationDrawerWithOverlay = (props: ComponentProps<typeof NavigationDrawer>) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            {/* @ts-expect-error TODO: fix this */}
            <NavigationDrawer
                {...props}
                opened={isOpen}
                mode="overlay"
                footer={<SlotContainer>Footer</SlotContainer>}
                sections={sections}
                onHide={() => setIsOpen(false)}
            >
                <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </NavigationDrawer>
        </Container>
    );
};

const meta: Meta<typeof NavigationDrawer> = {
    title: 'Layout/NavigationDrawer',
    component: NavigationDrawerDemo,
    decorators: [InSpacingDecorator],
    argTypes: {
        size: {
            options: size,
            control: {
                type: 'select',
            },
        },
        withContentLeft: {
            control: {
                type: 'boolean',
            },
        },
    },
    args: {
        size: 's',
        view: 'default',
        withContentLeft: true,
    },
};

export default meta;

type Story = StoryObj<typeof NavigationDrawer>;

export const Default: Story = {
    args: {
        size: 's',
        view: 'default',
        withContentLeft: true,
    },
};

export const DrawerMode: StoryObj<ComponentProps<typeof NavigationDrawer>> = {
    args: {
        mode: 'drawer',
    },
    render: (args) => <NavigationDrawerWithDrawer {...args} />,
};

export const OverlayMode: StoryObj<ComponentProps<typeof NavigationDrawer>> = {
    args: {
        mode: 'overlay',
    },
    render: (args) => <NavigationDrawerWithOverlay {...args} />,
};
