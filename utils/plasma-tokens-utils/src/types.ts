import * as CSS from 'csstype';

import { BaseColorsList, ThemeColorsList, WebColorsList } from './constants';

export type DataValue = string | number | DataObject;

export type ThemeNode = Record<string, any>;

/**
 * Объект с произвольным содержанием.
 */
export interface DataObject {
    [x: string]: DataValue;
}

export type CSSProperties = CSS.Properties<string | number>;

/**
 * Объект с корневыми CSSVariables.
 */
export type CSSRootTheme = {
    ':root': CSSProperties;
};

/**
 * Объект с корневыми CSSVariables.
 */
export type CSSThemeMode = {
    '.light': CSSProperties;
    '.dark': CSSProperties;
};
export interface CSSObject extends CSSProperties {
    [key: string]: CSSObject | string | number | undefined;
}

export type TokenType = string | CSSProperties | Array<string | number> | Record<string, string> | Array<any>;

/**
 * Содержимое дата-токена.
 */
export interface TokenData<T = {}> {
    value: T;
    comment?: string;
    enabled?: boolean;
}

export type TColor = string;

/**
 * Группа дата-токенов.
 */
export interface TokenDataGroup<T = {}> {
    [key: string]: TokenData<T>;
}

export interface DesignLanguage {
    colors: Record<string, any>;
    typography: Record<string, any>;
}

export type BaseColors = TokenDataGroup<TColor> & Record<keyof typeof BaseColorsList, TokenData<TColor>>;
export type ThemeColors = TokenDataGroup<TColor> & Record<keyof typeof ThemeColorsList, TokenData<TColor>>;
export type WebColors = TokenDataGroup<TColor> & Partial<Record<keyof typeof WebColorsList, TokenData<TColor>>>;
export type FullColors = BaseColors & ThemeColors;

export interface TypographStyle {
    color?: string;
    fontSize: string;
    fontFamily: string;
    fontWeight: string | number;
    fontStyle?: string;
    lineHeight?: string;
    letterSpacing: string | number;
    textAlign?: CSS.Properties['textAlign'];
    textDecoration?: string;
    textTransform?: CSS.Properties['textTransform'];
}

/**
 * Объект со стилями по их типографическим компонентам.
 */
export type TypoStyles<T extends string> = { [key in T]: CSSProperties };

export type TypoSystem<TK extends string> = {
    /**
     * Все `fontSizes`.
     */
    fontSizes: string[];
    /**
     * Все `fonts`.
     */
    fonts: Record<string, string>;
    /**
     * Все `fontWeights`.
     */
    fontWeights: Record<string, number>;
    /**
     * Все `lineHeights`.
     */
    lineHeights: string[];
    /**
     * Все `letterSpacings`.
     */
    letterSpacings: string[];

    /**
     * Объект со стилями по их типографическим компонентам.
     */
    typoStyles: TypoStyles<TK>;
    /**
     * Алиас typoStyles.
     * ToDo: удалить в v2.0.
     */
    text: TypoStyles<TK>;
    styles?: { [key: string]: CSSProperties };
};

/**
 * Список с дескрипторами создаваемой файловой системы.
 */
export type GeneratedFiles = Array<{
    file: string;
    content: string;
}>;

type OverlayTokensKeys =
    | 'overlaySoft'
    | 'overlayHard'
    | 'overlayBlur'
    | 'darkOverlaySoft'
    | 'darkOverlayHard'
    | 'darkOverlayBlur'
    | 'lightOverlaySoft'
    | 'lightOverlayHard'
    | 'lightOverlayBlur'
    | 'inverseOverlaySoft'
    | 'inverseOverlayHard'
    | 'inverseOverlayBlur';

export type OverlayTokens = Record<OverlayTokensKeys, TokenData<TColor>>;

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
    | 'textNegative'
    | 'textTransparentAccent'
    | 'textTransparentAccentGradient'
    | 'textTransparentPositive'
    | 'textTransparentWarning'
    | 'textTransparentNegative';

export type ControlsSurfacesName =
    | 'surfaceSolidDefault'
    | 'surfaceSolidPrimary'
    | 'surfaceSolidSecondary'
    | 'surfaceSolidTertiary'
    | 'surfaceSolidCard'
    | 'surfaceTransparentDeep'
    | 'surfaceTransparentPrimary'
    | 'surfaceTransparentSecondary'
    | 'surfaceTransparentTertiary'
    | 'surfaceTransparentCard'
    | 'surfaceAccent'
    | 'surfaceAccentGradient'
    | 'surfacePositive'
    | 'surfaceWarning'
    | 'surfaceNegative'
    | 'surfaceClear'
    | 'surfaceTransparentAccent'
    | 'surfaceTransparentAccentGradient'
    | 'surfaceTransparentPositive'
    | 'surfaceTransparentWarning'
    | 'surfaceTransparentNegative';

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

export enum TokenMode {
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
    TokenMode | TokenGenericType,
    Record<T, TokenData<string>>
>;

export type TokensBackgroundByType<T extends string = string> = Record<
    TokenMode | TokenBackgroundType,
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

export interface Shadow {
    origin: string;
    ios?: {
        kind: 'shadow';
        color: string;
        offset: { width: number; height: number };
        opacity: number;
        radius: number;
    };
    android?: {
        kind: 'shadow';
        color: string;
        elevation: number;
    };
}

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
    shadow?: Record<string, string>;
    borderRadius?: Record<string, string>;
    spacing?: Record<string, string>;
}

export type ThemeTokenDataGroups = Record<string, TokenDataGroup<string> | undefined>;

export type GeneratedTokenType = 'value' | 'css';

export type GeneratedTokenMode = 'color' | 'shadow' | 'borderRadius' | 'spacing';

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
