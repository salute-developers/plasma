import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests, PadMe } from '@salutejs/plasma-cy-utils';
// @ts-ignore
import { IconPlasma } from 'override/_Icon';

import type { ColorSwatchProps } from './ColorSwatch.types';

const componentExists = hasComponent('ColorSwatch');
const describeFn = getDescribeFN('ColorSwatch');

const componentProps = {
    color: '#ae3ec9',
};

getBaseVisualTests({
    component: 'ColorSwatch',
    componentProps,
    configPropsForMatrix: ['view'],
});

describeFn('ColorSwatch', () => {
    const ColorSwatch = componentExists ? getComponent<ColorSwatchProps>('ColorSwatch') : () => null;

    it('colors', () => {
        mount(
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <ColorSwatch color="#ae3ec9" />
                <ColorSwatch color="red" />
                <ColorSwatch color="var(--text-accent)" />
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('alpha overlay', () => {
        mount(
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <ColorSwatch color="transparent" />
                <ColorSwatch color="rgba(234, 22, 174, 0.5)" />
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('withShadow', () => {
        mount(
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <ColorSwatch color="#ffffff" withShadow />
                <PadMe />
                <ColorSwatch color="#ffffff" withShadow={false} />
            </div>,
        );
        cy.matchImageSnapshot();
    });

    it('children', () => {
        mount(
            <ColorSwatch color="#ae3ec9" style={{ color: '#ffffff' }}>
                <IconPlasma size="s" color="inherit" />
            </ColorSwatch>,
        );
        cy.matchImageSnapshot();
    });

    it('as button', () => {
        mount(
            <ColorSwatch as="button" color="#3ce73c" style={{ color: '#ffffff', cursor: 'pointer' }}>
                <IconPlasma size="s" color="inherit" />
            </ColorSwatch>,
        );
        cy.matchImageSnapshot();
    });
});
