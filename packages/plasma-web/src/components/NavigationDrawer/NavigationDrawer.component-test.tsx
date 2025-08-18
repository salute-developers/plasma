import React, { FC, PropsWithChildren, useState } from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';
import { IconHouse, IconSettings, IconEdit } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const action = () => {};

const StandardTypoStyle = createGlobalStyle(standardTypo);

// Базовые секции для тестов без contentLeft
const sectionsBasic = [
    {
        hasDivider: false,
        items: [{ label: 'Item 0', action }],
    },
    {
        label: 'Section 1',
        items: [
            {
                label: 'Item 1 Selected',
                selected: true,
                action,
            },
            {
                label: 'Link to Google',
                action: 'https://google.com',
            },
            {
                label: 'Item 3 Disabled',
                action,
                disabled: true,
            },
            {
                label: 'Item 4 with Indicator',
                action,
                hasIndicator: true,
            },
            {
                label: 'Item 5 with Counter',
                action,
                counter: 5,
            },
        ],
    },
    {
        label: 'Section 2',
        items: [{ label: 'Item 6', action }],
    },
];

// Секции с иконками для тестов с contentLeft
const sectionsWithIcons = [
    {
        hasDivider: false,
        items: [{ label: 'Item 0', icon: <IconHouse />, action }],
    },
    {
        label: 'Section 1',
        items: [
            {
                label: 'Item 1 Selected',
                icon: <IconHouse />,
                selected: true,
                action,
            },
            {
                label: 'Link to Google',
                icon: <IconEdit />,
                action: 'https://google.com',
            },
            {
                label: 'Item 3 Disabled',
                icon: <IconHouse />,
                action,
                disabled: true,
            },
            {
                label: 'Item 4 with Indicator',
                icon: <IconHouse />,
                action,
                hasIndicator: true,
            },
            {
                label: 'Item 5 with Counter',
                icon: <IconHouse />,
                action,
                counter: 15,
            },
        ],
    },
    {
        label: 'Section 2',
        items: [{ label: 'Item 6', icon: <IconSettings />, action }],
    },
];

const customContentLeft = <div style={{ backgroundColor: '#08080816', width: '100%', height: '100%' }} />;

// Секции с кастомным contentLeft
const sectionsWithContentLeft = [
    {
        label: 'Section with Custom Content',
        items: [
            {
                label: 'Item 1',
                contentLeft: customContentLeft,
                action,
                selected: true,
            },
            {
                label: 'Item 2',
                contentLeft: customContentLeft,
                action,
                counter: 1,
            },
            {
                label: 'Item 3 Disabled',
                contentLeft: customContentLeft,
                action,
                disabled: true,
            },
        ],
    },
];

describe('plasma-web: NavigationDrawer', () => {
    const NavigationDrawer = getComponent('NavigationDrawer');

    const Container = ({ children }: { children: React.ReactNode }) => (
        <div style={{ width: '100%', height: '100vh', transform: 'translateZ(0)' }}>{children}</div>
    );

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            <Container>{children}</Container>
        </CypressTestDecorator>
    );
    const SlotContainer = ({ children }: { children: React.ReactNode }) => (
        <div style={{ border: '1px solid #08080816', padding: '2px', minHeight: '24px', overflow: 'hidden' }}>
            {children}
        </div>
    );

    describe('Basic functionality', () => {
        it('renders with basic sections', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsBasic} withContentLeft={false}>
                        <div>Main content</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('renders with icons when withContentLeft is true', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithIcons}>
                        <div>Main content</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('renders with custom contentLeft', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithContentLeft}>
                        <div>Main content</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('renders with header and footer', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer
                        sections={sectionsBasic}
                        header={<SlotContainer>Header Content</SlotContainer>}
                        footer={<SlotContainer>Footer Content</SlotContainer>}
                        withContentLeft={false}
                    >
                        <div>Main content</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('renders with very long labels', () => {
            const sectionsWithLongLabels = [
                {
                    label: 'Section with a very long label that might overflow the container width',
                    items: [
                        {
                            label: 'Item with extremely long label that should be handled gracefully by the component',
                            action,
                        },
                        {
                            label: 'Short item',
                            action,
                        },
                    ],
                },
            ];

            mount(
                <CypressTestDecoratorWithTypo>
                    {/* @ts-expect-error TODO: fix this */}
                    <NavigationDrawer sections={sectionsWithLongLabels}>
                        <div>Content with long labels</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('renders with high counter values', () => {
            const sectionsWithHighCounters = [
                {
                    label: 'High Counters',
                    items: [
                        { label: 'Low counter', counter: 1, action },
                        { label: 'High counter', counter: 999, action },
                        { label: 'Very high counter', counter: 9999, action },
                    ],
                },
            ];

            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithHighCounters} withContentLeft={false}>
                        <div>Content with high counters</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('Sizes', () => {
        it('renders with size m', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithIcons} size="m">
                        <div>Main content - Size M</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
        it('renders closed with size m', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithIcons} size="m" opened={false}>
                        <div>Main content - Size M Closed</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
        it('renders custom contentLeft with size m', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithContentLeft} size="m">
                        <div>Main content - Size M Custom ContentLeft</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
        it('renders closed custom contentLeft with size m', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithContentLeft} size="m" opened={false}>
                        <div>Main content - Size M Closed Custom ContentLeft</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('Different modes', () => {
        it('renders in drawer mode', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithIcons} mode="drawer" opened>
                        <div>Main content - Drawer mode</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });

        it('renders in overlay mode', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithIcons} mode="overlay" opened>
                        <div>Main content - Overlay mode</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('Close state', () => {
        it('renders closed state', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithIcons} opened={false}>
                        <div>Main content - Closed</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );
            cy.matchImageSnapshot();
        });
    });

    describe('Interactive behavior', () => {
        const NavigationDrawerWithItemClicks = () => {
            const [clickedItem, setClickedItem] = useState<string>('');

            const sectionsWithClickHandlers = [
                {
                    label: 'Clickable Items',
                    items: [
                        {
                            label: 'Click me',
                            action: () => setClickedItem('Item 1'),
                        },
                        {
                            label: 'Or click me',
                            action: () => setClickedItem('Item 2'),
                        },
                        {
                            label: 'Disabled item',
                            disabled: true,
                            action: () => setClickedItem('Should not click'),
                        },
                    ],
                },
            ];

            return (
                <NavigationDrawer sections={sectionsWithClickHandlers}>
                    <div data-testid="clicked-item">Clicked: {clickedItem}</div>
                </NavigationDrawer>
            );
        };

        it('handles menu item clicks', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawerWithItemClicks />
                </CypressTestDecoratorWithTypo>,
            );

            cy.get('[data-testid="clicked-item"]').should('contain', 'Clicked: ');

            cy.contains('Click me').click();
            cy.get('[data-testid="clicked-item"]').should('contain', 'Clicked: Item 1');

            cy.contains('Or click me').click();
            cy.get('[data-testid="clicked-item"]').should('contain', 'Clicked: Item 2');

            cy.contains('Disabled item').click({ force: true });
            cy.get('[data-testid="clicked-item"]').should('contain', 'Clicked: Item 2');
        });

        it('should have a link to Google', () => {
            mount(
                <CypressTestDecoratorWithTypo>
                    <NavigationDrawer sections={sectionsWithIcons}>
                        <div>Content with Google link</div>
                    </NavigationDrawer>
                </CypressTestDecoratorWithTypo>,
            );

            cy.contains('Link to Google').should('exist');
            cy.contains('Link to Google').should('have.attr', 'href', 'https://google.com');
        });
    });
});
