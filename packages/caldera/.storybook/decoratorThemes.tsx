import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { caldera__light, caldera__dark } from '@salutejs/caldera-online-themes';

const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        background-color: var(--surface-solid-primary);
    }

    a {
        color: var(--text-primary);
        text-decoration: underline;

        &:hover {
            color: lighten(var(--text-primary), 30%);
        }

        &:active {
            color: darken(var(--text-primary), 30%);
        }
    }
`;
/* stylelint-enable */

export const CALDERA_LIGHT_THEME = 'caldera:light';
export const CALDERA_DARK_THEME = 'caldera:dark';

const themes = {
    [CALDERA_LIGHT_THEME]: createGlobalStyle(caldera__light),
    [CALDERA_DARK_THEME]: createGlobalStyle(caldera__dark),
};

export const withTheme: Decorator = (Story, context) => {
    let theme = context.globals.theme;

    const Theme = themes[theme];

    return (
        <>
            <Theme />
            <DocumentStyle />
            <Story {...context} />
        </>
    );
};
