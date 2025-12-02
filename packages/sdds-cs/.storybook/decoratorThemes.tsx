import React from 'react';
import type { Decorator } from '@storybook/react-vite';
import { createGlobalStyle } from 'styled-components';
import { sdds_cs__light } from '@salutejs/sdds-themes';

// import { ViewContainer } from '../src/components/ViewContainer/ViewContainer';

const DocumentStyle = createGlobalStyle`
    html:root {
        min-height: 100vh;
        background-color: var(--surface-solid-card);
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

export const SDDS_CS_LIGHT_THEME = 'sdds-srvc:light';
export const DEFAULT_MODE = 'default';
export const ON_LIGHT_MODE = 'onLight';

const themes = {
    [SDDS_CS_LIGHT_THEME]: createGlobalStyle(sdds_cs__light),
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
    // const viewContainerType = viewMap[context.globals.viewContainer];

    const Theme = themes[theme];

    return (
        <div>
            <Theme />
            <DocumentStyle />
            <Story {...context} />
        </div>
    );
};
