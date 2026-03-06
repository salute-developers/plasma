import React, { PropsWithChildren } from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { CheckboxProps } from './Checkbox.types';

const componentExists = hasComponent('Checkbox');
const componentLinkExists = hasComponent('Link');
const componentListExists = hasComponent('List');
const componentListItemExists = hasComponent('ListItem');
const describeFn = getDescribeFN('Checkbox');

getBaseVisualTests({
    component: 'Checkbox',
    componentProps: {
        label: 'Label',
        description: 'Description',
        checked: true,
    },
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Checkbox', () => {
    const Checkbox = componentExists ? getComponent<CheckboxProps>('Checkbox') : () => null;
    const Link = componentLinkExists ? getComponent('Link') : () => null;
    const List = componentListExists
        ? getComponent('List')
        : ({ children, ...rest }: PropsWithChildren) => <div {...rest}>{children}</div>;
    const ListItem = componentListItemExists
        ? getComponent('ListItem')
        : ({ children, ...rest }: PropsWithChildren) => <div {...rest}>{children}</div>;

    const name = 'languages';
    const getItems = () => [
        {
            name,
            value: 'natural',
            label: 'Естественные языки',
            disabled: false,
            checked: true,
            indeterminate: false,
            description: 'Языки, на которых говорят люди. Они не были созданы искуственно и развивались естественно.',
        },
        { name, value: 'russian', label: 'Русский', checked: true, disabled: false, parent: 'natural' },
        {
            name,
            value: 'english',
            label: 'Английский',
            checked: true,
            disabled: false,
            description: (
                <>
                    Самый распространенный язык в <Link href="/#">мире</Link>
                </>
            ),
            parent: 'natural',
        },
        { name, value: 'french', label: 'Французский', checked: true, disabled: false, parent: 'natural' },
        {
            name,
            value: 'chinese',
            label: (
                <>
                    Китайский <Link href="/#">язык</Link>
                </>
            ),
            checked: true,
            parent: 'natural',
        },
        {
            name,
            value: 'artificial',
            label: 'Искусственные языки',
            indeterminate: true,
            disabled: false,
        },
        {
            name,
            value: 'klingon',
            label: 'Клингонский',
            disabled: false,
            checked: false,
            description: 'Язык одной из раз в сериале СтарТрек',
            parent: 'artificial',
        },
        {
            name,
            value: 'elvish',
            label: 'Эльфийский',
            disabled: true,
            checked: true,
            description: 'Искусственный язык из вселенной Властелина колец',
            parent: 'artificial',
        },
        {
            name,
            value: 'dothraki',
            label: 'Дотракийский',
            disabled: true,
            checked: false,
            description: 'Язык, разработанный для реплик дотракийских племен из вселенной Песнь Льда и Огня',
            parent: 'artificial',
        },
    ];

    it('chip group', () => {
        const items = getItems();

        mount(
            <List>
                {items.map((item) => (
                    <ListItem
                        key={item.value}
                        style={{
                            marginLeft: item.parent ? '32px' : undefined,
                        }}
                    >
                        <Checkbox {...item} />
                    </ListItem>
                ))}
            </List>,
        );

        cy.get('input[type="checkbox"]').first().focus();

        cy.viewport(500, 556);
        cy.matchImageSnapshot();
    });

    it('should check the checkbox on label click', () => {
        mount(<Checkbox label="Label" description="Description" />);

        cy.get('label').click();
        cy.get('input[type="checkbox"]').should('be.checked');
    });

    it('singleLine', () => {
        mount(
            <div style={{ width: '200px' }}>
                <Checkbox
                    singleLine
                    label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                    description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                />
            </div>,
        );

        cy.matchImageSnapshot();
    });
});
