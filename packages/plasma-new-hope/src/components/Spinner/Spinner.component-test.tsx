import React from 'react';
import { mount, getComponent, getDescribeFN, getBaseVisualTests, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

import type { SpinnerProps } from './Spinner.types';

const describeFn = getDescribeFN('Spinner');
const componentExists = hasComponent('Spinner');
const critical = 'var(--text-negative, #E31227)';

getBaseVisualTests({
    component: 'Spinner',
    componentProps: { size: 32 },
    configPropsForMatrix: ['view'],
});

describeFn('Spinner', () => {
    const Spinner = componentExists ? getComponent<SpinnerProps>('Spinner') : () => null;
    const Spin = styled(Spinner)`
        animation: none;
    `;

    it('simple', () => {
        mount(
            <>
                <Spin size={32} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('color', () => {
        mount(<Spin color={critical} size={32} />);
        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('sizes', () => {
        mount(
            <>
                <Spin size={8} />
                <PadMe />
                <Spin size={16} />
                <PadMe />
                <Spin size={32} />
                <PadMe />
                <Spin size={64} />
                <PadMe />
                <Spin size={96} />
                <PadMe />
                <Spin size="128px" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('id', () => {
        mount(
            <>
                <Spin size={16} id="16" />
                <PadMe />
                <Spin size={32} id="32" />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('many colors', () => {
        mount(
            <>
                <Spin size={32} color="green" />
                <PadMe />
                <Spin size={32} color="blue" />
                <PadMe />
                <Spin size={32} color="red" />
            </>,
        );
        cy.matchImageSnapshot();
    });
});
