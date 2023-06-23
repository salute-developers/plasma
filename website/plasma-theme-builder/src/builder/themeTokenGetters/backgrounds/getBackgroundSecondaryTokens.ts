import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';
import type { ThemeConfig, TokensBackgroundByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';

const comment: Record<keyof TokensBackgroundByType, string> = {
    default: 'Вторичный фон',
    dark: 'Вторичный фон на темном фоне',
    light: 'Вторичный фон на светлом фоне',
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
            dark: {
                value: darkValue,
                comment: comment.dark,
            },
            light: {
                value: baseColors.white.value,
                comment: comment.light,
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
            dark: {
                value: darkValue,
                comment: comment.dark,
            },
            light: {
                value: baseColors.white.value,
                comment: comment.light,
            },
            inverse: {
                value: darkValue,
                comment: comment.inverse,
            },
        },
    };
};
