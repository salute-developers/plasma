import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

import { ProgressBarCircular as ProgressBarCircularWeb } from '.';

describe('plasma-b2c: ProgressBarCircular', () => {
    const ProgressBarCircular = getComponent('ProgressBarCircular') as typeof ProgressBarCircularWeb;

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular value={25} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('with content', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular value={25}>25%</ProgressBarCircular>
                <PadMe />
                <ProgressBarCircular value={50}>
                    <span>Загрузка</span>
                </ProgressBarCircular>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('with custom strokeWidth', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular value={25} strokeSize={8} />
                <PadMe />
                <ProgressBarCircular value={50} strokeSize={4} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular view="default" value={25} />
                <PadMe />
                <ProgressBarCircular view="secondary" value={25} />
                <PadMe />
                <ProgressBarCircular view="accent" value={25} />
                <PadMe />
                <ProgressBarCircular view="positive" value={25} />
                <PadMe />
                <ProgressBarCircular view="warning" value={25} />
                <PadMe />
                <ProgressBarCircular view="negative" value={25} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="xxl" value={25} />
                <PadMe />
                <ProgressBarCircular size="xl" value={25} />
                <PadMe />
                <ProgressBarCircular size="l" value={25} />
                <PadMe />
                <ProgressBarCircular size="m" value={25} />
                <PadMe />
                <ProgressBarCircular size="s" value={25} />
                <PadMe />
                <ProgressBarCircular size="xs" value={25} />
                <PadMe />
                <ProgressBarCircular size="xxs" value={25} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('different values', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular value={0} />
                <PadMe />
                <ProgressBarCircular value={25} />
                <PadMe />
                <ProgressBarCircular value={50} />
                <PadMe />
                <ProgressBarCircular value={75} />
                <PadMe />
                <ProgressBarCircular value={100} />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('with custom maxValue', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular value={50} maxValue={200} />
                <PadMe />
                <ProgressBarCircular value={150} maxValue={200}>
                    75%
                </ProgressBarCircular>
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
