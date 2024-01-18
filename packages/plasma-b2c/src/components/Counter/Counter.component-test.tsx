import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

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
                <Counter count={10} view="primary" />
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
                <Counter count={10} size="xs" />
                <PadMe />
                <Counter count={10} size="xxs" />
                <PadMe />
                <Counter count={100} maxCount={99} size="xs" />
                <PadMe />
                <Counter count={100} maxCount={99} size="xxs" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
