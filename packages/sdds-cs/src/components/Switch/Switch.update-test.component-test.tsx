import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Switch as SwitchCS } from '.';

describe('sdds-cs: Switch', () => {
    const Switch = getComponent('Switch') as typeof SwitchCS;

    it('[PLASMA-1425] Switch: label, description, checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1426] Switch: label, no description, unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch label="Label" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1498] Switch: toggleSize=l, label, labelPosition=before', () => {
        mount(
            <CypressTestDecorator>
                <Switch toggleSize="l" label="Label" labelPosition="before" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1499] Switch: toggleSize=s, label, description, labelPosition=after', () => {
        mount(
            <CypressTestDecorator>
                <Switch toggleSize="s" label="Label" labelPosition="after" description="Description" checked />
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
                <Switch checked disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1923] Switch: disabled, unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1924] Switch: focused, checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch checked />
            </CypressTestDecorator>,
        );

        cy.get('body').tab();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1925] Switch: focused, unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch />
            </CypressTestDecorator>,
        );

        cy.get('body').tab();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1926] Switch: on click checked', () => {
        mount(
            <CypressTestDecorator>
                <Switch id="switch" />
            </CypressTestDecorator>,
        );

        cy.get('#switch').click();
        cy.matchImageSnapshot();
    });

    it('[PLASMA-1927] Switch: on click unchecked', () => {
        mount(
            <CypressTestDecorator>
                <Switch id="switch" />
            </CypressTestDecorator>,
        );

        cy.get('#switch').click();
        cy.get('#switch').click();
        cy.matchImageSnapshot();
    });
});
