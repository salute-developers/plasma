import { general as generalColors } from '@salutejs/plasma-colors';
import { humanizeColor } from '@salutejs/plasma-tokens-utils';

import { white } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Вторичный фон',
    onDark: 'Вторичный фон на темном фоне',
    onLight: 'Вторичный фон на светлом фоне',
    inverse: 'Инвертированный вторичный фон',
};

export const getBackgroundSecondaryTokens = (config: ThemeConfig) => {
    const darkValue = humanizeColor(generalColors[config.grayscale][1000]);

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
                value: darkValue,
                comment: comment.onDark,
            },
            onLight: {
                value: white,
                comment: comment.onLight,
            },
            inverse: {
                value: darkValue,
                comment: comment.inverse,
            },
        },
    };
};
