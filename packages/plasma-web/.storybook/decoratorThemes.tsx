import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import {
    light as b2bLight,
    dark as b2bDark,
    b2b as b2bTypo,
    link,
    linkHover,
    linkActive,
    surfaceSolid01,
} from '@salutejs/plasma-tokens-b2b';
import { light as b2cLight, dark as b2cDark } from '@salutejs/plasma-tokens-b2c';
import { light as legacyLight, dark as legacyDark } from '@salutejs/plasma-tokens-web';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

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

export const themesList = [
    B2B_LIGHT_THEME,
    B2B_DARK_THEME,
    B2C_LIGHT_THEME,
    B2C_DARK_THEME,
    LEGACY_LIGHT_THEME,
    LEGACY_DARK_THEME,
];

export const withTheme: Decorator = (Story, context) => {
    let theme = context.globals.theme;

    if (theme === 'light') {
        theme = LEGACY_LIGHT_THEME;
    } else if (theme === 'dark') {
        theme = LEGACY_DARK_THEME;
    }

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
