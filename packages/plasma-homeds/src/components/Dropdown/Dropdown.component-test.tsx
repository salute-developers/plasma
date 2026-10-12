import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { DropdownProps } from './Dropdown';

const componentExists = hasComponent('Dropdown');
const describeFn = getDescribeFN('Dropdown');

const items = [
    { value: 'edit', label: 'Редактировать' },
    { value: 'delete', label: 'Удалить' },
];

describeFn('Dropdown', () => {
    const Dropdown = componentExists ? getComponent<DropdownProps<any>>('Dropdown') : () => null;
    const Button = componentExists ? getComponent<any>('Button') : () => null;

    it('trigger: longPress', () => {
        mount(
            <Dropdown items={items} trigger="longPress" longPressDelay={300}>
                <Button id="long-press" text="longPress" />
            </Dropdown>,
        );

        // Короткое нажатие не открывает список
        cy.get('#long-press').trigger('pointerdown', { button: 0, pointerType: 'mouse' });
        cy.get('#long-press').trigger('pointerup', { button: 0, pointerType: 'mouse' });
        cy.get('[id$="edit"]').should('not.exist');

        // Удержание дольше longPressDelay открывает список
        cy.get('#long-press').trigger('pointerdown', { button: 0, pointerType: 'mouse' });
        cy.get('[id$="edit"]').should('exist');
        cy.get('#long-press').trigger('pointerup', { button: 0, pointerType: 'mouse' });
    });
});
