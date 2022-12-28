import { TokenData as TokenDataBase } from '@salutejs/plasma-tokens-utils';
import type { TextIconsTokenName, ControlsSurfacesName, BackgroundName, OverlayName } from './themeTokenGetters';
import { baseColors } from './constants';

export enum TokenType {
    default = 'default',
    inverse = 'inverse',
}

export enum TokenGenericType {
    onDark = 'onDark',
    onLight = 'onLight',
}

export enum TokenBackgroundType {
    dark = 'dark',
    light = 'light',
}

export enum Grayscale {
    coolGray = 'coolGray',
    gray = 'gray',
}

export interface ThemeConfig {
    name: string;
    accentColor: {
        light: string;
        dark: string;
    };
    grayscale: {
        light: Grayscale;
        dark: Grayscale;
    };
    opacity: {
        textIcons: boolean;
        surfaces: boolean;
    };
}

export type TokenData<T = {}> = TokenDataBase<T> & {
    enabled?: boolean;
};

export type TokenGeneralColorByType<T extends string = string> = Record<
    TokenType | TokenGenericType | TokenBackgroundType | string,
    Record<T, TokenData<string>>
>;

export type TokenBaseColorByType<T extends string = string> = Record<'default', Record<T, TokenData<string>>>;

export type TokensByType<T extends string = string> = Record<
    TokenType | TokenGenericType,
    Record<T, TokenData<string>>
>;

export type TokensBackgroundByType<T extends string = string> = Record<
    TokenType | TokenBackgroundType,
    Record<T, TokenData<string>>
>;

export type TokensName =
    | TextIconsTokenName
    | ControlsSurfacesName
    | BackgroundName
    | OverlayName
    | keyof typeof baseColors
    | string;

export type ThemeMode = 'dark' | 'light';

export type TokensGetterFn = (
    config: ThemeConfig,
) => Record<
    ThemeMode,
    {
        default?: TokenData;
        onDark?: TokenData;
        dark?: TokenData;
        onLight?: TokenData;
        light?: TokenData;
        inverse?: TokenData;
    }
>;

export interface Theme {
    config: ThemeConfig;
    dark: {
        [k: string]: TokenGeneralColorByType<TokensName>;
    };
    light: {
        [k: string]: TokenGeneralColorByType<TokensName>;
    };
}
