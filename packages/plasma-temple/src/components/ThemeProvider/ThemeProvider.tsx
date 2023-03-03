import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { DeviceThemeProvider } from '@salutejs/plasma-ui';
import type { DeviceThemeProps } from '@salutejs/plasma-ui';
import {
    fonts,
    gradient,
    text,
    darkJoy,
    darkEva,
    darkSber,
    lightJoy,
    lightEva,
    lightSber,
} from '@salutejs/plasma-tokens';
import { CharacterId, ThemeColorName } from '@salutejs/client';

export interface ThemeProviderProps extends DeviceThemeProps {
    /** Персонаж */
    character?: CharacterId;
    /** Тема */
    themeColor?: ThemeColorName;
}

const DocumentStyles = createGlobalStyle`
    /* stylelint-disable selector-nested-pattern */
    :root {
        ${
            process.env.NODE_ENV === 'development' || (typeof window !== 'undefined' && window.Cypress)
                ? {
                      backgroundImage: gradient,
                      backgroundAttachment: 'fixed',
                  }
                : {
                      background: 'unset',
                  }
        }
    }

    html {
        height: 100vh;
        height: -webkit-fill-available;

        font-family: ${fonts.Medium};
    }

    body {
        margin: 0;

        color: ${text};
        min-height: 100vh;
        min-height: -webkit-fill-available;
    }
    /* stylelint-enable selector-nested-pattern */
`;

const charactersTheme: Record<ThemeColorName, Record<CharacterId, React.ComponentType>> = {
    dark: {
        eva: createGlobalStyle(darkEva),
        joy: createGlobalStyle(darkJoy),
        sber: createGlobalStyle(darkSber),
    },
    light: {
        eva: createGlobalStyle(lightEva),
        joy: createGlobalStyle(lightJoy),
        sber: createGlobalStyle(lightSber),
    },
};

/** Компонент, отвечающий за настройку темизации приложения */
export function ThemeProvider({
    children,
    character = 'sber',
    themeColor = 'dark',
    ...props
}: React.PropsWithChildren<ThemeProviderProps>) {
    const Theme = charactersTheme[themeColor][character];

    return (
        <DeviceThemeProvider {...props}>
            <Theme />
            <DocumentStyles />
            {children}
        </DeviceThemeProvider>
    );
}
