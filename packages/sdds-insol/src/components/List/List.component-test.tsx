import React from 'react';
import { CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import { IconChevronRight } from '@salutejs/plasma-icons';

describe('sdds-insol: List Styled', () => {
    const List = getComponent('List');
    const ListItem = getComponent('ListItem');

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <List view="default" size="s">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />} disabled>
                        Test Item 3
                    </ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 4</ListItem>
                </List>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <List view="default" size="xl">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
                <SpaceMe />
                <List view="default" size="l">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
                <SpaceMe />
                <List view="default" size="m">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
                <SpaceMe />
                <List view="default" size="s">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
                <SpaceMe />
                <List view="default" size="xs">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_variant', () => {
        mount(
            <CypressTestDecorator>
                <List view="default" size="s" variant="normal">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
                <SpaceMe />
                <List view="default" size="s" variant="tight">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecorator>
                <List view="default" size="s">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />} disabled>
                        Test Item 1
                    </ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />} disabled>
                        Test Item 2
                    </ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />} disabled>
                        Test Item 3
                    </ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />} disabled>
                        Test Item 4
                    </ListItem>
                </List>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
