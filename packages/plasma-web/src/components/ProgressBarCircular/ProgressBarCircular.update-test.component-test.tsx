import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';
import { IconCross } from '@salutejs/plasma-icons';

import { ProgressBarCircular as ProgressBarCircularWeb } from '.';

describe('plasma-web: ProgressBarCircular', () => {
    const ProgressBarCircular = getComponent('ProgressBarCircular') as typeof ProgressBarCircularWeb;

    it('[PLASMA-T1991] ProgressBarCircular: size=xxl, view=default, value=50, strokeWidth=8, with number content', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="xxl" view="default" strokeWidth={8} value={50}>
                    50%
                </ProgressBarCircular>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1992] ProgressBarCircular: size=xl, view=secondary, value=50, strokeWidth=6', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="xl" view="secondary" strokeWidth={6} value={50} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1993] ProgressBarCircular: size=l, view=accent, value=50, strokeWidth=4, with icon content', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="l" view="accent" strokeWidth={4} value={50}>
                    <IconCross size="s" />
                </ProgressBarCircular>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1994] ProgressBarCircular: size=m, view=default, value=100, strokeWidth=2', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="m" view="default" strokeWidth={2} value={100} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1995] ProgressBarCircular: size=s, view=info, value=50', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="s" view="info" value={50} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1996] ProgressBarCircular: size=xs, view=positive, value=50', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="xs" view="positive" value={50} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1997] ProgressBarCircular: size=xxs, view=warning, value=50', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="xxs" view="warning" value={50} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1998] ProgressBarCircular: size=xxl, view=negative, value=50', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="xxl" view="negative" value={50} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T2376] ProgressBarCircular: size=xl, view=default, value=0', () => {
        mount(
            <CypressTestDecorator>
                <ProgressBarCircular size="xl" view="default" value={0} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
