import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { DropdownProps } from '../Dropdown/Dropdown.types';

import type { BreadcrumbsItem, BreadcrumbsProps } from './Breadcrumbs.types';

const componentExists = hasComponent('Breadcrumbs');
const componentDropdownExists = hasComponent('Dropdown');
const describeFn = getDescribeFN('Breadcrumbs');

const items: BreadcrumbsItem[] = [
    { title: 'Home', href: '/' },
    { title: 'About as', href: '/' },
    { renderItem: () => <span>Custom Item</span> },
    { title: 'Contacts' },
];

const componentProps = {
    items,
};

getBaseVisualTests({
    component: 'Breadcrumbs',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Breadcrumbs', () => {
    const Breadcrumbs = componentExists ? getComponent<BreadcrumbsProps>('Breadcrumbs') : () => null;
    const Dropdown = componentDropdownExists ? getComponent<DropdownProps>('Dropdown') : () => null;

    const customItems: BreadcrumbsItem[] = [
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

    it('shorter', () => {
        mount(
            <>
                <Breadcrumbs items={items} showItems={2} />
                <PadMe />
                <Breadcrumbs items={items} showItems={3} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('customShorter', () => {
        cy.viewport(800, 500);

        mount(<Breadcrumbs items={customItems} />);

        cy.get('span').contains('...').trigger('mouseover');

        cy.matchImageSnapshot();
    });

    it('showItems', () => {
        mount(
            <>
                <Breadcrumbs items={items} showItems={0} />
                <PadMe />
                <Breadcrumbs items={items} showItems={1} />
                <PadMe />
                <Breadcrumbs items={items} showItems={2} />
                <PadMe />
                <Breadcrumbs items={items} showItems={3} />
                <PadMe />
                <Breadcrumbs items={items} showItems={4} />
                <PadMe />
            </>,
        );

        cy.matchImageSnapshot();
    });
});
