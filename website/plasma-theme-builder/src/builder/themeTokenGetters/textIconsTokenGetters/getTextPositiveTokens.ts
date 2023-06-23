import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType } from '@salutejs/plasma-tokens-utils';

export const positiveTokensCreator = (comment: Record<keyof TokensByType, string>) => {
    const darkValue = humanizeColor(generalColors.green[500]);
    const lightValue = humanizeColor(generalColors.green[600]);

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
    default: 'Цвет успеха',
    onDark: 'Цвет успеха на темном фоне',
    onLight: 'Цвет успеха на светлом фоне',
    inverse: 'Инвертированный цвет успеха',
};

export const getTextPositiveTokens = positiveTokensCreator(comment);
