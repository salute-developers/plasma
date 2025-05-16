import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-b2c: Indicator', () => {
    const Indicator = getComponent('Indicator');

    it('[PLASMA-T1738] Indicator: size=l, view=default', () => {
        mount(
            <CypressTestDecorator>
                <Indicator size="l" view="default" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1739] Indicator: size=m, view=accent', () => {
        mount(
            <CypressTestDecorator>
                <Indicator size="m" view="accent" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1740] Indicator: size=s, view=inactive', () => {
        mount(
            <CypressTestDecorator>
                <Indicator size="s" view="inactive" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1741] Indicator: size=l, view=positive', () => {
        mount(
            <CypressTestDecorator>
                <Indicator size="l" view="positive" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1742] Indicator: size=l, view=warning', () => {
        mount(
            <CypressTestDecorator>
                <Indicator size="l" view="warning" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1743] Indicator: size=l, view=negative', () => {
        mount(
            <CypressTestDecorator>
                <Indicator size="l" view="negative" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
