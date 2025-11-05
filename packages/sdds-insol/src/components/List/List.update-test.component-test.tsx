import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { IconChevronRight } from '@salutejs/plasma-icons';

describe('sdds-insol: List', () => {
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

    it('[PLASMA-T2062] List: size=l', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="l" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2063] List: size=m', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="m" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2064] List: size=s', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2077] List: size=xl', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="xl" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2078] List: size=xs', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2079] List: variant=tight', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="xl" variant="tight" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2080] List: disabled', () => {
        mount(
            <CypressTestDecorator>
                <Demo size="xl" disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
