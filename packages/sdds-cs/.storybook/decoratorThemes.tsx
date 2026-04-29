import React from 'react';
import type { Decorator } from '@storybook/react-vite';
import { Global, css } from '@emotion/react';
import { sdds_cs__light } from '@salutejs/sdds-themes';

import { ViewContainer } from '../src/components/ViewContainer/ViewContainer';

const documentCss = css`
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

export const SDDS_CS_LIGHT_THEME = 'theme:sdds_cs:light';
export const DEFAULT_MODE = 'default';
export const ON_LIGHT_MODE = 'onLight';
export const ON_DARK_MODE = 'onDark';

const themes = {
    [SDDS_CS_LIGHT_THEME]: css(sdds_cs__light),
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

    return (
        <div style={viewContainerType.style}>
            <ViewContainer view={viewContainerType.view}>
                <Global styles={themes[theme]} />
                <Global styles={documentCss} />

                <Story {...context} />
            </ViewContainer>
        </div>
    );
};
