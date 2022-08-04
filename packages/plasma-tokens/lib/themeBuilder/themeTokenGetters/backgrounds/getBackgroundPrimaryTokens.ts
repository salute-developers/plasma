import { baseColors } from '../../constants';

import { TokensByType } from '../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Основной фон',
    onDark: 'Основной фон на темном фоне',
    onLight: 'Основной фон на светлом фоне',
    inverse: 'Инвертированный основной фон',
};

export const getBackgroundPrimaryTokens = () => {
    return {
        dark: {
            default: {
                value: baseColors.black.value,
                comment: comment.default,
            },
            onDark: {
                value: baseColors.black.value,
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
                value: baseColors.black.value,
                comment: comment.onDark,
            },
            onLight: {
                value: baseColors.white.value,
                comment: comment.onLight,
            },
            inverse: {
                value: baseColors.black.value,
                comment: comment.inverse,
            },
        },
    };
};
