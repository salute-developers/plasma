import React from 'react';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Chip as ChipB2C } from '../Chip';

import { ChipGroup as ChipGroupB2C } from '.';

describe('plasma-b2c: ChipGroup', () => {
    const ChipGroup = getComponent('ChipGroup') as typeof ChipGroupB2C;
    const Chip = getComponent('Chip') as typeof ChipB2C;

    const getChips = () => [
        <Chip view="default" size="l" text="Chip_1" />,
        <Chip view="accent" text="Chip_2" />,
        <Chip view="secondary" size="s" text="Chip_3" />,
    ];

    it('_view', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup view="default">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup view="accent">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup view="secondary">{getChips()}</ChipGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup size="l">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup size="m">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup size="s">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup size="xs">{getChips()}</ChipGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('_gap', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup gap="dense">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup gap="wide">{getChips()}</ChipGroup>
                <PadMe />
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });

    it('custom chips', () => {
        mount(
            <CypressTestDecorator>
                <ChipGroup isCommonChipStyles={false}>{getChips()}</ChipGroup>
            </CypressTestDecorator>,
        );

        cy.matchImageSnapshot();
    });
});
