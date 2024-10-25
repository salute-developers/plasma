import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import { sdds_finportal__light, sdds_finportal__dark } from '@salutejs/sdds-themes';

import { ViewContainer } from '../src/components/ViewContainer/ViewContainer';

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

export const SDDS_FINPORTAL_LIGHT_THEME = 'sdds-finportal:light';
export const SDDS_FINPORTAL_DARK_THEME = 'sdds-finportal:dark';
export const DEFAULT_MODE = 'default';
export const ON_DARK_MODE = 'onDark';
export const ON_LIGHT_MODE = 'onLight';

const themes = {
    [SDDS_FINPORTAL_LIGHT_THEME]: createGlobalStyle(sdds_finportal__light),
    [SDDS_FINPORTAL_DARK_THEME]: createGlobalStyle(sdds_finportal__dark),
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
                <Theme />
                <DocumentStyle />
                <Story {...context} />
            </ViewContainer>
        </div>
    );
};
