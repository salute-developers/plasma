import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { Dropdown } from '../Dropdown';

import { Breadcrumbs as BreadcrumbsComponent } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const items = [
    { title: 'Home', href: '/' },
    { title: 'About as', href: '/' },
    { renderItem: () => <span>Custom Item</span> },
    { title: 'Contacts' },
];

const customItems = [
    { title: 'Home', href: '/' },
    { title: 'About as', href: '/' },
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

describe('plasma-web: Breadcrumbs', () => {
    const Breadcrumbs = getComponent('Breadcrumbs') as typeof BreadcrumbsComponent;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('shorter', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} showItems={2} />
                <PadMe />
                <Breadcrumbs items={items} showItems={3} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('customShorter', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={customItems} />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} size="l" />
                <PadMe />
                <Breadcrumbs items={items} size="m" />
                <PadMe />
                <Breadcrumbs items={items} size="s" />
                <PadMe />
                <Breadcrumbs items={items} size="xs" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});
