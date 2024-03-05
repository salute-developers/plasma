import type { TokensBackgroundByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types/constants';

const comment: Record<keyof TokensBackgroundByType, string> = {
    default: 'Основной фон',
    dark: 'Основной фон на темном фоне',
    light: 'Основной фон на светлом фоне',
    inverse: 'Инвертированный основной фон',
};

export const getBackgroundPrimaryTokens = () => {
    return {
        dark: {
            default: {
                value: baseColors.black.value,
                comment: comment.default,
            },
            dark: {
                value: baseColors.black.value,
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
                value: baseColors.black.value,
                comment: comment.dark,
            },
            light: {
                value: baseColors.white.value,
                comment: comment.light,
            },
            inverse: {
                value: baseColors.black.value,
                comment: comment.inverse,
            },
        },
    };
};
