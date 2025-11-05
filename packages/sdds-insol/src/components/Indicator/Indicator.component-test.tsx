import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';
import React from 'react';

describe('sdds-insol: Indicator', () => {
    const Indicator = getComponent('Indicator');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="default" />
                    <Indicator size="m" view="default" />
                    <Indicator size="l" view="default" />
                </div>
                <PadMe />
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="accent" />
                    <Indicator size="m" view="accent" />
                    <Indicator size="l" view="accent" />
                </div>
                <PadMe />
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="inactive" />
                    <Indicator size="m" view="inactive" />
                    <Indicator size="l" view="inactive" />
                </div>
                <PadMe />
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="positive" />
                    <Indicator size="m" view="positive" />
                    <Indicator size="l" view="positive" />
                </div>
                <PadMe />
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="warning" />
                    <Indicator size="m" view="warning" />
                    <Indicator size="l" view="warning" />
                </div>
                <PadMe />
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="negative" />
                    <Indicator size="m" view="negative" />
                    <Indicator size="l" view="negative" />
                </div>
                <PadMe />
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="black" />
                    <Indicator size="m" view="black" />
                    <Indicator size="l" view="black" />
                </div>
                <PadMe />
                <div style={{ display: 'flex' }}>
                    <Indicator size="s" view="white" />
                    <Indicator size="m" view="white" />
                    <Indicator size="l" view="white" />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
