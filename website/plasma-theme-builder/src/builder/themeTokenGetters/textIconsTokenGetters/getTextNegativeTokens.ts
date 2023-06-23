import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType } from '@salutejs/plasma-tokens-utils';

export const negativeTokensCreator = (comment: Record<keyof TokensByType, string>) => {
    const darkValue = humanizeColor(generalColors.red[500]);
    const lightValue = humanizeColor(generalColors.red[600]);

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
    default: 'Цвет ошибки',
    onDark: 'Цвет ошибки на темном фоне',
    onLight: 'Цвет ошибки на светлом фоне',
    inverse: 'Инвертированный цвет ошибки',
};

export const getTextNegativeTokens = negativeTokensCreator(comment);
