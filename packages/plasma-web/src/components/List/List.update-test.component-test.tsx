import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import type { FC, PropsWithChildren } from 'react';
import { IconChevronRight } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: List', () => {
    const List = getComponent('List');
    const ListItem = getComponent('ListItem');

    const Demo = ({ view = 'default', size = 'l', variant = 'normal', disabled = false }) => {
        return (
            <List view={view} size={size} variant={variant} disabled={disabled}>
                <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />} disabled>
                    Test Item 3
                </ListItem>
                <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 4</ListItem>
            </List>
        );
    };

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-T2062] List: size=l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="l" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2063] List: size=m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="m" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2064] List: size=s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="s" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2077] List: size=xl', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2078] List: size=xs', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xs" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2079] List: variant=tight', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" variant="tight" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2080] List: disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] List: focused ListItem', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('li').first().focus();
        cy.get('li').first().should('be.focused');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] List: cannot focus ListItem if disabled ListItem', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('ul').press('Tab').press('Tab').press('Tab');
        cy.get('li').eq(2).should('not.be.focused');

        cy.matchImageSnapshot();
    });

    it('[PLASMA-] List: cannot focus ListItem if disabled List', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Demo size="xl" disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('ul').press('Tab');
        cy.get('li').first().should('not.be.focused');

        cy.matchImageSnapshot();
    });
});
