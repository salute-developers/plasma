import React, { FC, PropsWithChildren } from 'react';
import { CypressTestDecorator, getComponent, mount } from '@salutejs/plasma-cy-utils';
import { IconBlankOutline } from '@salutejs/plasma-icons';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

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

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                {/* @ts-expect-error TODO: fix this */}
                <NavigationDrawer sections={sections} withContentLeft>
                    <div>Main content</div>
                </NavigationDrawer>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});
