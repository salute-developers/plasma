import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { plasma } from '@salutejs/plasma-typo';
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { text } from '@salutejs/plasma-tokens-b2c';
import { b2c } from '@salutejs/plasma-tokens-b2c/typo';

import './index.css';

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
const ThemeStyle = createGlobalStyle(dark);
const TypoStyle = createGlobalStyle(plasma);
const OldTypoStyle = createGlobalStyle(b2c);

export const GlobalStyle = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
        <TypoStyle />
        <OldTypoStyle />
    </>
);
