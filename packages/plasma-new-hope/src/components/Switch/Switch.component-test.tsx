import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { SwitchProps } from './Switch.types';

const componentExists = hasComponent('Switch');
const describeFn = getDescribeFN('Switch');

const switchProps = {
    label: 'Label',
    description: 'Description',
    checked: true
};

getBaseVisualTests({
    component: 'Switch',
    componentProps: switchProps,
    configPropsForMatrix: ['size', 'toggleSize'],
});

describeFn('Switch', () => {
    const Switch = componentExists ? getComponent<SwitchProps>('Switch') : () => null;

    it('checked', () => {
        mount(
            <>
                <Switch label="Переключатель" />
                <PadMe />
                <Switch checked label="Переключатель" />
            </>
        );

        cy.matchImageSnapshot();
    });

    it('focused', () => {
        mount(
            <>
                <Switch label="Переключатель" />
                <PadMe />
                <Switch checked label="Переключатель" />
            </>
        );

        cy.get('body').tab();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200); // transition of focus ring
        cy.matchImageSnapshot();
        cy.focused().tab();
        cy.matchImageSnapshot('Switch -- focused checked');
    });

    it('disabled', () => {
        mount(
            <>
                <Switch disabled label="Переключатель" />
                <PadMe />
                <Switch disabled checked label="Переключатель" />
            </>
        );

        cy.matchImageSnapshot();
    });

    it('onClick', () => {
        mount(
            <Switch id="switch" label="Переключатель" />
        );

        cy.matchImageSnapshot();
        cy.get('#switch').click();
        cy.matchImageSnapshot('Switch -- onClick clicked');
    });

    it('onMouseDown', () => {
        mount(
            <Switch id="switch" label="Переключатель" />
        );

        cy.matchImageSnapshot();
        cy.get('#switch').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(400); // transition of focus ring
        cy.matchImageSnapshot('Switch -- onMouseDown pressed');
    });

    it('description, singleLine', () => {
        mount(
            <>
                <Switch label="Label" description="Description" checked />
                <PadMe />
                <Switch
                    label="Veeeeeeeeeeeeeeeeeeeery Loooooooooooooooooooooooooong Label"
                    description="singleLine"
                    checked
                    singleLine
                />
                <PadMe />
                <Switch
                    label="Veeeeeeeeeeeeeeeeeeeery Loooooooooooooooooooooooooong Label"
                    description="without singleLine"
                    checked
                    singleLine={false}
                />
                <PadMe />
                <Switch label="without description" checked />
                <PadMe />
                <Switch description="without label" checked />
            </>
        );

        cy.matchImageSnapshot();
    });

    it('labelPosition', () => {
        mount(
            <>
                <Switch label="Переключатель" labelPosition="before" description="Description" checked />
                <PadMe />
                <Switch label="Переключатель" labelPosition="after" description="Description" checked />
            </>
        );

        cy.matchImageSnapshot();
    });
});
