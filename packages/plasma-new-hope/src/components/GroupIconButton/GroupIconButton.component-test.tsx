import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { IconButtonProps } from '../IconButton/IconButton.types';

import type { GroupIconButtonProps } from './GroupIconButton.types';

const componentExists = hasComponent('GroupIconButton') && hasComponent('IconButton');
const describeFn = getDescribeFN('GroupIconButton');

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
    component: 'GroupIconButton',
    componentProps,
    configPropsForMatrix: ['view', 'size', 'orientation', 'gap', 'shape', 'stretching'],
    actionBeforeSnapshot: () => {
        cy.viewport(700, 700);
    },
});

describeFn('GroupIconButton', () => {
    const GroupIconButton = componentExists ? getComponent<GroupIconButtonProps>('GroupIconButton') : () => null;

    it('orientation: single button', () => {
        mount(
            <>
                <GroupIconButton orientation="horizontal">
                    <IconButton>
                        <IconPlasma color="inherit" />
                    </IconButton>
                </GroupIconButton>
                <PadMe />
                <GroupIconButton orientation="vertical">
                    <IconButton>
                        <IconPlasma color="inherit" />
                    </IconButton>
                </GroupIconButton>
            </>,
        );
        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('orientation: stretching - filled', () => {
        mount(
            <>
                <GroupIconButton orientation="horizontal" stretching="filled">
                    {getButtons()}
                </GroupIconButton>
                <PadMe />
                <GroupIconButton orientation="vertical" stretching="filled">
                    {getButtons()}
                </GroupIconButton>
            </>,
        );

        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });

    it('custom buttons', () => {
        mount(
            <>
                <GroupIconButton isCommonButtonStyles={false}>{getCustomButtons()}</GroupIconButton>
                <PadMe />
                <GroupIconButton isCommonButtonStyles={false} orientation="vertical">
                    {getCustomButtons()}
                </GroupIconButton>
            </>,
        );

        cy.viewport(1366, 768);
        cy.matchImageSnapshot();
    });

    it('dense gap: default and pilled', () => {
        mount(
            <>
                <GroupIconButton gap="dense" shape="default">
                    {getButtons(3)}
                </GroupIconButton>
                <PadMe />
                <GroupIconButton gap="dense" shape="pilled">
                    {getButtons(3)}
                </GroupIconButton>
                <PadMe />
                <GroupIconButton gap="dense" shape="segmented">
                    {getButtons(3)}
                </GroupIconButton>
            </>,
        );

        cy.viewport(700, 700);
        cy.matchImageSnapshot();
    });
});
