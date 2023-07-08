import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma } from '@salutejs/plasma-typo';
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
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

const DarkThemeStyle = createGlobalStyle(dark);
const TypoStyle = createGlobalStyle(plasma);
const OldTypoStyle = createGlobalStyle(b2c);

export const GlobalStyle = () => {
    const theme: ThemeMode = 'dark';

    return (
        <>
            <DocumentStyle />
            {theme === 'dark' && <DarkThemeStyle />}
            <TypoStyle />
            <OldTypoStyle />
        </>
    );
};
