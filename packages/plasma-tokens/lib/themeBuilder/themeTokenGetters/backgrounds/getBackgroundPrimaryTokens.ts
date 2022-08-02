import { black, white } from '../../constants';

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
                value: black,
                comment: comment.default,
            },
            onDark: {
                value: black,
                comment: comment.onDark,
            },
            onLight: {
                value: white,
                comment: comment.onLight,
            },
            inverse: {
                value: white,
                comment: comment.inverse,
            },
        },
        light: {
            default: {
                value: white,
                comment: comment.default,
            },
            onDark: {
                value: black,
                comment: comment.onDark,
            },
            onLight: {
                value: white,
                comment: comment.onLight,
            },
            inverse: {
                value: black,
                comment: comment.inverse,
            },
        },
    };
};
