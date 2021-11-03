import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-ui: TimePicker', () => {
    const TimePicker = getComponent('TimePicker');

    it('default', () => {
        mount(
            <CypressTestDecorator>
                <TimePicker
                    value={new Date(1980, 8, 1, 0, 28, 59)}
                    min={new Date(1975, 1, 1, 0, 15, 29)}
                    max={new Date(1985, 10, 30, 12, 30, 30)}
                />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
