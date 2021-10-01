import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
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

export const Padme = styled.div`
    padding: 5px;
`;

export const SpaceMe = styled.span`
    padding: 5px;
`;
