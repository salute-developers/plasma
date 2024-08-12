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

describe('plasma-b2c: Breadcrumbs', () => {
    const Breadcrumbs = getComponent('Breadcrumbs') as typeof BreadcrumbsComponent;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T1160] Breadcrumbs: size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} size="m" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1161] Breadcrumbs: size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} size="l" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1162] Breadcrumbs: size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} size="s" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1163] Breadcrumbs: size=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} size="xs" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1165] Breadcrumbs: showItems=4', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} showItems={4} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1168] Breadcrumbs: showItems=1', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={items} showItems={1} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1169] Breadcrumbs: customShorter', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Breadcrumbs items={customItems} />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('span[role="combobox"]').trigger('mouseover');

        cy.matchImageSnapshot();
    });
});
