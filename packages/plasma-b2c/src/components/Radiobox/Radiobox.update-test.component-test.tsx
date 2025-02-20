import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: Radiobox', () => {
    const Radiobox = getComponent('Radiobox');
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

    it('[PLASMA-1416] RadioBox: size=m, label, description, checked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="accent" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1417] RadioBox: size=s, label, description, not checked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="s" view="accent" label="Label" description="Description" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1418] RadioBox: size=m, label, checked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="accent" label="Label" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1420] RadioBox: size=m, label, description, disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="accent" label="Label" description="Description" checked disabled />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1485] RadioBox: view=default, singleLine', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ width: '200px' }}>
                    <Radiobox
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

    it('[PLASMA-1486] RadioBox: size=s, view=secondary', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="s" view="secondary" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1487] RadioBox: view=tertiary', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="tertiary" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1488] RadioBox: view=paragraph', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="paragraph" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1490] RadioBox: view=positive', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="positive" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1491] RadioBox: view=warning', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="warning" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1492] RadioBox: view=negative', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox size="m" view="negative" label="Label" description="Description" checked />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
