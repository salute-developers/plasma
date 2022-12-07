import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { standard } from '@salutejs/plasma-typo';
import { dark } from '@salutejs/plasma-tokens-b2c/themes';
import { text } from '@salutejs/plasma-tokens-b2c';
import { b2c } from '@salutejs/plasma-tokens-b2c/typo';

import './index.css';

const DocumentStyle = createGlobalStyle`
    html {
        color: ${text};
        font-family: 'SB Sans Text', Helvetica, Arial, sans-serif;
    }
`;
const ThemeStyle = createGlobalStyle(dark);
const TypoStyle = createGlobalStyle(standard);
const OldTypoStyle = createGlobalStyle(b2c);

export const GlobalStyle = () => (
    <>
        <DocumentStyle />
        <ThemeStyle />
        <TypoStyle />
        <OldTypoStyle />
    </>
);
