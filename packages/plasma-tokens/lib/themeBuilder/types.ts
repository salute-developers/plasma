import { TokenData, TokenDataGroup } from '@salutejs/plasma-tokens-utils';

export interface ThemeConfig {
    name: string;
    opacity: boolean;
    accentColor: string;
    grayscale: Grayscale;
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

export type TokensByType<T extends string = string> = Record<TokenType, Record<T, TokenData>>;

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
