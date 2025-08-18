import React, { useEffect, useRef, useState } from 'react';
import type { ComponentProps } from 'react';
import type { StoryObj, Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { styled } from '@linaria/react';

import { WithTheme } from '../../_helpers';
import { IconBlankDocOutline, IconBlankOutline } from '../../../components/_Icon';
import { Button } from '../Button/Button';

import { NavigationDrawer } from './NavigationDrawer';

const size: Array<string> = ['s', 'm'];

const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: -1rem;
    transform: translateZ(0);
`;

const SlotContainer = styled.div`
    border: 1px solid #08080816;
    padding: 2px;
    min-height: 24px;
    overflow: hidden;
`;

const ContentLeft = styled.div`
    background-color: #08080816;
    width: 100%;
    height: 100%;
`;

const sections = [
    {
        hasDivider: false,
        items: [{ label: 'Item 0', icon: <IconBlankOutline />, action: action('Item 0 clicked') }],
    },
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
                                action: action('Item 1 clicked'),
                                selected: true,
                            },
                            {
                                label: 'Item 2',
                                contentLeft: <ContentLeft />,
                                action: action('Item 2 clicked'),
                                counter: 1,
                            },
                            {
                                label: 'Item 3',
                                contentLeft: <ContentLeft />,
                                action: action('Item 3 clicked'),
                                disabled: true,
                            },
                            {
                                label: 'Item 4',
                                contentLeft: <ContentLeft />,
                                action: action('Item 4 clicked'),
                                hasIndicator: true,
                            },
                            { label: 'Item 5', contentLeft: <ContentLeft />, action: action('Item 5 clicked') },
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

const NavigationDrawerWithDrawer = (props: ComponentProps<typeof NavigationDrawer>) => {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (ref.current) {
            const sidebar = ref.current.childNodes[0] as HTMLDivElement;
            sidebar.onmouseenter = () => {
                setIsOpen(true);
            };
            sidebar.onmouseleave = () => {
                setIsOpen(false);
            };
        }
    }, [ref]);

    return (
        <Container>
            <NavigationDrawer {...props} ref={ref} opened={isOpen} mode="drawer" sections={sections}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </NavigationDrawer>
        </Container>
    );
};

const NavigationDrawerWithOverlay = (props: ComponentProps<typeof NavigationDrawer>) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Container>
            <NavigationDrawer
                {...props}
                opened={isOpen}
                mode="overlay"
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
    decorators: [WithTheme],
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

export const CustomContentLeft: Story = {
    render: (args) => <NavigationDrawerWithContentLeft {...args} />,
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
