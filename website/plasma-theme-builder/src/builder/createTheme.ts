import type {
    OutlineName,
    ThemeConfig,
    ThemeMode,
    TokensBackgroundByType,
    TokensByType,
    TokensGetterFn,
} from '@salutejs/plasma-tokens-utils';

import {
    textTokenGetters,
    surfaceTokenGetters,
    backgroundTokenGetters,
    overlayTokenGetters,
    outlineTokenGetters,
} from './themeTokenGetters';

import type { TextIconsTokenName, ControlsSurfacesName, BackgroundName, OverlayName } from './themeTokenGetters';
import type { Theme } from '../types';

const getTokensByGroups = <T extends string>(
    tokenGetters: Record<string, TokensGetterFn>,
    config: ThemeConfig,
    mode: ThemeMode,
): TokensByType<T> => {
    return Object.entries(tokenGetters).reduce(
        (tokensByGroup, [name, getter]) => {
            const tokens = getter(config);

            return {
                default: {
                    ...tokensByGroup.default,
                    [name]: tokens[mode].default,
                },
                onDark: {
                    ...tokensByGroup.onDark,
                    [name]: tokens[mode].onDark,
                },
                onLight: {
                    ...tokensByGroup.onLight,
                    [name]: tokens[mode].onLight,
                },
                inverse: {
                    ...tokensByGroup.inverse,
                    [name]: tokens[mode].inverse,
                },
            };
        },
        {
            default: {},
            onDark: {},
            onLight: {},
            inverse: {},
        } as TokensByType<T>,
    );
};

const getTokensBackgroundByGroups = <T extends string>(
    tokenGetters: Record<string, TokensGetterFn>,
    config: ThemeConfig,
    mode: ThemeMode,
): TokensBackgroundByType<T> => {
    return Object.entries(tokenGetters).reduce(
        (tokensByGroup, [name, getter]) => {
            const tokens = getter(config);

            return {
                default: {
                    ...tokensByGroup.default,
                    [name]: tokens[mode].default,
                },
                dark: {
                    ...tokensByGroup.dark,
                    [name]: tokens[mode].dark,
                },
                light: {
                    ...tokensByGroup.light,
                    [name]: tokens[mode].light,
                },
                inverse: {
                    ...tokensByGroup.inverse,
                    [name]: tokens[mode].inverse,
                },
            };
        },
        {
            default: {},
            dark: {},
            light: {},
            inverse: {},
        } as TokensBackgroundByType<T>,
    );
};

const getThemeModeTokens = <T extends ThemeMode>(config: ThemeConfig, mode: T): Theme[T] => {
    return {
        text: getTokensByGroups<TextIconsTokenName>(textTokenGetters, config, mode),
        surface: getTokensByGroups<ControlsSurfacesName>(surfaceTokenGetters, config, mode),
        background: getTokensBackgroundByGroups<BackgroundName>(backgroundTokenGetters, config, mode),
        overlay: getTokensByGroups<OverlayName>(overlayTokenGetters, config, mode),
        outline: getTokensByGroups<OutlineName>(outlineTokenGetters, config, mode),
    };
};

export const createTheme = (config: ThemeConfig): Theme => ({
    config,
    dark: getThemeModeTokens(config, 'dark'),
    light: getThemeModeTokens(config, 'light'),
});
