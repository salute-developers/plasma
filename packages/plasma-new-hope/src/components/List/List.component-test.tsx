import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconChevronRight } from 'override/_Icon';

import type { ListItemProps } from './ui/ListItem.types';
import type { ListProps } from './List.types';

const componentExists = hasComponent('List') && hasComponent('ListItem');
const describeFn = getDescribeFN('List');

const Icon = <IconChevronRight color="inherit" size="xs" />;
const ListItemForMatrix = componentExists ? getComponent<ListItemProps>('ListItem') : () => null;

const getListItems = () => (
    <>
        <ListItemForMatrix contentRight={Icon}>Test Item 1</ListItemForMatrix>
        <ListItemForMatrix contentRight={Icon}>Test Item 2</ListItemForMatrix>
        <ListItemForMatrix contentRight={Icon} disabled>
            Test Item 3
        </ListItemForMatrix>
        <ListItemForMatrix contentRight={Icon}>Test Item 4</ListItemForMatrix>
    </>
);

const componentProps = {
    children: getListItems(),
};

getBaseVisualTests({
    component: 'List',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('List', () => {
    const List = componentExists ? getComponent<ListProps>('List') : () => null;
    const ListItem = componentExists ? getComponent<ListItemProps>('ListItem') : () => null;

    const Demo = ({ variant = 'normal', disabled = false }: Pick<ListProps, 'variant' | 'disabled'>) => {
        return (
            <List variant={variant} disabled={disabled}>
                <ListItem contentRight={Icon}>Test Item 1</ListItem>
                <ListItem contentRight={Icon}>Test Item 2</ListItem>
                <ListItem contentRight={Icon} disabled>
                    Test Item 3
                </ListItem>
                <ListItem contentRight={Icon}>Test Item 4</ListItem>
            </List>
        );
    };

    it('variant', () => {
        mount(
            <>
                <Demo variant="normal" />
                <PadMe />
                <Demo variant="tight" />
                <PadMe />
                <Demo disabled />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('focused ListItem', () => {
        mount(<Demo />);

        cy.get('li').first().focus();
        cy.get('li').first().should('be.focused');

        cy.matchImageSnapshot();
    });

    it('cannot focus ListItem if disabled ListItem', () => {
        mount(<Demo />);

        cy.get('li').first().focus();
        cy.pressKey('Tab').pressKey('Tab');
        cy.get('li').eq(2).should('not.be.focused');

        cy.matchImageSnapshot();
    });

    it('cannot focus ListItem if disabled List', () => {
        mount(<Demo disabled />);

        cy.pressKey('Tab', 'ul');
        cy.get('li').first().should('not.be.focused');

        cy.matchImageSnapshot();
    });
});
