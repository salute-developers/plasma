import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Checkbox', () => {
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

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('default size s', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <List>
                    {items.map((item) => (
                        <ListItem
                            key={item.value}
                            style={{
                                marginLeft: item.parent ? '24px' : undefined,
                            }}
                        >
                            <Checkbox size="s" {...item} />
                        </ListItem>
                    ))}
                </List>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input[type="checkbox"]').first().focus();
        cy.matchImageSnapshot();
    });

    it('default size m', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <List>
                    {items.map((item) => (
                        <ListItem
                            key={item.value}
                            style={{
                                marginLeft: item.parent ? '32px' : undefined,
                            }}
                        >
                            <Checkbox size="m" {...item} />
                        </ListItem>
                    ))}
                </List>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input[type="checkbox"]').first().focus();

        cy.viewport(500, 556);
        cy.matchImageSnapshot();
    });

    it('default size l', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <List>
                    {items.map((item) => (
                        <ListItem
                            key={item.value}
                            style={{
                                marginLeft: item.parent ? '36px' : undefined,
                            }}
                        >
                            <Checkbox size="l" {...item} />
                        </ListItem>
                    ))}
                </List>
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input[type="checkbox"]').first().focus();

        cy.viewport(500, 595);
        cy.matchImageSnapshot();
    });

    it('should check the checkbox on label click', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Checkbox label="Label" description="Description" />
            </CypressTestDecoratorWithTypo>,
        );

        // realClick приводит к падению теста Combobox
        // https://github.com/salute-developers/plasma/issues/1708
        // cy.get('label').realClick();
        // cy.get('input[type="checkbox"]').should('be.checked');

        cy.get('label').click();
        cy.get('input[type="checkbox"]').should('be.checked');
    });

    it('singleLine', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '200px' }}>
                    <Checkbox
                        singleLine
                        label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                        description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                    />
                </div>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
