import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-web: Counter', () => {
    const Counter = getComponent('Counter');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={10} />
                <PadMe />
                <Counter count={100} maxCount={99} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={10} view="default" />
                <PadMe />
                <Counter count={10} view="accent" />
                <PadMe />
                <Counter count={10} view="positive" />
                <PadMe />
                <Counter count={10} view="warning" />
                <PadMe />
                <Counter count={10} view="negative" />
                <PadMe />
                <Counter count={10} view="dark" />
                <PadMe />
                <Counter count={10} view="light" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Counter count={1} size="xxs" />
                <PadMe />
                <Counter count={10} size="xs" />
                <PadMe />
                <Counter count={100} maxCount={99} size="s" />
                <PadMe />
                <Counter count={1000} maxCount={999} size="m" />
                <PadMe />
                <Counter count={10000} maxCount={9999} size="l" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
