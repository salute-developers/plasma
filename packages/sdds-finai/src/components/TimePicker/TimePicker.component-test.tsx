import React from 'react';
import { mount, getComponent } from '@salutejs/plasma-cy-utils';

describe('sdds-finai: TimePicker', () => {
    const TimePicker = getComponent('TimePicker') as any;

    it('valueEdited', () => {
        mount(<TimePicker value="00:00:00" valueEdited leftHelper="Отредактировано" />);
        cy.matchImageSnapshot();
    });
});
