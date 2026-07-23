import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, PadMe } from '@salutejs/plasma-cy-utils';

import type { ChipProps } from './Chip.types';

const componentExists = hasComponent('Chip');
const describeFn = getDescribeFN('Chip');

describeFn('Chip', () => {
    const Chip = componentExists ? getComponent<ChipProps>('Chip') : () => null;

    it('pin', () => {
        mount(
            <>
                <Chip pin="square-square" text="square-square" />
                <PadMe />
                <Chip pin="square-clear" text="square-clear" />
                <PadMe />
                <Chip pin="clear-square" text="clear-square" />
                <PadMe />
                <Chip pin="clear-clear" text="clear-clear" />
                <PadMe />
                <Chip pin="clear-circle" text="clear-circle" />
                <PadMe />
                <Chip pin="circle-clear" text="circle-clear" />
                <PadMe />
                <Chip pin="circle-circle" text="circle-circle" />
            </>,
        );

        cy.matchImageSnapshot();
    });
});
