import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent } from '@salutejs/plasma-cy-utils';

import type { ChipProps } from '../Chip/Chip.types';

import type { ChipGroupProps } from './ChipGroup.types';

const componentExists = hasComponent('ChipGroup') && hasComponent('Chip');
const describeFn = getDescribeFN('ChipGroup');

describeFn('ChipGroup', () => {
    const ChipGroup = componentExists ? getComponent<ChipGroupProps>('ChipGroup') : () => null;
    const Chip = componentExists ? getComponent<ChipProps>('Chip') : () => null;

    it('shape', () => {
        mount(
            <>
                <ChipGroup shape="default">
                    <Chip text="One" />
                    <Chip text="Two" />
                    <Chip text="Three" />
                </ChipGroup>
                <ChipGroup shape="segmented">
                    <Chip text="One" />
                    <Chip text="Two" />
                    <Chip text="Three" />
                </ChipGroup>
            </>,
        );

        cy.matchImageSnapshot();
    });
});
