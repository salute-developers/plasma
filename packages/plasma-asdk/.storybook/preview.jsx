import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { addDecorator, addParameters } from '@storybook/react';
import { Title, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { link, linkHover, linkActive, surfaceSolid01 } from '@salutejs/plasma-tokens-b2b';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';
import { b2b as b2bTypo } from '@salutejs/plasma-tokens-b2b';
import {
    stylesSalute__light as stylesSaluteLight,
    stylesSalute__dark as stylesSaluteDark,
} from '@salutejs/plasma-tokens';
import { ToastProvider } from '@salutejs/plasma-core';

import storybookTheme from './theme';

// Workaround: to make VoiceOver read russian text properly
if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('lang', 'ru');
}

/* stylelint-disable */

const OldTypo = createGlobalStyle(b2bTypo);
const TypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);

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

const ASDK_LIGHT_THEME = 'asdk:light';
const ASDK_DARK_THEME = 'asdk:dark';

const themes = {
    [ASDK_LIGHT_THEME]: createGlobalStyle(stylesSaluteLight),
    [ASDK_DARK_THEME]: createGlobalStyle(stylesSaluteDark),
};

const withTheme = (Story, context) => {
    let theme = context.globals.theme;

    const Theme = themes[theme];

    return (
        <>
            {context.globals.typoVersion === 'standard' ? (
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
        defaultValue: ASDK_LIGHT_THEME,
        toolbar: {
            title: 'Theme',
            items: [ASDK_LIGHT_THEME, ASDK_DARK_THEME],
        },
    },
    typoVersion: {
        description: 'Global typography version for components',
        defaultValue: 'standard',
        toolbar: {
            title: 'Typography version',
            items: ['standard', 'old'],
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
            order: ['About', 'Intro', 'Colors', 'Typography', 'Controls', 'Hooks'],
        },
    },
};
