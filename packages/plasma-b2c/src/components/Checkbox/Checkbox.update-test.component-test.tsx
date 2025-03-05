import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Checkbox', () => {
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
            checked: false,
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

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('[PLASMA-1406] CheckBox: size=m, view=accent, label, description, checked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="m" view="accent" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1407] CheckBox: size=s, view=accent, label, description', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="s" view="accent" label="Label" description="Description" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1411] CheckBox: size=s, view=accent, label, description, checked, disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="s" view="accent" label="Label" description="Description" checked disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1477] CheckBox: view=default, singleLine', () => {
        mount(
            <CypressTestDecoratorWithTypo>
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
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1478] CheckBox: size=s, view=secondary', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="s" view="secondary" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1479] CheckBox: view=tertiary', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="m" view="tertiary" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1480] CheckBox: view=paragraph', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="m" view="paragraph" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1481] CheckBox: view=accent', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="m" view="accent" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1482] CheckBox: view=positive', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="m" view="positive" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1483] CheckBox: view=warning', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="m" view="warning" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1484] CheckBox: view=negative', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox size="m" view="negative" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('default size m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <List>
                    {items.map((item) => (
                        <ListItem key={item.value} ml={item.parent ? '16x' : undefined} mb="4x">
                            <Checkbox size="m" {...item} />
                        </ListItem>
                    ))}
                </List>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input[type="checkbox"]').first().focus();
        cy.matchImageSnapshot();
    });

    it('should check the checkbox on label click', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox label="Label" description="Description" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('label').click();
        cy.get('input[type="checkbox"]').should('be.checked');
    });
});
