import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { DateTimePickerProps } from '@salutejs/plasma-new-hope';

const sizes = ['s', 'xs'];

describe('sdds-finai: DateTimePicker', () => {
    const DateTimePicker = getComponent<DateTimePickerProps>('DateTimePicker');

    const Demo = (props) => (
        <DateTimePicker
            defaultDate={new Date(2023, 5, 14, 0, 0, 0)}
            label="Label"
            leftHelper="Helper text"
            {...props}
        />
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
