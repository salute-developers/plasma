import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { classrooms__light, classrooms__dark } from '@salutejs/plasma-tokens';
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

export const CLASSROOMS_LIGHT_THEME = 'classrooms:light';
export const CLASSROOMS_DARK_THEME = 'classrooms:dark';

const themes = {
    [CLASSROOMS_LIGHT_THEME]: createGlobalStyle(classrooms__light),
    [CLASSROOMS_DARK_THEME]: createGlobalStyle(classrooms__dark),
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
