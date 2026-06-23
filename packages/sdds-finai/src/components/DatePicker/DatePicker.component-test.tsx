import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import type { DatePickerProps, DatePickerRangeProps } from '@salutejs/plasma-new-hope';

const sizes = ['s', 'xs'];

describe('sdds-finai: DatePicker', () => {
    const DatePicker = getComponent<DatePickerProps>('DatePicker');

    const Demo = (props: DatePickerProps) => (
        <DatePicker defaultDate={new Date(2023, 5, 14)} label="Label" leftHelper="Helper text" {...props} />
    );

    it('valueEdited', () => {
        mount(<Demo valueEdited />);
        cy.matchImageSnapshot();
    });

    it(':size appearance=viewMode', () => {
        mount(
            <CypressTestDecorator>
                {sizes.map((size) => (
                    <>
                        <Demo key={size} appearance="viewMode" view="default" size={size} />
                        <PadMe />
                    </>
                ))}
            </CypressTestDecorator>,
        );
        cy.matchImageSnapshot();
    });
});

describe('sdds-finai: DatePickerRange', () => {
    const DatePickerRange = getComponent<DatePickerRangeProps>('DatePickerRange');

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
