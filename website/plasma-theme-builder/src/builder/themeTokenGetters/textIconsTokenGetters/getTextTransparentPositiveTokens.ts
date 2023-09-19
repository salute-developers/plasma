import type { TokensByType } from '@salutejs/plasma-tokens-utils';

export const transparentPositiveTokensCreator = (comment: Record<keyof TokensByType, string>) => {
    const opacityDegrees = -0.88;
    const darkValue = `[general.green.500][${opacityDegrees}]`;
    const lightValue = `[general.green.600][${opacityDegrees}]`;

    return () => ({
        dark: {
            default: {
                value: darkValue,
                comment: comment.default,
            },
            onDark: {
                value: darkValue,
                comment: comment.onDark,
            },
            onLight: {
                value: lightValue,
                comment: comment.onLight,
            },
            inverse: {
                value: lightValue,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: lightValue,
                comment: 'Цвет успеха',
            },
            onDark: {
                value: darkValue,
                comment: 'Цвет успеха на темном фоне',
            },
            onLight: {
                value: lightValue,
                comment: 'Цвет успеха на светлом фоне',
            },
            inverse: {
                value: darkValue,
                comment: 'Инвертированный цвет успеха',
            },
        },
    });
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный цвет успеха',
    onDark: 'Прозрачный цвет успеха на темном фоне',
    onLight: 'Прозрачный цвет успеха на светлом фоне',
    inverse: 'Прозрачный инвертированный цвет успеха',
};

export const getTextTransparentPositiveTokens = transparentPositiveTokensCreator(comment);
