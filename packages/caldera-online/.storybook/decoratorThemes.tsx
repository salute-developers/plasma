import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { caldera_online__light, caldera_online__dark } from '@salutejs/caldera-online-themes';

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

export const CALDERA_ONLINE_LIGHT_THEME = 'caldera:light';
export const CALDERA_ONLINE_DARK_THEME = 'caldera:dark';

const themes = {
    [CALDERA_ONLINE_LIGHT_THEME]: createGlobalStyle(caldera_online__light),
    [CALDERA_ONLINE_DARK_THEME]: createGlobalStyle(caldera_online__dark),
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
