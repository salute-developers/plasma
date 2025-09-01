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
    transform: translateZ(0);
`;

const SlotContainer = styled.div`
    padding: 2px;
    min-height: 24px;
    overflow: hidden;
`;

const ContentLeft = styled.div`
    background-color: #99999950;
    width: 100%;
    height: 100%;
`;

const sections = [
    {
        items: [{ label: 'Item 0', icon: <IconBlankOutline />, action: action('Item 0 clicked') }],
    },
    {
        label: 'Section 1',
        items: [
            {
                label: 'Item 1 Selected',
                icon: <IconBlankOutline />,
                selected: true,
                onClick: action('Item 1 clicked'),
            },
            { label: 'Item 2', icon: <IconBlankOutline />, onClick: action('Item 2 clicked') },
            {
                label: 'Link to Google',
                icon: <IconBlankOutline />,
                href: 'https://google.com',
                target: '_blank',
            },
            {
                label: 'Item 4',
                icon: <IconBlankOutline />,
                onClick: action('Item 4 clicked'),
                disabled: true,
            },
            { label: 'Item 5', icon: <IconBlankOutline />, onClick: action('Item 5 clicked') },
            {
                label: 'Item 6',
                icon: <IconBlankOutline />,
                onClick: action('Item 6 clicked'),
                hasIndicator: true,
            },
            { label: 'Item 7', icon: <IconBlankOutline />, onClick: action('Item 7 clicked') },
            {
                label: 'Item 8',
                icon: <IconBlankOutline />,
                onClick: action('Item 8 clicked'),
                counter: 5,
            },
        ],
    },
    {
        label: 'Section 2 Text Long Lorem ipsum dolor sit amet',
        items: [
            {
                label: 'Item 9 Text Long Lorem ipsum dolor sit amet',
                icon: <IconBlankDocOutline />,
                onClick: action('Item 9 clicked'),
            },
        ],
    },
    {
        hasDivider: true,
        items: [{ label: 'Item 10', icon: <IconBlankOutline />, onClick: action('Item 10 clicked') }],
    },
];

const NavigationDrawerDemo = (props: ComponentProps<typeof NavigationDrawer>) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Container>
            <NavigationDrawer
                {...props}
                opened={isOpen}
                header={<SlotContainer>Header</SlotContainer>}
                footer={<SlotContainer>Footer</SlotContainer>}
                sections={sections}
                onHide={() => setIsOpen(false)}
            >
                <span>Main content container (can be hidden in drawer and overlay mode)</span>
                <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
            </NavigationDrawer>
        </Container>
    );
};

const NavigationDrawerWithContentLeft = (props: ComponentProps<typeof NavigationDrawer>) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <Container>
            <NavigationDrawer
                {...props}
                opened={isOpen}
                sections={[
                    {
                        label: 'Section 1',
                        items: [
                            {
                                label: 'Item 1',
                                contentLeft: <ContentLeft />,
                                onClick: action('Item 1 clicked'),
                                selected: true,
                            },
                            {
                                label: 'Item 2',
                                contentLeft: <ContentLeft />,
                                onClick: action('Item 2 clicked'),
                                counter: 1,
                            },
                            {
                                label: 'Item 3',
                                contentLeft: <ContentLeft />,
                                onClick: action('Item 3 clicked'),
                                disabled: true,
                            },
                            {
                                label: 'Item 4',
                                contentLeft: <ContentLeft />,
                                onClick: action('Item 4 clicked'),
                                hasIndicator: true,
                            },
                            { label: 'Item 5', contentLeft: <ContentLeft />, onClick: action('Item 5 clicked') },
                        ],
                    },
                ]}
                withContentLeft
            >
                <Button onClick={() => setIsOpen(!isOpen)}>Toggle</Button>
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
        mode: {
            options: ['static', 'drawer', 'overlay'],
            control: {
                type: 'select',
            },
        },
    },
    args: {
        size: 's',
        withContentLeft: true,
    },
};

export default meta;

type Story = StoryObj<typeof NavigationDrawer>;

export const Default: Story = {
    args: {
        size: 's',
        withContentLeft: true,
        mode: 'static',
    },
};

export const CustomContentLeft: Story = {
    render: (args) => <NavigationDrawerWithContentLeft {...args} />,
};
