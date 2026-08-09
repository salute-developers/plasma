import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { IconButtonProps } from './IconButton.types';

const componentExists = hasComponent('IconButton');
const describeFn = getDescribeFN('IconButton');

const Icon = <IconPlasma color="inherit" />;

getBaseVisualTests({
    component: 'IconButton',
    componentProps: {},
    children: Icon,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('IconButton', () => {
    const IconButton = componentExists ? getComponent<IconButtonProps>('IconButton') : () => null;

    it('with loader', () => {
        mount(<IconButton isLoading>{Icon}</IconButton>);

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<IconButton disabled>{Icon}</IconButton>);
        cy.matchImageSnapshot();
    });

    it('focused', () => {
        mount(<IconButton focused>{Icon}</IconButton>);

        cy.matchImageSnapshot();
    });

    it('pin', () => {
        mount(
            <>
                <IconButton pin="square-square">{Icon}</IconButton>
                <PadMe />
                <IconButton pin="square-clear">{Icon}</IconButton>
                <PadMe />
                <IconButton pin="clear-square">{Icon}</IconButton>
                <PadMe />
                <IconButton pin="clear-clear">{Icon}</IconButton>
                <PadMe />
                <IconButton pin="clear-circle">{Icon}</IconButton>
                <PadMe />
                <IconButton pin="circle-clear">{Icon}</IconButton>
                <PadMe />
                <IconButton pin="circle-circle">{Icon}</IconButton>
            </>,
        );

        cy.matchImageSnapshot();
    });
});
