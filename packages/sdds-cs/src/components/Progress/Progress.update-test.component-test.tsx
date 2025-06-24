import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Progress as ProgressCS } from '.';

describe('sdds-cs: Progress', () => {
    const Progress = getComponent('Progress') as typeof ProgressCS;

    it('[PLASMA-1448] Progress: view=default, value=25', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={25} view="default" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1511] Progress: view=positive, value=50, without displayValue', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={50} displayValue={false} view="positive" />
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

    it('[PLASMA-1514]  Progress: view=negative, value=50', () => {
        mount(
            <CypressTestDecorator>
                <Progress value={50} view="negative" />
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
