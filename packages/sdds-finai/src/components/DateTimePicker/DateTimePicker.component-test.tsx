import React from 'react';
import { mount, getComponent } from '@salutejs/plasma-cy-utils';

describe('sdds-finai: DateTimePicker', () => {
    const DateTimePicker = getComponent('DateTimePicker') as any;

    it('valueEdited', () => {
        mount(<DateTimePicker valueEdited defaultDate={new Date(2023, 5, 14, 0, 0, 0)} />);
        cy.matchImageSnapshot();
    });
});
