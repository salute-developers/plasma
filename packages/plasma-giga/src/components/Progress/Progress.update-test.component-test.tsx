import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-giga: Progress', () => {
    const Progress = getComponent('Progress');

    it('[PLASMA-1448] Progress: view=default, value=25', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} view="default" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1449] Progress: view=secondary, value=25', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} view="secondary" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1450] Progress: view=warning, value=25', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} view="warning" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1511] Progress: view=primary, value=50, without displayValue', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={50} displayValue={false} view="primary" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1512] Progress: view=accent, value=99', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={99} view="accent" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1513] Progress: view=success, value=100', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={100} view="success" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1514]  Progress: view=warning, value=50', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={50} view="warning" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1515] Progress: view=error, value=1', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={1} view="error" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1921] Progress: value=125', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={125} view="default" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1922] Progress: value=-25', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={-25} view="default" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
