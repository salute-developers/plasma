import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

describe('plasma-core: Switch', () => {
    const Switch = getComponent('Switch');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Switch label="Переключатель" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch checked label="Переключатель" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_focused', () => {
        mount(
            <CypressTestDecorator>
                <Switch label="Переключатель" />
                <PadMe />
                <Switch checked label="Переключатель" />
            </CypressTestDecorator>,
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
            <CypressTestDecorator>
                <Switch disabled label="Переключатель" />
                <PadMe />
                <PadMe />
                <Switch disabled checked label="Переключатель" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    // TODO: https://github.com/salute-developers/plasma/issues/886
    it.skip('_pressed', () => {
        mount(
            <CypressTestDecorator>
                <Switch label="Переключатель" />
                <PadMe />
                <Switch pressed label="Переключатель" />
                <PadMe />
                <Switch checked label="Переключатель" />
                <PadMe />
                <Switch pressed checked label="Переключатель" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('onClick', () => {
        mount(
            <CypressTestDecorator>
                <Switch id="switch" label="Переключатель" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
        cy.get('#switch').click({ force: true });
        cy.matchImageSnapshot('clicked');
    });
});
