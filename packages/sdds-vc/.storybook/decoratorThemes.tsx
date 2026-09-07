import React from 'react';
import type { Decorator } from '@storybook/react-vite';
import { createGlobalStyle } from 'styled-components';
import { sdds_sbcom__light, sdds_sbcom__dark } from '@salutejs-ds/sdds_sbcom';

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

export const SDDS_VC_LIGHT_THEME = 'sdds-vc:light';
export const SDDS_VC_DARK_THEME = 'sdds-vc:dark';

const themes = {
    [SDDS_VC_LIGHT_THEME]: createGlobalStyle(sdds_sbcom__light),
    [SDDS_VC_DARK_THEME]: createGlobalStyle(sdds_sbcom__dark),
};

export const withTheme: Decorator = (Story, context) => {
    const theme = context.globals.theme;

    const Theme = themes[theme];

    return (
        <>
            <Theme />
            <DocumentStyle />
            <Story {...context} />
        </>
    );
};
