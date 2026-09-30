import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { CounterProps } from './Counter.types';

const componentExists = hasComponent('Counter');
const describeFn = getDescribeFN('Counter');

const componentProps = {
    count: 10,
};

getBaseVisualTests({
    component: 'Counter',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('Counter', () => {
    const Counter = componentExists ? getComponent<CounterProps>('Counter') : () => null;

    it('simple', () => {
        mount(
            <>
                <Counter count={10} />
                <PadMe />
                <Counter count={100} maxCount={99} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('maxCount', () => {
        mount(
            <>
                <Counter count={123} maxCount={200} />
                <PadMe />
                <Counter count={123} maxCount={2} />
            </>,
        );

        cy.matchImageSnapshot();
    });

    it('high count value', () => {
        mount(<Counter count={999999999999999} maxCount={999999999999999} />);

        cy.matchImageSnapshot();
    });

    it('negative count', () => {
        mount(<Counter count={-1} maxCount={200} />);

        cy.matchImageSnapshot();
    });
});
