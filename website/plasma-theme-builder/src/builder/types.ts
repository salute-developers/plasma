import { TokenData } from '@salutejs/plasma-tokens-utils';
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

export type TokenBaseColorByType<T extends string = string> = Record<'default', Record<T, TokenData<string>>>;

export type TokensByType<T extends string = string> = Record<
    TokenType | TokenGenericType,
    Record<T, TokenData<string>>
>;

export type TokensBackgroundByType<T extends string = string> = Record<
    TokenType | TokenBackgroundType,
    Record<T, TokenData<string>>
>;

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
        textIcons: TokensByType<TextIconsTokenName>;
        controlsSurfaces: TokensByType<ControlsSurfacesName>;
        backgrounds: TokensBackgroundByType<BackgroundName>;
        overlay: TokensByType<OverlayName>;
        baseColor: TokenBaseColorByType<keyof typeof baseColors>;
    };
    light: {
        textIcons: TokensByType<TextIconsTokenName>;
        controlsSurfaces: TokensByType<ControlsSurfacesName>;
        backgrounds: TokensBackgroundByType<BackgroundName>;
        overlay: TokensByType<OverlayName>;
        baseColor: TokenBaseColorByType<keyof typeof baseColors>;
    };
}
