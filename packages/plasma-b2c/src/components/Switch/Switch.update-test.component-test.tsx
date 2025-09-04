import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-b2c: Switch', () => {
    const Switch = getComponent('Switch');

    it('[PLASMA-1425] Switch: size=l, label, description, checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="l" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-5794] Switch: size=l, label, description, checked, labelEllipses=false', () => {
        mount(
            <CypressTestDecorator>
                <Switch
                    size="l"
                    label="Veeeeeeeeeeeeeeeeeeeery Loooooooooooooooooooooooooong Label"
                    description="Description"
                    checked
                    labelEllipses={false}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-5794] Switch: size=l, label, description, checked, labelEllipses=true', () => {
        mount(
            <CypressTestDecorator>
                <Switch
                    size="l"
                    label="Veeeeeeeeeeeeeeeeeeeery Loooooooooooooooooooooooooong Label"
                    description="Description"
                    checked
                    labelEllipses
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1426] Switch: size=m, label, no description, unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" label="Label" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1498] Switch: size=l, toggleSize=l, label, labelPosition=before', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="l" toggleSize="l" label="Label" labelPosition="before" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1499] Switch: size=m, toggleSize=s, label, description, labelPosition=after', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" toggleSize="s" label="Label" labelPosition="after" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1500] Switch: size=s', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="s" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1505] Switch: disabled, checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" checked disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1923] Switch: disabled, unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1924] Switch: focused, checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" checked />
            </CypressTestDecorator>,
        );

        cy.get('body').tab();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1925] Switch: focused, unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" />
            </CypressTestDecorator>,
        );

        cy.get('body').tab();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1926] Switch: on click checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" id="switch" />
            </CypressTestDecorator>,
        );

        cy.get('#switch').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1927] Switch: on click unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch size="m" id="switch" />
            </CypressTestDecorator>,
        );

        cy.get('#switch').click();
        cy.get('#switch').click();
        cy.matchImageSnapshot();
    });
});
