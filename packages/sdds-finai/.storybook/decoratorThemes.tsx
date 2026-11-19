import React from 'react';
import type { Decorator } from '@storybook/react-vite';
import { createGlobalStyle } from 'styled-components';

import { ViewContainer } from '../src/components/ViewContainer/ViewContainer';

import { getTheme } from './themes';

const ThemeStyle = createGlobalStyle<{ $theme: TemplateStringsArray }>`
    ${({ $theme }) => $theme}
`;

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

export const DEFAULT_MODE = 'default';
export const ON_DARK_MODE = 'onDark';
export const ON_LIGHT_MODE = 'onLight';

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
    const theme = getTheme(context.globals.theme, context.globals.tenant);
    const viewContainerType = viewMap[context.globals.viewContainer];

    return (
        <div style={viewContainerType.style}>
            <ViewContainer view={viewContainerType.view}>
                <ThemeStyle $theme={theme} />
                <DocumentStyle />
                <Story {...context} />
            </ViewContainer>
        </div>
    );
};
