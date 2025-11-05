import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-web: Progress', () => {
    const Progress = getComponent('Progress');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} view="success" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('over min and max', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={-25} view="success" />
                <PadMe />
                <Progress value={125} view="success" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('__displayValue', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} displayValue={false} view="success" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_status (legacy)', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} status="success" />
                <PadMe />
                <Progress value={50} status="warning" />
                <PadMe />
                <Progress value={75} status="error" />
                <PadMe />
                <Progress value={100} status="accent" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} status="default" />
                <PadMe />
                <Progress value={25} status="secondary" />
                <PadMe />
                <Progress value={25} status="primary" />
                <PadMe />
                <Progress value={25} status="accent" />
                <PadMe />
                <Progress value={25} status="success" />
                <PadMe />
                <Progress value={25} status="warning" />
                <PadMe />
                <Progress value={25} status="error" />
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
