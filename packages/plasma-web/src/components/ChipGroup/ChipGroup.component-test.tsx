import React from 'react';
import type { FC, PropsWithChildren } from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard as standardTypo } from '@salutejs/plasma-typo';
import { CypressTestDecorator, getComponent, PadMe } from '@salutejs/plasma-cy-utils';
import { mount } from '@cypress/react';

import { Chip as ChipB2C } from '../Chip';

import { ChipGroup as ChipGroupB2C } from '.';

const StandardTypoStyle = createGlobalStyle(standardTypo);

describe('plasma-b2c: ChipGroup', () => {
    const ChipGroup = getComponent('ChipGroup') as typeof ChipGroupB2C;
    const Chip = getComponent('Chip') as typeof ChipB2C;

    const CypressTestDecoratorWithTypo: FC<PropsWithChildren> = ({ children }) => (
        <CypressTestDecorator>
            <StandardTypoStyle />
            {children}
        </CypressTestDecorator>
    );

    const getChips = () => [
        <Chip view="default" size="l" text="Chip_1" />,
        <Chip view="accent" text="Chip_2" />,
        <Chip view="secondary" size="s" text="Chip_3" />,
    ];

    it('_view', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ChipGroup view="default">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup view="accent">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup view="secondary">{getChips()}</ChipGroup>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_size', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ChipGroup size="l">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup size="m">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup size="s">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup size="xs">{getChips()}</ChipGroup>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('_gap', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ChipGroup gap="dense">{getChips()}</ChipGroup>
                <PadMe />
                <ChipGroup gap="wide">{getChips()}</ChipGroup>
                <PadMe />
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });

    it('custom chips', () => {
        mount(
            <CypressTestDecoratorWithTypo>
                <ChipGroup isCommonChipStyles={false}>{getChips()}</ChipGroup>
            </CypressTestDecoratorWithTypo>,
        );

        cy.matchImageSnapshot();
    });
});
