import React, { FC, PropsWithChildren } from 'react';
import { mount, getComponent, PadMe, CypressTestDecorator } from '@salutejs/plasma-cy-utils';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { createGlobalStyle } from 'styled-components';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-web: Switch', () => {
    const Switch = getComponent('Switch');

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    it('simple', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch label="Переключатель" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_checked', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch checked label="Переключатель" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_focused', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch label="Переключатель" />
                <PadMe />
                <Switch checked label="Переключатель" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.get('body').tab();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200); // transition of focus ring
        cy.matchImageSnapshot();
        cy.focused().tab();
        cy.matchImageSnapshot('_focus_checked');
    });

    it('_disabled', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch disabled label="Переключатель" />
                <PadMe />
                <PadMe />
                <Switch disabled checked label="Переключатель" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_sizes', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch size="s" label="Переключатель" description="Описание переключателя" />
                <PadMe />
                <Switch size="m" label="Переключатель" description="Описание переключателя" />
                <PadMe />
                <Switch size="l" label="Переключатель" description="Описание переключателя" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_toggleSizes', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch toggleSize="s" label="Переключатель" />
                <PadMe />
                <Switch toggleSize="l" label="Переключатель" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('onClick', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch id="switch" label="Переключатель" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
        cy.get('#switch').realClick();
        cy.matchImageSnapshot('clicked');
    });

    it('onMouseDown', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <Switch id="switch" label="Переключатель" />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
        cy.get('#switch').realMouseDown();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(400); // transition of focus ring
        cy.matchImageSnapshot('mouseDown_pressed');
    });
});
