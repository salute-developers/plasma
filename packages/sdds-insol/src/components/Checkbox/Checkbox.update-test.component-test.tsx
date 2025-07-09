import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('sdds-insol: Checkbox', () => {
    const Checkbox = getComponent('Checkbox');
    const Link = getComponent('Link');
    const List = getComponent('List');
    const ListItem = getComponent('ListItem');
    const name = 'languages';
    const items = [
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

    it('[PLASMA-1406] CheckBox: size=m, view=accent, label, description, checked', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="m" view="accent" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1407] CheckBox: size=s, view=accent, label, description', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="s" view="accent" label="Label" description="Description" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1411] CheckBox: size=s, view=accent, label, description, checked, disabled', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="s" view="accent" label="Label" description="Description" checked disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1477] CheckBox: view=default, singleLine', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ width: '200px' }}>
                    <Checkbox
                        size="m"
                        view="default"
                        label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                        description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                        checked
                        singleLine
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1478] CheckBox: size=s, view=secondary', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="s" view="secondary" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1479] CheckBox: view=tertiary', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="m" view="tertiary" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1480] CheckBox: view=paragraph', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="m" view="paragraph" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1481] CheckBox: view=accent', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="m" view="accent" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1482] CheckBox: view=positive', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="m" view="positive" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1483] CheckBox: view=warning', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="m" view="warning" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1484] CheckBox: view=negative', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="m" view="negative" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('default size m', () => {
        mount(
            <CypressTestDecorator>
                <List>
                    {items.map((item) => (
                        <ListItem key={item.value} ml={item.parent ? '16x' : undefined} mb="4x">
                            <Checkbox size="m" {...item} />
                        </ListItem>
                    ))}
                </List>
            </CypressTestDecorator>,
        );

        cy.get('input[type="checkbox"]').first().focus();
        cy.matchImageSnapshot();
    });

    it('should check the checkbox on label click', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox label="Label" description="Description" />
            </CypressTestDecorator>,
        );

        cy.get('label').click();
        cy.get('input[type="checkbox"]').should('be.checked');
    });
});
