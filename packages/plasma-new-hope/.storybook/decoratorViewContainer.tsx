import React from 'react';
import { StoryContext } from '@storybook/react-vite';

import plasmaB2CTheme from '@salutejs/plasma-themes/css/plasma_b2c.module.css';
import plasmaWebTheme from '@salutejs/plasma-themes/css/plasma_web.module.css';

import { ViewContainer } from '../src/examples/components/ViewContainer/ViewContainer';

type ThemeType = {
    light: string;
    dark: string;
};

type ViewType = {
    style?: object;
    view?: 'onDark' | 'onLight';
};

const viewMap: Record<string, ViewType> = {
    default: {
        style: {
            padding: '1rem',
        },
        view: undefined,
    },
    onDark: {
        style: {
            padding: '1rem',
            background: '#1a1a1a',
            color: 'white',
            margin: '3rem',
            'border-radius': '1rem',
        },
        view: 'onDark',
    },
    onLight: {
        style: {
            padding: '1rem',
            background: '#ededed',
            color: 'black',
            margin: '3rem',
            'border-radius': '1rem',
        },
        view: 'onLight',
    },
};

const themeMap: Record<string, ThemeType> = {
    typography: plasmaB2CTheme,
    b2c: plasmaB2CTheme,
    web: plasmaWebTheme,
};

export const withViewContainer = (Story: any, context: StoryContext) => {
    const themeType = context.globals.theme as keyof ThemeType;
    const themeName = 'b2c';
    const viewContainerType = viewMap[context.globals.viewContainer];

    const storybookRoot = document.getElementsByTagName('html')[0];
    const prevThemeType = themeType === 'dark' ? 'light' : 'dark';
    storybookRoot?.classList.remove(themeMap?.[themeName]?.[prevThemeType]);
    storybookRoot?.classList.add(themeMap?.[themeName]?.[themeType]);

    return (
        <div style={viewContainerType.style}>
            <ViewContainer id="theme-root" view={viewContainerType.view}>
                <Story {...context} />
            </ViewContainer>
        </div>
    );
};
