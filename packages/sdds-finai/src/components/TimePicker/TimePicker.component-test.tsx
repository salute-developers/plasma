import React from 'react';
import { mount, CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import type { TimePickerProps } from '@salutejs/plasma-new-hope';

const sizes = ['s', 'xs'];

describe('sdds-finai: TimePicker', () => {
    const TimePicker = getComponent<TimePickerProps>('TimePicker');

    const Demo = (props: any) => (
        <TimePicker value="00:00:00" columnsQuantity={3} label="Label" leftHelper="Helper text" {...props} />
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
