import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Вторичный фон',
    onDark: 'Вторичный фон на темном фоне',
    onLight: 'Вторичный фон на светлом фоне',
    inverse: 'Инвертированный вторичный фон',
};

export const getBackgroundSecondaryTokens = (config: ThemeConfig) => {
    const darkValue = humanizeColor(generalColors[config.grayscale.dark][1000]);

    return {
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
                value: baseColors.white.value,
                comment: comment.onLight,
            },
            inverse: {
                value: baseColors.white.value,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: baseColors.white.value,
                comment: comment.default,
            },
            onDark: {
                value: darkValue,
                comment: comment.onDark,
            },
            onLight: {
                value: baseColors.white.value,
                comment: comment.onLight,
            },
            inverse: {
                value: darkValue,
                comment: comment.inverse,
            },
        },
    };
};
