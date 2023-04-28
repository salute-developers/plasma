import * as CSS from 'csstype';

import { BaseColorsList, ThemeColorsList, WebColorsList } from './constants';

type DataValue = string | number | DataObject;

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

export type TokenType = string | CSSProperties | Array<string | number> | Record<string, string>;

/**
 * Содержимое дата-токена.
 */
export interface TokenData<T = {}> {
    value: T;
    comment?: string;
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
    color: string;
    blurRadius: string;
    spreadRadius: string;
    offset: {
        x: string;
        y: string;
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
}

export type ThemeTokenDataGroups = Record<string, TokenDataGroup<string> | undefined>;

export type GeneratedTokenType = 'value' | 'css';

export type GeneratedTokenMode = 'color' | 'shadow';

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
