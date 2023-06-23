import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma } from '@salutejs/plasma-typo';
import { light, dark } from '@salutejs/plasma-tokens-b2c/themes';
import { text } from '@salutejs/plasma-tokens-b2c';
import { b2c } from '@salutejs/plasma-tokens-b2c/typo';
import type { ThemeMode } from '@salutejs/plasma-tokens-utils';

import { SBSansTextMono } from './components/mixins';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
    }

    body {
        margin: 0;
    }

    /* stylelint-disable-next-line selector-max-universal */
    * {
        ${SBSansTextMono};
    }
`;

const LightThemeStyle = createGlobalStyle(light);
const DarkThemeStyle = createGlobalStyle(dark);
const TypoStyle = createGlobalStyle(plasma);
const OldTypoStyle = createGlobalStyle(b2c);

const matchMediaWithColorScheme = window.matchMedia('(prefers-color-scheme: dark');

const getSystemTheme = () => (matchMediaWithColorScheme.matches ? 'dark' : 'light');

export const GlobalStyle = () => {
    const [theme, setTheme] = useState<ThemeMode>(getSystemTheme());

    matchMediaWithColorScheme.addEventListener('change', ({ matches }) => {
        setTheme(matches ? 'dark' : 'light');
    });

    return (
        <>
            <DocumentStyle />
            {theme === 'dark' && <DarkThemeStyle />}
            {theme === 'light' && <LightThemeStyle />}
            <TypoStyle />
            <OldTypoStyle />
        </>
    );
};
