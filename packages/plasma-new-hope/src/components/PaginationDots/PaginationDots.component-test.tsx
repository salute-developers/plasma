import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';

const componentExists = hasComponent('PaginationDots');
const describeFn = getDescribeFN('PaginationDots');

describeFn('PaginationDots', () => {
    const PaginationDots = componentExists ? getComponent('PaginationDots') : () => null;
    const PaginationDot = componentExists ? getComponent('PaginationDot') : () => null;

    it('simple', () => {
        mount(
            <>
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
            </>,
        );

        cy.matchImageSnapshot();
    });
});
