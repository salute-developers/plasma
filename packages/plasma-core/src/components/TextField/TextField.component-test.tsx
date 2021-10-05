import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

describe('plasma-core: TextField', () => {
    const TextField = getComponent('TextField');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <TextField value="Welcome" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
