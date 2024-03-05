import type { ThemeConfig, TokensBackgroundByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';

const comment: Record<keyof TokensBackgroundByType, string> = {
    default: 'Третичный фон',
    dark: 'Третичный фон на темном фоне',
    light: 'Третичный фон на светлом фоне',
    inverse: 'Инвертированный третичный фон',
};

export const getBackgroundTertiaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.950]`;

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
