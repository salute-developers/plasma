import React from 'react';
import { StoryContext } from '@storybook/react';

import plasmaB2CTheme from '@salutejs/plasma-themes/css/plasma_b2c.module.css';
import plasmaWebTheme from '@salutejs/plasma-themes/css/plasma_web.module.css';

import { ViewContainer } from '../src/examples/plasma_b2c/components/ViewContainer/ViewContainer';

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

export const withViewContainer = (Story, context: StoryContext) => {
    const themeType = context.globals.theme as keyof ThemeType;
    const themeName = context.title.split('/')[0];
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
