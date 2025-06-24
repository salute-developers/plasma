import React from 'react';
import { mount, CypressTestDecorator, getComponent } from '@salutejs/plasma-cy-utils';

import { Chip as ChipCS } from '../Chip';

import { ChipGroup as ChipGroupCS } from '.';

describe('sdds-cs: ChipGroup', () => {
    const ChipGroup = getComponent('ChipGroup') as typeof ChipGroupCS;
    const Chip = getComponent('Chip') as typeof ChipCS;

    const getChips = (itemsCount = 5) =>
        Array(itemsCount)
            .fill(true)
            .map((_, i) => <Chip text={`Chip ${i}`} key={`chip_${i}`} hasClear={false} />);

    const getCustomChips = () => [
        <Chip view="default" size="s" text="Chip 1" hasClear={false} />,
        <Chip view="accent" text="Chip 2" hasClear={false} />,
        <Chip view="secondary" size="xs" text="Chip 3" hasClear={false} />,
    ];

    it('[PLASMA-T1599] ChipGroup: view=default, gap=dense', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup view="default" gap="dense">
                    {getChips()}
                </ChipGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1600] ChipGroup: view=secondary, gap=wide, isWrapped', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup view="secondary" gap="wide" isWrapped>
                    {getChips(20)}
                </ChipGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1601] ChipGroup: size=s, view=accent', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup view="accent" size="s">
                    {getChips(20)}
                </ChipGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1780] ChipGroup: isCommonChipStyles=false', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup isCommonChipStyles={false}>{getCustomChips()}</ChipGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('[PLASMA-T1781] ChipGroup: isCommonChipStyles', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup isCommonChipStyles>{getCustomChips()}</ChipGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
