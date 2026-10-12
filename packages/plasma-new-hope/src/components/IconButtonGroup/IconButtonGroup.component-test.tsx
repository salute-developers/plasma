import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { IconButtonProps } from '../IconButton/IconButton.types';

import type { IconButtonGroupProps } from './IconButtonGroup.types';

const componentExists = hasComponent('IconButtonGroup') && hasComponent('IconButton');
const describeFn = getDescribeFN('IconButtonGroup');

const IconButton = getComponent<IconButtonProps>('IconButton');

const getButtons = (itemsCount = 5) =>
    Array(itemsCount)
        .fill(true)
        .map((_, i) => (
            <IconButton key={`icon-button-${i}`}>
                <IconPlasma color="inherit" />
            </IconButton>
        ));

const getCustomButtons = () => [
    <IconButton key="default" view="default" size="l">
        <IconPlasma color="inherit" />
    </IconButton>,
    <IconButton key="accent" view="accent">
        <IconPlasma color="inherit" />
    </IconButton>,
    <IconButton key="secondary" view="secondary">
        <IconPlasma color="inherit" />
    </IconButton>,
    <IconButton key="success" view="success" size="s">
        <IconPlasma color="inherit" />
    </IconButton>,
    <IconButton key="warning" view="warning">
        <IconPlasma color="inherit" />
    </IconButton>,
];

const componentProps = {
    children: getButtons(),
};

getBaseVisualTests({
    component: 'IconButtonGroup',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'orientation', 'gap', 'shape', 'stretching'],
    actionBeforeSnapshot: () => {
        cy.viewport(700, 700);
    },
});

describeFn('IconButtonGroup', () => {
    const IconButtonGroup = componentExists ? getComponent<IconButtonGroupProps>('IconButtonGroup') : () => null;

    it('orientation: single button', () => {
        mount(
            <>
                <IconButtonGroup orientation="horizontal">
                    <IconButton>
                        <IconPlasma color="inherit" />
                    </IconButton>
                </IconButtonGroup>
                <PadMe />
                <IconButtonGroup orientation="vertical">
                    <IconButton>
                        <IconPlasma color="inherit" />
                    </IconButton>
                </IconButtonGroup>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('orientation: stretching - filled', () => {
        mount(
            <>
                <IconButtonGroup orientation="horizontal" stretching="filled">
                    {getButtons()}
                </IconButtonGroup>
                <PadMe />
                <IconButtonGroup orientation="vertical" stretching="filled">
                    {getButtons()}
                </IconButtonGroup>
            </>,
        );

        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('custom buttons', () => {
        mount(
            <>
                <IconButtonGroup isCommonButtonStyles={false}>{getCustomButtons()}</IconButtonGroup>
                <PadMe />
                <IconButtonGroup isCommonButtonStyles={false} orientation="vertical">
                    {getCustomButtons()}
                </IconButtonGroup>
            </>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('dense gap: default and pilled', () => {
        mount(
            <>
                <IconButtonGroup gap="dense" shape="default">
                    {getButtons(3)}
                </IconButtonGroup>
                <PadMe />
                <IconButtonGroup gap="dense" shape="pilled">
                    {getButtons(3)}
                </IconButtonGroup>
                <PadMe />
                <IconButtonGroup gap="dense" shape="segmented">
                    {getButtons(3)}
                </IconButtonGroup>
            </>,
        );

        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });
});
