import { TokenData, TokenDataGroup } from '@salutejs/plasma-tokens-utils';

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

export type TextIconsTokenName =
    | 'textPrimary'
    | 'textSecondary'
    | 'textTertiary'
    | 'textParagraph'
    | 'textAccent'
    | 'textAccentGradient'
    | 'textPositive'
    | 'textWarning'
    | 'textNegative';

export type ControlsSurfacesName =
    | 'surfaceSolidDefault'
    | 'surfaceSolidPrimary'
    | 'surfaceSolidSecondary'
    | 'surfaceSolidTertiary'
    | 'surfaceSolidCard'
    | 'surfaceTransparentDefault'
    | 'surfaceTransparentPrimary'
    | 'surfaceTransparentSecondary'
    | 'surfaceTransparentTertiary'
    | 'surfaceTransparentCard'
    | 'surfaceAccent'
    | 'surfaceAccentGradient'
    | 'surfacePositive'
    | 'surfaceWarning'
    | 'surfaceNegative'
    | 'surfaceClear';

export type BackgroundName = 'backgroundPrimary' | 'backgroundSecondary' | 'backgroundTertiary';

export type OverlayName = 'overlaySoft' | 'overlayHard';

export enum TokenGroup {
    textIcons = 'textIcons',
    text = 'text',
    controlsSurfaces = 'controlsSurfaces',
    surface = 'surface',
    backgrounds = 'backgrounds',
    background = 'background',
    overlay = 'overlay',
}

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
    };
    light: {
        textIcons: TokensByType<TextIconsTokenName>;
        controlsSurfaces: TokensByType<ControlsSurfacesName>;
        backgrounds: TokensBackgroundByType<BackgroundName>;
        overlay: TokensByType<OverlayName>;
    };
}

export type ThemeTokenDataGroups = Record<string, TokenDataGroup<string>>;

export type ActualTokenNames =
    | TextIconsTokenName
    | ControlsSurfacesName
    | BackgroundName
    | OverlayName
    | 'white'
    | 'black'
    | 'clear'
    | 'onDarkTextPrimary'
    | 'onDarkTextSecondary'
    | 'onDarkTextTertiary'
    | 'onLightTextPrimary'
    | 'onLightTextSecondary'
    | 'onLightTextTertiary'
    | 'onLightSurfaceSolidDefault'
    | 'onLightSurfaceTransparentSecondary'
    | 'onDarkSurfaceSolidDefault'
    | 'onDarkSurfaceTransparentSecondary';
