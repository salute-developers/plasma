import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { link, linkHover, linkActive, surfaceSolid01 } from '@salutejs/plasma-tokens-b2b';
import { light as b2bLight, dark as b2bDark } from '@salutejs/plasma-tokens-b2b/themes';
import { light as b2cLight, dark as b2cDark } from '@salutejs/plasma-tokens-b2c/themes';
import { light as legacyLight, dark as legacyDark } from '@salutejs/plasma-tokens-web/themes';
import { b2b as b2bTypo } from '@salutejs/plasma-tokens-b2b/typo';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

import { ToastProvider } from '@salutejs/plasma-core';

import storybookTheme from './theme';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

/* stylelint-disable */
const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        background-color: ${surfaceSolid01};
    }
    a {
        color: ${link};
        text-decoration: underline;

        &:hover {
            color: ${linkHover};
        }
        &:active {
            color: ${linkActive};
        }
    }
`;
/* stylelint-enable */

const OldTypo = createGlobalStyle(b2bTypo);
const TypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);

const B2B_LIGHT_THEME = 'b2b:light';
const B2B_DARK_THEME = 'b2b:dark';
const B2C_LIGHT_THEME = 'b2c:light';
const B2C_DARK_THEME = 'b2c:dark';
const LEGACY_LIGHT_THEME = 'light (legacy)';
const LEGACY_DARK_THEME = 'dark (legacy)';

const themes = {
    [B2B_LIGHT_THEME]: createGlobalStyle(b2bLight),
    [B2B_DARK_THEME]: createGlobalStyle(b2bDark),
    [B2C_LIGHT_THEME]: createGlobalStyle(b2cLight),
    [B2C_DARK_THEME]: createGlobalStyle(b2cDark),
    [LEGACY_LIGHT_THEME]: createGlobalStyle(legacyLight),
    [LEGACY_DARK_THEME]: createGlobalStyle(legacyDark),
};

const withTheme = (Story, context) => {
    let typoSystem = 'responsive';
    let theme = context.globals.theme;

    if (theme === 'light') {
        theme = LEGACY_LIGHT_THEME;
    } else if (theme === 'dark') {
        theme = LEGACY_DARK_THEME;
    }

    if (theme === LEGACY_LIGHT_THEME || theme === LEGACY_DARK_THEME) {
        typoSystem = 'leagacy';
    }

    const Theme = themes[theme];

    return (
        <>
            {typoSystem === 'responsive' ? (
                <>
                    <TypoStyle />
                    <CompatibleTypoStyle />
                </>
            ) : (
                <OldTypo />
            )}
            <Theme />
            <DocumentStyle />
            <Story {...context} />
        </>
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
        viewports: {
            '375': {
                name: '375x812',
                styles: {
                    width: '375px',
                    height: '812px',
                },
            },
            '768': {
                name: '768x576',
                styles: {
                    width: '768px',
                    height: '576px',
                },
            },
            '1024': {
                name: '1024x768',
                styles: {
                    width: '1024px',
                    height: '768px',
                },
            },
            '1920': {
                name: '1920x1080',
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
        defaultValue: 'b2b:light',
        toolbar: {
            title: 'Theme',
            items: [
                B2B_LIGHT_THEME,
                B2B_DARK_THEME,
                B2C_LIGHT_THEME,
                B2C_DARK_THEME,
                LEGACY_LIGHT_THEME,
                LEGACY_DARK_THEME,
            ],
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
            order: ['About', 'Intro', 'Colors', 'Typography', 'Controls'],
        },
    },
};
