import { TokenData, TokenDataGroup } from '@salutejs/plasma-tokens-utils';
import { general as generalColors, PlasmaSaturation } from '@salutejs/plasma-colors';

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

export interface SetupAnswers {
    name: string;
    accentColor: keyof typeof generalColors;
    accentColorSaturationLight: PlasmaSaturation;
    accentColorSaturationDark: PlasmaSaturation;
    grayscaleLight: Grayscale;
    grayscaleDark: Grayscale;
    opacityTextIcons: boolean;
    opacitySurfaces: boolean;
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
    controlsSurfaces = 'controlsSurfaces',
    backgrounds = 'backgrounds',
    overlay = 'overlay',
}

export enum TokenType {
    default = 'default',
    onDark = 'onDark',
    onLight = 'onLight',
    inverse = 'inverse',
}

export enum Grayscale {
    coolGray = 'coolGray',
    gray = 'gray',
}

export type TokensByType<T extends string = string> = Record<TokenType, Record<T, TokenData<string>>>;

export type ThemeMode = 'dark' | 'light';

export type TokensGetterFn = (
    config: ThemeConfig,
) => Record<
    ThemeMode,
    {
        default: TokenData;
        onDark: TokenData;
        onLight: TokenData;
        inverse: TokenData;
    }
>;

export interface Theme {
    config: ThemeConfig;
    dark: {
        textIcons: TokensByType<TextIconsTokenName>;
        controlsSurfaces: TokensByType<ControlsSurfacesName>;
        backgrounds: TokensByType<BackgroundName>;
        overlay: TokensByType<OverlayName>;
    };
    light: {
        textIcons: TokensByType<TextIconsTokenName>;
        controlsSurfaces: TokensByType<ControlsSurfacesName>;
        backgrounds: TokensByType<BackgroundName>;
        overlay: TokensByType<OverlayName>;
    };
}

export type ThemeTokenDataGroups = Record<string, TokenDataGroup<string>>;
