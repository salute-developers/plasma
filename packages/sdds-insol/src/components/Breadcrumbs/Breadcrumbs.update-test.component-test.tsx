import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Dropdown } from '../Dropdown';

import { Breadcrumbs as BreadcrumbsComponent } from '.';

const items = [
    { title: 'Home', href: '/' },
    { title: 'About us', href: '/' },
    { renderItem: () => <span>Custom Item</span> },
    { title: 'Contacts' },
];

const customItems = [
    { title: 'Home', href: '/' },
    { title: 'About us', href: '/' },
    {
        renderItem: () => {
            const itemsDropdown = [
                {
                    value: 'Custom Item 1',
                    label: 'Custom Item 1',
                },
                {
                    value: 'Custom Item 2',
                    label: 'Custom Item 2',
                },
            ];
            return (
                <Dropdown variant="tight" placement="bottom" items={itemsDropdown} trigger="hover">
                    <span>...</span>
                </Dropdown>
            );
        },
    },
    { title: 'Contacts' },
];

describe('sdds-insol: Breadcrumbs', () => {
    beforeEach(() => {
        cy.get('body').realMouseMove(0, 0);
    });

    const Breadcrumbs = getComponent('Breadcrumbs') as typeof BreadcrumbsComponent;

    it('[PLASMA-T1379] Breadcrumbs: size=l, showItems=1', () => {
        mount(
            <CypressTestDecorator>
                <Breadcrumbs items={items} size="l" showItems={1} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1380] Breadcrumbs: size=m, showItems=2', () => {
        mount(
            <CypressTestDecorator>
                <Breadcrumbs items={items} size="m" showItems={2} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1381] Breadcrumbs: size=s, showItems=3', () => {
        mount(
            <CypressTestDecorator>
                <Breadcrumbs items={items} size="s" showItems={3} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1382] Breadcrumbs: size=xs, showItems=4', () => {
        mount(
            <CypressTestDecorator>
                <Breadcrumbs items={items} size="xs" showItems={4} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1169] Breadcrumbs: customShorter', () => {
        cy.viewport(800, 500);

        mount(
            <CypressTestDecorator>
                <Breadcrumbs items={customItems} />
            </CypressTestDecorator>,
        );

        cy.get('span').contains('...').realHover();

        cy.matchImageSnapshot();
    });
});
