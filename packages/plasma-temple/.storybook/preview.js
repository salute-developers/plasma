import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { darkSber, darkEva, darkJoy } from '@salutejs/plasma-tokens';
import { DeviceThemeProvider } from '@salutejs/plasma-ui';
import '@salutejs/spatial-navigation';

import { withAppState } from './decorators/withAppState';
import { Layout } from '../src/components/Layout/Layout';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

const themes = {
    darkSber: createGlobalStyle(darkSber),
    darkEva: createGlobalStyle(darkEva),
    darkJoy: createGlobalStyle(darkJoy),
};

const withGlobalStyles = (Story, context) => {
    const Theme = themes[context.globals.theme];
    const typoSize = context.globals.typoSize;

    return (
        <DeviceThemeProvider detectDeviceCallback={() => typoSize}>
            <Theme />
            <Layout ignoreInsets={context.parameters?.ignoreInsets ?? false}>
                <Story {...context} />
            </Layout>
        </DeviceThemeProvider>
    );
};

addDecorator(withGlobalStyles);
addDecorator(withAppState);

// TODO: решить проблему с реестром компонент и компонент зависящих от UA браузера

export const globalTypes = {
    theme: {
        description: 'Global theme for components',
        defaultValue: 'darkSber',
        toolbar: {
            title: 'Theme',
            items: ['darkSber', 'darkJoy', 'darkEva'],
        },
    },
    typoSize: {
        description: 'Global typography size for components',
        defaultValue: 'mobile',
        toolbar: {
            title: 'Device kind',
            items: ['mobile', 'sberBox', 'sberPortal'],
        },
    },
};

addParameters({
    viewport: {
        defaultViewport: 'Mobile',
        viewports: {
            SberPortal: {
                name: 'SberPortal',
                styles: {
                    width: '1280px',
                    height: '720px',
                },
            },
            SberBox: {
                name: 'SberBox',
                styles: {
                    width: '1920px',
                    height: '1080px',
                },
            },
            Mobile: {
                name: 'Mobile',
                styles: {
                    width: '375px',
                    height: '812px',
                },
            },
        },
    },
});
