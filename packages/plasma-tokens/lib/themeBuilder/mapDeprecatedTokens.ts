import { baseColors } from './constants';
import { BackgroundName, ControlsSurfacesName, OverlayName, TextIconsTokenName, ThemeTokenDataGroups } from './types';

type ActualTokenNames =
    | TextIconsTokenName
    | ControlsSurfacesName
    | BackgroundName
    | OverlayName
    | keyof typeof baseColors
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

export const deprecatedTokenOnActualToken: Record<string, ActualTokenNames> = {
    whitePrimary: 'onDarkTextPrimary',
    whiteSecondary: 'onDarkTextSecondary',
    whiteTertiary: 'onDarkTextTertiary',

    blackPrimary: 'onLightTextPrimary',
    blackSecondary: 'onLightTextSecondary',
    blackTertiary: 'onLightTextTertiary',

    transparent: 'clear',

    buttonClear: 'clear',
    buttonBlack: 'onLightSurfaceSolidDefault',
    buttonBlackSecondary: 'onLightSurfaceTransparentSecondary',
    // buttonBlackTransparent = 'Чёрная для использования поверх картинок',
    buttonWhite: 'onDarkSurfaceSolidDefault',
    buttonWhiteSecondary: 'onDarkSurfaceTransparentSecondary',

    text: 'textPrimary',
    primary: 'textPrimary',
    secondary: 'textSecondary',
    tertiary: 'textTertiary',
    paragraph: 'textParagraph',
    background: 'backgroundPrimary',
    accent: 'textAccent',
    success: 'textPositive',
    warning: 'textWarning',
    critical: 'textNegative',
    overlay: 'overlaySoft',

    // gradient = 'Градиент для заливки основного фона',
    // gradientDevice = 'Бэкграунд ассистента на девайсах',

    surfaceLiquid01: 'surfaceTransparentPrimary',
    surfaceLiquid02: 'surfaceTransparentSecondary',
    surfaceLiquid03: 'surfaceTransparentTertiary',
    surfaceSolid01: 'surfaceSolidPrimary',
    surfaceSolid02: 'surfaceSolidSecondary',
    surfaceSolid03: 'surfaceSolidTertiary',
    surfaceCard: 'surfaceTransparentCard',
    // buttonPrimary = 'Первичный цвет контролов',
    buttonSecondary: 'surfaceTransparentSecondary',
    buttonAccent: 'textAccent',
    buttonSuccess: 'surfacePositive',
    buttonWarning: 'surfaceWarning',
    buttonCritical: 'surfaceNegative',
    // buttonChecked = 'Цвет зажатого контрола',
    // buttonFocused = 'Цвет рамки фокуса у контрола',
    // speechBubbleSent = 'Цвет фона баблов отправленный сообщений',
    // speechBubbleReceived = 'Цвет фона баблов получнных сообщений',
    // voicePhraseGradient = 'Градиент подсказок о голосовых запросах',

    // skeletonGradient = 'Градиент скелетона',
    // skeletonGradientLighter = 'Градиент скелетона для ярких компонентов',
};

export const mapDeprecatedTokens = (themeTokenDataGroups: ThemeTokenDataGroups): ThemeTokenDataGroups => {
    return Object.entries(themeTokenDataGroups).reduce((tokensWithDeprecated, [themeName, tokens]) => {
        const deprecatedTokens = Object.entries(deprecatedTokenOnActualToken).reduce(
            (acc, [oldName, actualName]) => ({
                ...acc,
                [oldName]: { value: tokens[actualName].value, comment: `@deprecated instead use ${actualName}` },
            }),
            {},
        );

        return {
            ...tokensWithDeprecated,
            [themeName]: {
                ...tokens,
                ...deprecatedTokens,
            },
        };
    }, {});
};
