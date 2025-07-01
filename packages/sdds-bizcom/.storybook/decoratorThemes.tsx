import React from 'react';
import type { Decorator } from '@storybook/react';
import { createGlobalStyle } from 'styled-components';
import {
    sdds_bizcom__light,
    sdds_bizcom__dark,
    sdds_procom__light,
    sdds_procom__dark,
    sdds_bcp__light,
    sdds_bcp__dark,
} from '@salutejs/sdds-themes';

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

export const SDDS_BIZCOM_LIGHT_THEME = 'sdds-bizcom:light';
export const SDDS_BIZCOM_DARK_THEME = 'sdds-bizcom:dark';
export const SDDS_PROCOM_LIGHT_THEME = 'sdds-procom:light';
export const SDDS_PROCOM_DARK_THEME = 'sdds-procom:dark';
export const SDDS_BCP_LIGHT_THEME = 'sdds-bcp:light';
export const SDDS_BCP_DARK_THEME = 'sdds-bcp:dark';
export const DEFAULT_MODE = 'default';
export const ON_DARK_MODE = 'onDark';
export const ON_LIGHT_MODE = 'onLight';

const themes = {
    [SDDS_BIZCOM_LIGHT_THEME]: createGlobalStyle(sdds_bizcom__light),
    [SDDS_BIZCOM_DARK_THEME]: createGlobalStyle(sdds_bizcom__dark),
    [SDDS_PROCOM_LIGHT_THEME]: createGlobalStyle(sdds_procom__light),
    [SDDS_PROCOM_DARK_THEME]: createGlobalStyle(sdds_procom__dark),
    [SDDS_BCP_LIGHT_THEME]: createGlobalStyle(sdds_bcp__light),
    [SDDS_BCP_DARK_THEME]: createGlobalStyle(sdds_bcp__dark),
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
