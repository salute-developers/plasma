import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { sdds_serv__light, sdds_serv__dark } from '@salutejs/sdds-themes';

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

export const SDDS_SERV_LIGHT_THEME = 'sdds-srvc:light';
export const SDDS_SERV_DARK_THEME = 'sdds-srvc:dark';

const themes = {
    [SDDS_SERV_LIGHT_THEME]: createGlobalStyle(sdds_serv__light),
    [SDDS_SERV_DARK_THEME]: createGlobalStyle(sdds_serv__dark),
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
