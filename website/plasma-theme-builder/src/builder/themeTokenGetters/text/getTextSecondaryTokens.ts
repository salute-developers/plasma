import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData } from '../../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Вторичный цвет текста',
    onDark: 'Вторичный цвет текста на темном фоне',
    onLight: 'Вторичный цвет текста на светлом фоне',
    inverse: 'Инвертированный вторичный цвет текста',
};

export const getTextSecondaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.56;

    const darkValue = getGreyTokenData({
        saturation: 100,
        grayscale: grayscale.dark,
        opacity: opacityValue,
    });
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

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
    };
};
