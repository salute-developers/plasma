import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Checkbox as CheckboxCS } from './Checkbox';

describe('sdds-cs: Checkbox', () => {
    const Checkbox = getComponent('Checkbox') as typeof CheckboxCS;

    it('[PLASMA-1406] CheckBox: size=s, view=accent, label, description, checked', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="s" view="accent" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1407] CheckBox: size=s, view=accent, label, description', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="s" view="accent" label="Label" description="Description" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1411] CheckBox: size=s, view=accent, label, description, checked, disabled', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="s" view="accent" label="Label" description="Description" checked disabled />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1477] CheckBox: singleLine', () => {
        mount(
            <CypressTestDecorator>
                <div style={{ width: '200px' }}>
                    <Checkbox
                        label="Label looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                        description="Description looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger"
                        checked
                        singleLine
                    />
                </div>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-1478] CheckBox: size=s', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox size="s" label="Label" description="Description" checked />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('should check the checkbox on label click', () => {
        mount(
            <CypressTestDecorator>
                <Checkbox label="Label" description="Description" />
            </CypressTestDecorator>,
        );

        cy.get('label').click();
        cy.get('input[type="checkbox"]').should('be.checked');
    });
});
