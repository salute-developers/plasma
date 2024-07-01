import React from 'react';
import type { Decorator } from '@storybook/react';
import { Global, css } from '@emotion/react';
import { caldera_online__light, caldera_online__dark } from '@salutejs/caldera-online-themes';

const documentStyle = css`
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
    [CALDERA_ONLINE_LIGHT_THEME]: css(caldera_online__light),
    [CALDERA_ONLINE_DARK_THEME]: css(caldera_online__dark),
};

export const withTheme: Decorator = (Story, context) => {
    let theme = context.globals.theme;

    const calderaTheme = themes[theme];

    return (
        <>
            <Global styles={calderaTheme} />
            <Global styles={documentStyle} />
            <Story {...context} />
        </>
    );
};
