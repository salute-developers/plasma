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
    dataTokenGetters,
} from './themeTokenGetters';

import type {
    TextIconsTokenName,
    ControlsSurfacesName,
    BackgroundName,
    OverlayName,
    DataName,
} from './themeTokenGetters';
import type { Theme, TokenData } from '../types';
import { sectionToFormulaMap, getStateToken, getBrightnessTokens } from '../utils';

export const getStateTokens = (
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

    let newMode = mode;
    const getDefaultStateToken = getStateToken(sectionName, newMode, tokens[mode].default);
    defaultStateTokens = {
        [`${name}Hover`]: getDefaultStateToken('hover'),
        [`${name}Active`]: getDefaultStateToken('active'),
        ...(isBrightness ? { [`${name}Brightness`]: getDefaultStateToken('brightness') } : {}),
    };

    newMode = 'dark';
    const getOnDarkStateToken = getStateToken(sectionName, newMode, tokens[mode].onDark);
    onDarkStateTokens = {
        [`${name}Hover`]: getOnDarkStateToken('hover'),
        [`${name}Active`]: getOnDarkStateToken('active'),
        ...(isBrightness ? { [`${name}Brightness`]: getOnDarkStateToken('brightness') } : {}),
    };

    newMode = 'light';
    const getOnLightStateToken = getStateToken(sectionName, newMode, tokens[mode].onLight);
    onLightStateTokens = {
        [`${name}Hover`]: getOnLightStateToken('hover'),
        [`${name}Active`]: getOnLightStateToken('active'),
        ...(isBrightness ? { [`${name}Brightness`]: getOnLightStateToken('brightness') } : {}),
    };

    newMode = mode === 'light' ? 'dark' : 'light';
    const getInverseStateToken = getStateToken(sectionName, newMode, tokens[mode].inverse);
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
        data: getTokensByGroups<DataName>(dataTokenGetters, config, mode, 'data'),
    };
};

export const createTheme = (config: ThemeConfig): Theme => ({
    config,
    dark: getThemeModeTokens(config, 'dark'),
    light: getThemeModeTokens(config, 'light'),
});
