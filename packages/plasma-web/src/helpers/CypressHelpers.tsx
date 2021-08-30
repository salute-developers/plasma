import React, { FC } from 'react';
import { createGlobalStyle } from 'styled-components';
import { web } from '@salutejs/plasma-tokens-web/typo';
import { light } from '@salutejs/plasma-tokens-web/themes';

const TypoThemeStyle = createGlobalStyle(web);
const ColorThemeStyle = createGlobalStyle(light);

export const CypressTestDecorator: FC = ({ children }) => (
    <>
        <TypoThemeStyle />
        <ColorThemeStyle />
        {children}
    </>
);
