import { alphenColor } from '@salutejs/plasma-tokens-utils';
import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData } from '../../../utils';
import { baseColors } from '../../../types';

const comment: Record<keyof TokensByType, string> = {
    default: 'Основной прозрачный фон поверхности/контрола',
    onDark: 'Основной прозрачный фон поверхности/контрола на темном фоне',
    onLight: 'Основной прозрачный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный основной прозрачный фон поверхности/контрола',
};

export const getSurfaceTransparentPrimaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityLightValue = 0.02;

    const darkValue = alphenColor(baseColors.white.value, -0.94);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: opacityLightValue,
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
