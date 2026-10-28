import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
import { IconClose } from 'override/_Icon';

import type { ButtonProps } from '../Button/Button.types';
import type { IconButtonProps } from '../IconButton/IconButton.types';
import type { ChipProps } from '../Chip/Chip.types';

import type { GroupProps } from './Group.types';

const componentExists =
    hasComponent('Group') && hasComponent('Button') && hasComponent('IconButton') && hasComponent('Chip');
const describeFn = getDescribeFN('Group');

const Button = getComponent<ButtonProps>('Button');
const IconButton = getComponent<IconButtonProps>('IconButton');
const Chip = getComponent<ChipProps>('Chip');

const getButtons = (itemsCount = 3) =>
    Array(itemsCount)
        .fill(true)
        .map((_, index) => <Button key={`button-${index}`} text={`Button ${index}`} />);

const getIconButtons = (itemsCount = 3) =>
    Array(itemsCount)
        .fill(true)
        .map((_, index) => (
            <IconButton key={`icon-button-${index}`}>
                <IconClose color="inherit" size="s" />
            </IconButton>
        ));

const getChips = (itemsCount = 3) =>
    Array(itemsCount)
        .fill(true)
        .map((_, index) => <Chip key={`chip-${index}`} text={`Chip ${index}`} />);

const getMixedItems = () => [
    <Button key="button" text="Button" />,
    <IconButton key="icon-button">
        <IconClose color="inherit" size="s" />
    </IconButton>,
    <Chip key="chip" text="Chip" />,
];

getBaseVisualTests({
    component: 'Group',
    componentProps: {
        children: getButtons(),
    },
    configPropsForMatrix: ['gap', 'orientation', 'shape', 'stretching'],
    actionBeforeSnapshot: () => {
        cy.viewport(700, 700);
    },
});

describeFn('Group', () => {
    const Group = componentExists ? getComponent<GroupProps>('Group') : () => null;

    it('single item keeps its own radius', () => {
        mount(
            <>
                <Group shape="segmented" orientation="horizontal">
                    <Button text="Button" />
                </Group>
                <PadMe />
                <Group shape="segmented" orientation="vertical">
                    <Button text="Button" />
                </Group>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('stretching: filled', () => {
        mount(
            <>
                <Group orientation="horizontal" stretching="filled">
                    {getButtons()}
                </Group>
                <PadMe />
                <Group orientation="vertical" stretching="filled">
                    {getButtons()}
                </Group>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('children: icon button', () => {
        mount(
            <>
                <Group shape="default">{getIconButtons()}</Group>
                <PadMe />
                <Group shape="segmented">{getIconButtons()}</Group>
                <PadMe />
                <Group shape="segmented" orientation="vertical">
                    {getIconButtons()}
                </Group>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('children: chip', () => {
        mount(
            <>
                <Group shape="default">{getChips()}</Group>
                <PadMe />
                <Group shape="segmented">{getChips()}</Group>
                <PadMe />
                <Group shape="segmented" gap="none">
                    {getChips()}
                </Group>
                <PadMe />
                <Group shape="segmented" orientation="vertical">
                    {getChips()}
                </Group>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('children: mixed', () => {
        mount(
            <>
                <Group shape="segmented">{getMixedItems()}</Group>
                <PadMe />
                <Group shape="segmented" orientation="vertical" gap="wide">
                    {getMixedItems()}
                </Group>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });
});
