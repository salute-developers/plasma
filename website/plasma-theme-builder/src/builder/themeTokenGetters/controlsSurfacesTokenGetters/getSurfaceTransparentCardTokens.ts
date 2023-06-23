import { alphenColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData } from '../../../utils';
import { baseColors } from '../../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный фон для карточек',
    onDark: 'Прозрачный фон для карточек на темном фоне',
    onLight: 'Прозрачный фон для карточек на светлом фоне',
    inverse: 'Инвертированный прозрачный фон для карточек',
};

export const getSurfaceTransparentCardTokens = (config: ThemeConfig) => {
    const {
        opacity: { surfaces: opacity },
        grayscale,
    } = config;

    const opacityDarkValue = opacity ? 0.12 : null;
    const opacityLightValue = opacity ? 0.06 : null;

    const darkValue = opacity
        ? alphenColor(baseColors.white.value, -0.88)
        : getGreyTokenData({ saturation: 1000, opacity: opacityDarkValue, grayscale: grayscale.dark });

    const lightValue = getGreyTokenData({
        saturation: opacity ? 1000 : 50,
        opacity: opacityLightValue,
        grayscale: grayscale.light,
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
