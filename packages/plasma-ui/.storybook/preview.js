import React from 'react';
import { createGlobalStyle } from 'styled-components';

import { addDecorator, addParameters } from '@storybook/react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';

import { text, background, gradient } from '@salutejs/plasma-tokens';
import { darkEva, darkJoy, darkSber, darkB2E, lightEva, lightJoy, lightSber, lightB2E } from '@salutejs/plasma-tokens';

import storybookTheme from './theme';

import { DeviceThemeProvider } from '../src/components/Device';

import { ToastProvider } from '../src/components/Toast';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

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

const withTheme = (Story, context) => {
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

const withToast = (Story) => (
    <ToastProvider>
        <Story />
    </ToastProvider>
);

addDecorator(withTheme);
addDecorator(withToast);

addParameters({
    viewport: {
        defaultViewport: 'SberBox',
        viewports: {
            '360': {
                name: '360',
                styles: {
                    width: '360px',
                    height: '640px',
                },
            },
            '720': {
                name: '720',
                styles: {
                    width: '720px',
                    height: '405px',
                },
            },
            '860': {
                name: '860',
                styles: {
                    width: '860px',
                    height: '640px',
                },
            },
            '1024': {
                name: '1024',
                styles: {
                    width: '1024px',
                    height: '768px',
                },
            },
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
        },
    },
});

export const globalTypes = {
    theme: {
        description: 'Global theme for components',
        defaultValue: 'darkSber',
        toolbar: {
            title: 'Theme',
            items: ['darkSber', 'darkJoy', 'darkEva', 'darkB2E', 'lightSber', 'lightJoy', 'lightEva', 'lightB2E'],
        },
    },
    typoSystem: {
        description: 'Typography system',
        defaultValue: 'legacy',
        toolbar: {
            title: 'Typo system',
            items: ['legacy', 'responsive'],
        },
    },
    deviceKind: {
        description: 'Device kind',
        defaultValue: 'sberBox',
        toolbar: {
            title: 'Device kind',
            items: ['mobile', 'sberBox', 'sberPortal'],
        },
    },
    lowPerformanceDevice: {
        description: 'Low performance device',
        defaultValue: 'no',
        toolbar: {
            title: 'Low performance',
            items: ['yes', 'no'],
        },
    },
    breakWord: {
        description: 'Break word for typography',
        defaultValue: 'yes',
        toolbar: {
            title: 'Break word',
            items: ['yes', 'no'],
        },
    },
};

export const parameters = {
    docs: {
        page: () => (
            <>
                <Title />
                <Subtitle />
                <Description />
                <Primary />
                <ArgsTable story={PRIMARY_STORY} />
            </>
        ),
        theme: storybookTheme,
        source: { type: 'code' },
    },
    options: {
        storySort: {
            method: 'alphabetical',
            order: ['About', 'Colors', 'Typography', 'Tokens', 'Layout', 'Content', 'Controls', 'Showcase'],
        },
    },
};
