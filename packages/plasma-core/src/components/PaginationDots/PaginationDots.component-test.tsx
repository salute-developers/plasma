import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

describe('plasma-core: PaginationDots', () => {
    const PaginationDots = getComponent('PaginationDots');
    const PaginationDot = getComponent('PaginationDot');

    it('simple', () => {
        mount(
            <CypressTestDecorator>
                <PaginationDots>
                    <PaginationDot />
                    <PaginationDot isActive />
                    <PaginationDot />
                </PaginationDots>
                <PadMe />
                <PaginationDots>
                    <PaginationDot isActive />
                    <PaginationDot />
                    <PaginationDot />
                </PaginationDots>
                <PadMe />
                <PaginationDots>
                    <PaginationDot />
                    <PaginationDot />
                    <PaginationDot isActive />
                </PaginationDots>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
