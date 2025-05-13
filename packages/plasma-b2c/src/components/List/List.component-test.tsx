import React from 'react';
import { mount, CypressTestDecorator, getComponent, SpaceMe } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import type { FC, PropsWithChildren } from 'react';
import { IconChevronRight } from '@salutejs/plasma-icons';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: List Styled', () => {
    const List = getComponent('List');
    const ListItem = getComponent('ListItem');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('default', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <List view="default" size="s">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />} disabled>
                        Test Item 3
                    </ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 4</ListItem>
                </List>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_variant', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <List view="default" size="s" variant="normal">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
                <SpaceMe />
                <List view="default" size="s" variant="tight">
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 1</ListItem>
                    <ListItem contentRight={<IconChevronRight color="inherit" size="xs" />}>Test Item 2</ListItem>
                </List>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
