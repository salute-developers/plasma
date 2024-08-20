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
import type { Theme, TokenData } from '../types';
import { sectionToFormulaMap, getStateToken, getBrightnessTokens } from '../utils';

const getStateTokens = (
    section: string,
    name: string,
    mode: ThemeMode,
    tokens?: Record<ThemeMode, Record<string, TokenData<{}>>>,
) => {
    let defaultStateTokens = undefined;
    let onDarkStateTokens = undefined;
    let onLightStateTokens = undefined;
    let inverseStateTokens = undefined;
    const sectionName = sectionToFormulaMap[section];

    const isBrightness = getBrightnessTokens.find((n) => n === name);

    if (!sectionName || !tokens) {
        return { defaultStateTokens, onDarkStateTokens, onLightStateTokens, inverseStateTokens };
    }

    const getDefaultStateToken = getStateToken(sectionName, mode, tokens[mode].default);
    defaultStateTokens = {
        [`${name}Hover`]: getDefaultStateToken('hover'),
        [`${name}Active`]: getDefaultStateToken('active'),
        ...(isBrightness ? { [`${name}Brightness`]: getDefaultStateToken('brightness') } : {}),
    };

    const getOnDarkStateToken = getStateToken(sectionName, mode, tokens[mode].onDark);
    onDarkStateTokens = {
        [`${name}Hover`]: getOnDarkStateToken('hover'),
        [`${name}Active`]: getOnDarkStateToken('active'),
        ...(isBrightness ? { [`${name}Brightness`]: getOnDarkStateToken('brightness') } : {}),
    };

    const getOnLightStateToken = getStateToken(sectionName, mode, tokens[mode].onLight);
    onLightStateTokens = {
        [`${name}Hover`]: getOnLightStateToken('hover'),
        [`${name}Active`]: getOnLightStateToken('active'),
        ...(isBrightness ? { [`${name}Brightness`]: getOnLightStateToken('brightness') } : {}),
    };

    const getInverseStateToken = getStateToken(sectionName, mode, tokens[mode].inverse);
    inverseStateTokens = {
        [`${name}Hover`]: getInverseStateToken('hover'),
        [`${name}Active`]: getInverseStateToken('active'),
        ...(isBrightness ? { [`${name}Brightness`]: getInverseStateToken('brightness') } : {}),
    };

    return { defaultStateTokens, onDarkStateTokens, onLightStateTokens, inverseStateTokens };
};

const getTokensByGroups = <T extends string>(
    tokenGetters: Record<string, TokensGetterFn>,
    config: ThemeConfig,
    mode: ThemeMode,
    section: string,
): TokensByType<T> => {
    return Object.entries(tokenGetters).reduce(
        (tokensByGroup, [name, getter]) => {
            const tokens = getter(config);

            const { defaultStateTokens, onDarkStateTokens, onLightStateTokens, inverseStateTokens } = getStateTokens(
                section,
                name,
                mode,
                tokens,
            );

            return {
                default: {
                    ...tokensByGroup.default,
                    [name]: tokens[mode].default,
                    ...defaultStateTokens,
                },
                onDark: {
                    ...tokensByGroup.onDark,
                    [name]: tokens[mode].onDark,
                    ...onDarkStateTokens,
                },
                onLight: {
                    ...tokensByGroup.onLight,
                    [name]: tokens[mode].onLight,
                    ...onLightStateTokens,
                },
                inverse: {
                    ...tokensByGroup.inverse,
                    [name]: tokens[mode].inverse,
                    ...inverseStateTokens,
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
    section: string,
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
        text: getTokensByGroups<TextIconsTokenName>(textTokenGetters, config, mode, 'text'),
        surface: getTokensByGroups<ControlsSurfacesName>(surfaceTokenGetters, config, mode, 'surface'),
        background: getTokensBackgroundByGroups<BackgroundName>(backgroundTokenGetters, config, mode, 'background'),
        overlay: getTokensByGroups<OverlayName>(overlayTokenGetters, config, mode, 'overlay'),
        outline: getTokensByGroups<OutlineName>(outlineTokenGetters, config, mode, 'outline'),
    };
};

export const createTheme = (config: ThemeConfig): Theme => ({
    config,
    dark: getThemeModeTokens(config, 'dark'),
    light: getThemeModeTokens(config, 'light'),
});
