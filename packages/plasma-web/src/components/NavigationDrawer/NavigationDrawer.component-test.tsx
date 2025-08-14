import React from 'react';
import { getComponent, mount } from '@salutejs/plasma-cy-utils';
import { IconBlankOutline } from '@salutejs/plasma-icons';

const sections = [
    {
        label: 'Section 1',
        items: [
            {
                label: 'Item 1 Selected',
                icon: <IconBlankOutline />,
                selected: true,
                action: () => {},
            },
            {
                label: 'Item 2',
                icon: <IconBlankOutline />,
                action: () => {},
            },
        ],
    },
];

describe('plasma-web: NavigationDrawer', () => {
    const NavigationDrawer = getComponent('NavigationDrawer');

    it('simple', () => {
        mount(
            // @ts-expect-error TODO: fix this
            <NavigationDrawer sections={sections} withContentLeft>
                <div>Main content</div>
            </NavigationDrawer>,
        );
        cy.matchImageSnapshot();
    });
});
