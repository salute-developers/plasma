import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { b2c } from '@salutejs/plasma-tokens-b2c';
import { plasma_b2c__light, plasma_b2c__dark } from '@salutejs/plasma-themes';
import { link, linkHover, linkActive } from '@salutejs/plasma-tokens-web';
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

export const SDDS_CLFD_AUTO_LIGHT_THEME = 'light';
export const SDDS_CLFD_AUTO_DARK_THEME = 'dark';
export const DEFAULT_MODE = 'default';
export const ON_DARK_MODE = 'onDark';
export const ON_LIGHT_MODE = 'onLight';

const OldTypo = createGlobalStyle(b2c);
const TypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);

const themes = {
    [SDDS_CLFD_AUTO_LIGHT_THEME]: createGlobalStyle(plasma_b2c__dark),
    [SDDS_CLFD_AUTO_DARK_THEME]: createGlobalStyle(plasma_b2c__light),
};

type ViewType = {
    style?: object;
    view?: 'onDark' | 'onLight';
};

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
    const theme = context.globals.theme;
    const viewContainerType = viewMap[context.globals.viewContainer];

    const Theme = themes[theme];

    return (
        <div style={viewContainerType.style}>
            <ViewContainer view={viewContainerType.view}>
                {context.globals.typoVersion === 'standard' ? (
                    <>
                        <TypoStyle breakWord={context.globals.breakWord === 'yes'} />
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
