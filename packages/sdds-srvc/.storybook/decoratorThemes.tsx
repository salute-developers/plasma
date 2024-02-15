import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { sdds_srvc__light, sdds_srvc__dark } from '@salutejs/plasma-tokens';
import { standard as standardTypo, compatible as compatibleTypo } from '@salutejs/plasma-typo';

/* stylelint-disable */
const TypoStyle = createGlobalStyle(standardTypo);
const CompatibleTypoStyle = createGlobalStyle(compatibleTypo);

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

export const SDDS_SRVC_LIGHT_THEME = 'sdds-srvc:light';
export const SDDS_SRVC_DARK_THEME = 'sdds-srvc:dark';

const themes = {
    [SDDS_SRVC_LIGHT_THEME]: createGlobalStyle(sdds_srvc__light),
    [SDDS_SRVC_DARK_THEME]: createGlobalStyle(sdds_srvc__dark),
};

export const withTheme: Decorator = (Story, context) => {
    let theme = context.globals.theme;

    const Theme = themes[theme];

    return (
        <>
            <TypoStyle />
            <CompatibleTypoStyle />
            <Theme />
            <DocumentStyle />
            <Story {...context} />
        </>
    );
};
