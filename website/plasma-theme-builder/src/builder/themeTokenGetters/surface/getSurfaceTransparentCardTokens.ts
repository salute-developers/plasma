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
    const { grayscale } = config;

    const opacityLightValue = 0.06;

    const darkValue = alphenColor(baseColors.white.value, -0.88);

    const lightValue = getGreyTokenData({
        saturation: 1000,
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
