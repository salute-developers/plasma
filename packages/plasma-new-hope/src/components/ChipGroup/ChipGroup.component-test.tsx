import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';

import type { ChipProps } from '../Chip/Chip.types';

import type { ChipGroupProps } from './ChipGroup.types';

const componentExists = hasComponent('ChipGroup') && hasComponent('Chip');
const describeFn = getDescribeFN('ChipGroup');

const Chip = getComponent<ChipProps>('Chip');

const getChips = (itemsCount = 3) =>
    Array(itemsCount)
        .fill(true)
        .map((_, i) => <Chip key={`chip-${i}`} text={`Chip ${i}`} hasClear={false} />);

const getCustomChips = () => [
    <Chip key="1" view="default" size="l" text="Chip 1" hasClear={false} />,
    <Chip key="2" view="accent" text="Chip 2" hasClear={false} />,
    <Chip key="3" view="secondary" size="s" text="Chip 3" hasClear={false} />,
];

const componentProps = {
    children: getChips(),
};

getBaseVisualTests({
    component: 'ChipGroup',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'gap', 'shape'],
});

describeFn('ChipGroup', () => {
    const ChipGroup = componentExists ? getComponent<ChipGroupProps>('ChipGroup') : () => null;

    it('isWrapped', () => {
        mount(
            <ChipGroup gap="wide" isWrapped>
                {getChips(20)}
            </ChipGroup>,
        );

        cy.matchImageSnapshot();
    });

    it('isCommonChipStyles=false', () => {
        mount(<ChipGroup isCommonChipStyles={false}>{getCustomChips()}</ChipGroup>);

        cy.matchImageSnapshot();
    });
});
