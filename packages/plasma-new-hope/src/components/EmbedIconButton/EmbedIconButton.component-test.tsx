import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { EmbedIconButtonProps } from './EmbedIconButton.types';

const componentExists = hasComponent('EmbedIconButton');
const describeFn = getDescribeFN('EmbedIconButton');

const Icon = <IconPlasma color="inherit" />;

getBaseVisualTests({
    component: 'EmbedIconButton',
    componentProps: {},
    children: Icon,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('EmbedIconButton', () => {
    const EmbedIconButton = componentExists ? getComponent<EmbedIconButtonProps>('EmbedIconButton') : () => null;

    it('with loader', () => {
        mount(<EmbedIconButton isLoading>{Icon}</EmbedIconButton>);

        cy.matchImageSnapshot();
    });

    it('disabled', () => {
        mount(<EmbedIconButton disabled>{Icon}</EmbedIconButton>);
        cy.matchImageSnapshot();
    });

    it('focused', () => {
        mount(<EmbedIconButton focused>{Icon}</EmbedIconButton>);

        cy.matchImageSnapshot();
    });
});
