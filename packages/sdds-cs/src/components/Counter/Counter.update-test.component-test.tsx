import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Counter as CounterCS } from './Counter';

describe('sdds-cs: Counter', () => {
    const Counter = getComponent('Counter') as typeof CounterCS;

    it('[PLASMA-T1724] Counter: view=default', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={123} maxCount={200} view="default" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1725] Counter: view=accent, maxCount=2', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={123} maxCount={2} view="accent" />
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

    it('[PLASMA-T1728] Counter: view=negative', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={123} maxCount={200} view="negative" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1965] Counter: negative count', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={-1} maxCount={200} view="default" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
