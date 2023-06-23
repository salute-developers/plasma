import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData } from '../../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Третичный цвет текста',
    onDark: 'Третичный цвет текста на темном фоне',
    onLight: 'Третичный цвет текста на светлом фоне',
    inverse: 'Инвертированный третичный цвет текста',
};

export const getTextTertiaryTokens = (config: ThemeConfig) => {
    const {
        opacity: { textIcons: opacity },
        grayscale,
    } = config;
    const opacityValue = opacity ? 0.4 : null;

    const darkValue = getGreyTokenData({
        saturation: opacity ? 100 : 600,
        grayscale: grayscale.dark,
        opacity: opacityValue,
    });
    const lightValue = getGreyTokenData({
        saturation: opacity ? 1000 : 500,
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
