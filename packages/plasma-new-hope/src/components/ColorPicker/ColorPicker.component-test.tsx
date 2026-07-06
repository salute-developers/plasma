import React from 'react';
import { mount, getComponent, getDescribeFN, hasComponent, getBaseVisualTests } from '@salutejs/plasma-cy-utils';

import type { ColorPickerProps } from './ColorPicker.types';

const componentExists = hasComponent('ColorPicker');
const describeFn = getDescribeFN('ColorPicker');

const locales = {
    CONTROLS: {
        SOLID: 'Сплошной',
        GRADIENT: 'Градиент',
    },
};

const presets = ['#262626', '#FEB3BB', '#94FF94', '#85CEFF', '#EAD0FB', '#FF293E', '#15B015', '#118CDF'];

const componentProps = {
    value: '#008cff',
    width: 256,
    height: 256,
    locales,
    presets,
};

getBaseVisualTests({
    component: 'ColorPicker',
    componentProps,
    configPropsForMatrix: ['view', 'size'],
});

describeFn('ColorPicker', () => {
    const ColorPicker = componentExists ? getComponent<ColorPickerProps>('ColorPicker') : () => null;

    it('solid value', () => {
        cy.viewport(500, 750);

        mount(
            <ColorPicker
                value="rgba(255, 178, 28, 0.4)"
                width={256}
                height={256}
                locales={locales}
                presets={presets}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('gradient value', () => {
        cy.viewport(500, 750);

        mount(
            <ColorPicker
                value="linear-gradient(45deg, #1A9E32FF 0%, #04C6C9FF 100%)"
                width={256}
                height={256}
                locales={locales}
                presets={presets}
            />,
        );
        cy.matchImageSnapshot();
    });

    it('hide presets, inputs, opacity', () => {
        mount(
            <ColorPicker
                value="#008cff"
                width={256}
                height={256}
                locales={locales}
                hidePresets
                hideInputs
                hideOpacity
            />,
        );
        cy.matchImageSnapshot();
    });

    it('only picker square with hue', () => {
        mount(
            <ColorPicker
                value="#008cff"
                width={256}
                height={256}
                locales={locales}
                hideControls
                hideInputs
                hideOpacity
                hidePresets
            />,
        );
        cy.matchImageSnapshot();
    });
});
