import { TokenDataGroup } from '../index';
import { ActualTokenNames, ThemeTokenDataGroups } from '../types';

const gradientColors = {
    dark: {
        skeletonGradient: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.09) 0%,
            rgba(255, 255, 255, 0.08) 6.25%,
            rgba(255, 255, 255, 0.05) 12.5%,
            rgba(255, 255, 255, 0.01) 25%,
            rgba(255, 255, 255, 0.05) 37.5%,
            rgba(255, 255, 255, 0.08) 43.75%,
            rgba(255, 255, 255, 0.09) 50%,
            rgba(255, 255, 255, 0.08) 56.25%,
            rgba(255, 255, 255, 0.05) 62.5%,
            rgba(255, 255, 255, 0.01) 75%,
            rgba(255, 255, 255, 0.05) 87.5%,
            rgba(255, 255, 255, 0.08) 93.75%,
            rgba(255, 255, 255, 0.09) 100%
        )`,
        skeletonGradientLighter: `linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.36) 0%,
            rgba(255, 255, 255, 0.32) 6.25%,
            rgba(255, 255, 255, 0.20) 12.5%,
            rgba(255, 255, 255, 0.04) 25%,
            rgba(255, 255, 255, 0.20) 37.5%,
            rgba(255, 255, 255, 0.32) 43.75%,
            rgba(255, 255, 255, 0.36) 50%,
            rgba(255, 255, 255, 0.08) 56.25%,
            rgba(255, 255, 255, 0.20) 62.5%,
            rgba(255, 255, 255, 0.04) 75%,
            rgba(255, 255, 255, 0.20) 87.5%,
            rgba(255, 255, 255, 0.32) 93.75%,
            rgba(255, 255, 255, 0.36) 100%
        )`,
    },
    light: {
        skeletonGradient: `linear-gradient(
            90deg,
            rgba(8, 8, 8, 0.09) 0%,
            rgba(8, 8, 8, 0.08) 6.25%,
            rgba(8, 8, 8, 0.05) 12.5%,
            rgba(8, 8, 8, 0.01) 25%,
            rgba(8, 8, 8, 0.05) 37.5%,
            rgba(8, 8, 8, 0.08) 43.75%,
            rgba(8, 8, 8, 0.09) 50%,
            rgba(8, 8, 8, 0.08) 56.25%,
            rgba(8, 8, 8, 0.05) 62.5%,
            rgba(8, 8, 8, 0.01) 75%,
            rgba(8, 8, 8, 0.05) 87.5%,
            rgba(8, 8, 8, 0.08) 93.75%,
            rgba(8, 8, 8, 0.09) 100%
        )`,
        skeletonGradientLighter: `linear-gradient(
            90deg,
            rgba(8, 8, 8, 0.36) 0%,
            rgba(8, 8, 8, 0.32) 6.25%,
            rgba(8, 8, 8, 0.20) 12.5%,
            rgba(8, 8, 8, 0.04) 25%,
            rgba(8, 8, 8, 0.20) 37.5%,
            rgba(8, 8, 8, 0.32) 43.75%,
            rgba(8, 8, 8, 0.36) 50%,
            rgba(8, 8, 8, 0.08) 56.25%,
            rgba(8, 8, 8, 0.20) 62.5%,
            rgba(8, 8, 8, 0.04) 75%,
            rgba(8, 8, 8, 0.20) 87.5%,
            rgba(8, 8, 8, 0.32) 93.75%,
            rgba(8, 8, 8, 0.36) 100%
        )`,
    },
};

const deprecatedColorTokenOnActualToken: Record<string, ActualTokenNames> = {
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
};

const getThemeTokenDataGroupsByName = (themeTokenDataGroups: Record<string, Record<string, ThemeTokenDataGroups>>) =>
    Object.values(themeTokenDataGroups).reduce(
        (acc, values) => ({
            ...acc,
            ...values,
        }),
        {},
    );

const getDeprecatedTokens = (tokens: TokenDataGroup<string>) => {
    // Данный префикс будет удалён на этапе генерации файлов с токенами (values.ts и index.ts)
    const legacyPrefix = 'plasmaColors';

    return Object.entries(deprecatedColorTokenOnActualToken)
        .filter(([_, actualName]) => tokens[actualName])
        .reduce(
            (acc, [oldName, actualName]) => ({
                ...acc,
                [`${legacyPrefix}-${oldName}`]: {
                    value: tokens[actualName].value,
                    comment: `@deprecated instead use ${actualName}`,
                },
            }),
            {},
        );
};

export const getThemesTokensFallback = (
    themesTokenDataGroups: Record<string, Record<string, ThemeTokenDataGroups>>,
): Record<string, ThemeTokenDataGroups> => {
    const themeTokenDataGroupsByName = getThemeTokenDataGroupsByName(themesTokenDataGroups);

    return Object.entries(themeTokenDataGroupsByName).reduce((tokensWithDeprecated, [themeName, tokens]) => {
        const deprecatedTokens = getDeprecatedTokens(tokens.color || {});

        const { skeletonGradient, skeletonGradientLighter } = gradientColors[
            themeName.endsWith('dark') ? 'dark' : 'light'
        ];

        return {
            ...tokensWithDeprecated,
            [themeName]: {
                color: {
                    ...tokens.color,
                    skeletonGradient: {
                        value: skeletonGradient,
                    },
                    skeletonGradientLighter: {
                        value: skeletonGradientLighter,
                    },
                    ...deprecatedTokens,
                },
                shadow: {
                    ...tokens.shadow,
                },
            },
        };
    }, {});
};
