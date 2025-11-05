import React from 'react';
import { CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-giga: Counter', () => {
    const Counter = getComponent('Counter');

    it('[PLASMA-T1724] Counter: view=default, size=l', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={123} maxCount={200} view="default" size="l" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1725] Counter: view=accent, size=m, maxCount=2', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={123} maxCount={2} view="accent" size="m" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1726] Counter: view=positive, size=s, high count value', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={999999999999999} maxCount={999999999999999} view="positive" size="s" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1727] Counter: view=warning, size=xs', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={123} maxCount={200} view="warning" size="xs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1728] Counter: view=negative, size=xxs', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={123} maxCount={200} view="negative" size="xxs" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1965] Counter: negative count', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={-1} maxCount={200} view="default" size="l" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
