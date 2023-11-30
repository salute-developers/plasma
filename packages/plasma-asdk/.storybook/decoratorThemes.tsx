import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import {
    stylesSalute__dark as stylesSaluteDark,
    stylesSalute__light as stylesSaluteLight,
} from '@salutejs/plasma-tokens';
import { link, linkHover, linkActive, surfaceSolid01 } from '@salutejs/plasma-tokens-b2b';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';
import { b2b as b2bTypo } from '@salutejs/plasma-tokens-b2b';

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

export const ASDK_LIGHT_THEME = 'asdk:light';
export const ASDK_DARK_THEME = 'asdk:dark';

const themes = {
    [ASDK_LIGHT_THEME]: createGlobalStyle(stylesSaluteLight),
    [ASDK_DARK_THEME]: createGlobalStyle(stylesSaluteDark),
};

export const withTheme: Decorator = (Story, context) => {
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
