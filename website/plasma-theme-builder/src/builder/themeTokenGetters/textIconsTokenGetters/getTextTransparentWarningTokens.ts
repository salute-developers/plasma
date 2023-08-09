import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor, alphenColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType } from '@salutejs/plasma-tokens-utils';

export const transparentWarningTokensCreator = (comment: Record<keyof TokensByType, string>) => {
    const opacityDegrees = -0.88;
    const darkValue = alphenColor(humanizeColor(generalColors.orange[500]), opacityDegrees);
    const lightValue = alphenColor(humanizeColor(generalColors.orange[600]), opacityDegrees);

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
    default: 'Прозрачный цвет предупреждения',
    onDark: 'Прозрачный цвет предупреждения на темном фоне',
    onLight: 'Прозрачный цвет предупреждения на светлом фоне',
    inverse: 'Прозрачный инвертированный цвет предупреждения',
};

export const getTextTransparentWarningTokens = transparentWarningTokensCreator(comment);
