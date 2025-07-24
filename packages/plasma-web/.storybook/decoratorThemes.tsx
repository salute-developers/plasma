import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { b2b as b2bTypo, link, linkHover, linkActive } from '@salutejs/plasma-tokens-b2b';
import { plasma_web__light as b2bLight, plasma_web__dark as b2bDark } from '@salutejs/plasma-themes';
import { plasma_b2c__light as b2cLight, plasma_b2c__dark as b2cDark } from '@salutejs/plasma-themes';
import { light as legacyLight, dark as legacyDark } from '@salutejs/plasma-tokens-web';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

import { ViewContainer } from '../src/components/ViewContainer/ViewContainer';

/* stylelint-disable */
const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        background-color: var(--background-primary);
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

type ViewType = {
    style?: object;
    view?: 'onDark' | 'onLight';
};

export const DEFAULT_MODE = 'default';
export const ON_DARK_MODE = 'onDark';
export const ON_LIGHT_MODE = 'onLight';

const viewMap: Record<string, ViewType> = {
    default: {
        style: undefined,
        view: undefined,
    },
    onDark: {
        style: {
            background: '#1a1a1a',
            color: 'white',
            margin: '3rem',
            'border-radius': '1rem',
        },
        view: 'onDark',
    },
    onLight: {
        style: {
            background: '#ededed',
            color: 'black',
            margin: '3rem',
            'border-radius': '1rem',
        },
        view: 'onLight',
    },
};

export const withTheme: Decorator = (Story, context) => {
    let theme = context.globals.theme;

    if (theme === 'light') {
        theme = LEGACY_LIGHT_THEME;
    } else if (theme === 'dark') {
        theme = LEGACY_DARK_THEME;
    }

    const Theme = themes[theme];
    const viewContainerType = viewMap[context.globals.viewContainer];

    return (
        <div style={viewContainerType.style}>
            <ViewContainer view={viewContainerType.view}>
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
            </ViewContainer>
        </div>
    );
};
