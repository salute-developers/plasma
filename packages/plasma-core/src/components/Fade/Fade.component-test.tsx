import React from 'react';
import { CypressTestDecorator } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Fade } from '.';

describe('plasma-core: Fade', () => {
    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <Fade />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_placement_top', () => {
        mount(
            <CypressTestDecorator>
                <Fade placement="top" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_placement_bottom', () => {
        mount(
            <CypressTestDecorator>
                <Fade placement="bottom" />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
