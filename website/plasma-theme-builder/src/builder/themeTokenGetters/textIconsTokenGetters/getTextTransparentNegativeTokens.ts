import type { TokensByType } from '@salutejs/plasma-tokens-utils';

export const transparentNegativeTokensCreator = (comment: Record<keyof TokensByType, string>) => {
    const opacityDegrees = -0.88;
    const darkValue = `[general.red.500][${opacityDegrees}]`;
    const lightValue = `[general.red.600][${opacityDegrees}]`;

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
                value: darkValue,
                comment: comment.inverse,
            },
        },
    });
};

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный цвет ошибки',
    onDark: 'Прозрачный цвет ошибки на темном фоне',
    onLight: 'Прозрачный цвет ошибки на светлом фоне',
    inverse: 'Прозрачный инвертированный цвет ошибки',
};

export const getTextTransparentNegativeTokens = transparentNegativeTokensCreator(comment);
