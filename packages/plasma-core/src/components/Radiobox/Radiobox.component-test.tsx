import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';

const StandardTypoStyle = createGlobalStyle(standardTypo);

const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
    <CypressTestDecorator>
        <StandardTypoStyle />
        {children}
    </CypressTestDecorator>
);

describe('plasma-core: Radiobox', () => {
    const Radiobox = getComponent('Radiobox');

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('with focus', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox label="checkbox with focus" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('input').focus();

        cy.matchImageSnapshot();
    });

    it('__label', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox name="robots" label="simple radiobox" />
                <Radiobox
                    name="robots"
                    label={
                        <span>
                            radiobox with <a href="https://plasma.sberdevices.ru/">link</a>
                        </span>
                    }
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('__description', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox name="robots" label="simple radiobox" description="О чём мечтают роботы?" />
                <Radiobox
                    name="robots"
                    label="simple radiobox"
                    description={
                        <span>
                            Об <a href="https://plasma.sberdevices.ru">электроовцах</a>
                        </span>
                    }
                />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_checked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox name="robots" checked label="radiobox checked" description="О чём мечтают роботы?" />
                <Radiobox name="robots" label="radiobox" description="О чём мечтают роботы?" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_focused', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox name="robots" focused label="radiobox checked" description="О чём мечтают роботы?" />
                <Radiobox name="robots" focused checked label="radiobox" description="О чём мечтают роботы?" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Radiobox checked disabled label="radiobox checked" description="О чём мечтают роботы?" />
                <Radiobox disabled label="radiobox" description="О чём мечтают роботы?" />
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });

    it(':id', () => {
        mount(
            <CypressTestDecoratorWithTypo noSSR>
                <Radiobox name="uniqId" label="radiobox" description="О чём мечтают роботы?" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('[name="uniqId"]').should('have.attr', 'id');
    });

    it('squeezes', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <div style={{ overflow: 'hidden', width: 150 }}>
                    <Radiobox
                        checked
                        disabled
                        label="Radiobox with a very very very very very long label"
                        description="Radiobox description with a very very very very very long text"
                        singleLine
                    />
                    <Radiobox disabled label="Radiobox 2" description="Radiobox 2 description" />
                </div>
            </CypressTestDecoratorWithTypo>,
        );
        cy.matchImageSnapshot();
    });
});

describe('plasma-core: RadioGroup', () => {
    const Radiobox = getComponent('Radiobox');
    const RadioGroup = getComponent('RadioGroup');
    const H3 = getComponent('Headline3');

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <RadioGroup aria-labelledby="radiogroup-title-id">
                    <H3 id="radiogroup-title-id">Заголовок</H3>
                    <Radiobox name="radio-1" label="Радиокнопка 1" description="Описание 1" defaultChecked />
                    <Radiobox name="radio-1" label="Радиокнопка 2" description="Описание 2" />
                </RadioGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
