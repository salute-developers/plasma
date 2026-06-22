import React from 'react';
import { mount, getComponent, PadMe } from '@salutejs/plasma-cy-utils';

describe('sdds-finai: DatePicker', () => {
    const DatePicker = getComponent('DatePicker') as any;

    it('valueEdited', () => {
        mount(<DatePicker valueEdited defaultDate={new Date(2023, 5, 14)} />);
        cy.matchImageSnapshot();
    });
});

describe('sdds-finai: DatePickerRange', () => {
    const DatePickerRange = getComponent('DatePickerRange') as any;

    it('firstValueEdited, secondValueEdited', () => {
        mount(
            <>
                <DatePickerRange
                    firstValueEdited
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
                <PadMe />
                <DatePickerRange
                    secondValueEdited
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
                <PadMe />
                <DatePickerRange
                    firstValueEdited
                    secondValueEdited
                    defaultFirstDate={new Date(2023, 5, 14)}
                    defaultSecondDate={new Date(2023, 5, 17)}
                />
            </>,
        );
        cy.matchImageSnapshot();
    });
});
