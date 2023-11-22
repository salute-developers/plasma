import React from 'react';
import { createGlobalStyle } from 'styled-components';
import type { Decorator } from '@storybook/react';

import { text, background, gradient } from '@salutejs/plasma-tokens';
import { darkEva, darkJoy, darkSber, darkB2E, lightEva, lightJoy, lightSber, lightB2E } from '@salutejs/plasma-tokens';

import { DeviceThemeProvider } from '../src';

const DocumentStyle = createGlobalStyle`
    /* stylelint-disable-next-line selector-nested-pattern */
    html:root {
        min-height: 100vh;
        color: ${text};
        background-color: ${background};
        background-image: ${gradient};
    }
`;

const themes = {
    darkSber: createGlobalStyle(darkSber),
    darkEva: createGlobalStyle(darkEva),
    darkJoy: createGlobalStyle(darkJoy),
    darkB2E: createGlobalStyle(darkB2E),
    lightSber: createGlobalStyle(lightSber),
    lightEva: createGlobalStyle(lightEva),
    lightJoy: createGlobalStyle(lightJoy),
    lightB2E: createGlobalStyle(lightB2E),
};

export const withTheme: Decorator = (Story, context) => {
    const Theme = themes[context.globals.theme];

    const deviceKind = new URL(document.location).searchParams.get('deviceKind') || context.globals.deviceKind;

    return (
        <DeviceThemeProvider
            detectDeviceCallback={() => deviceKind}
            responsiveTypo={context.globals.typoSystem === 'responsive'}
            lowPerformance={context.globals.lowPerformanceDevice === 'yes'}
            breakWord={context.globals.breakWord === 'yes'}
        >
            <Theme />
            <DocumentStyle />
            <Story {...context} />
        </DeviceThemeProvider>
    );
};
