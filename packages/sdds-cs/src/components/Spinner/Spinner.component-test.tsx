import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import styled from 'styled-components';

const critical = 'var(--text-negative, #E31227)';

describe('sdds-cs: Spinner', () => {
    const Spinner = getComponent('Spinner');
    const Spin = styled(Spinner)`
        animation: none;
    `;

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Spin />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('_color', () => {
        mount(
            <CypressTestDecorator>
                <Spin color={critical} />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot({
            failureThreshold: 0.01,
            failureThresholdType: 'percent',
        });
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <Spin size={16} />
                <PadMe />
                <Spin size={32} />
                <PadMe />
                <Spin size={48} />
                <PadMe />
                <Spin size={64} />
                <PadMe />
                <Spin size="128px" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('id', () => {
        mount(
            <CypressTestDecorator>
                <Spin size={16} id="16" />
                <PadMe />
                <Spin size={32} id="32" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });

    it('many colors', () => {
        mount(
            <CypressTestDecorator>
                <Spin size={32} color="green" />
                <PadMe />
                <Spin size={32} color="blue" />
                <PadMe />
                <Spin size={32} color="red" />
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});
