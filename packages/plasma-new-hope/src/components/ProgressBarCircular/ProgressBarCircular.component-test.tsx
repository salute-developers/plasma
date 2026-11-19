import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { ProgressBarCircularProps } from './ProgressBarCircular.types';

const componentExists = hasComponent('ProgressBarCircular');
const describeFn = getDescribeFN('ProgressBarCircular');

const progressBarCircularProps = {
    value: 50,
};

getBaseVisualTests({
    component: 'ProgressBarCircular',
    componentProps: progressBarCircularProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('ProgressBarCircular', () => {
    const ProgressBarCircular = componentExists
        ? getComponent<ProgressBarCircularProps>('ProgressBarCircular')
        : () => null;

    it('with content', () => {
        mount(
            <>
                <ProgressBarCircular value={25}>25%</ProgressBarCircular>
                <PadMe />
                <ProgressBarCircular value={50}>
                    <span>Загрузка</span>
                </ProgressBarCircular>
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with custom strokeWidth', () => {
        mount(
            <>
                <ProgressBarCircular value={25} strokeSize={8} />
                <PadMe />
                <ProgressBarCircular value={50} strokeSize={4} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('different values', () => {
        mount(
            <>
                <ProgressBarCircular value={0} />
                <PadMe />
                <ProgressBarCircular value={25} />
                <PadMe />
                <ProgressBarCircular value={50} />
                <PadMe />
                <ProgressBarCircular value={75} />
                <PadMe />
                <ProgressBarCircular value={100} />
            </>,
        );
        cy.matchImageSnapshot();
    });

    it('with custom maxValue', () => {
        mount(
            <>
                <ProgressBarCircular value={50} maxValue={200} />
                <PadMe />
                <ProgressBarCircular value={150} maxValue={200}>
                    75%
                </ProgressBarCircular>
            </>,
        );
        cy.matchImageSnapshot();
    });
});
