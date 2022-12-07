import { alphenColor } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';
import { getGreyTokenData } from '../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Основной прозрачный фон поверхности/контрола',
    onDark: 'Основной прозрачный фон поверхности/контрола на темном фоне',
    onLight: 'Основной прозрачный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный основной прозрачный фон поверхности/контрола',
};

export const getSurfaceTransparentPrimaryTokens = (config: ThemeConfig) => {
    const {
        opacity: { surfaces: opacity },
        grayscale,
    } = config;
    const opacityLightValue = opacity ? 0.02 : null;

    const darkValue = opacity
        ? alphenColor(baseColors.white.value, -0.94)
        : getGreyTokenData({ saturation: 950, grayscale: grayscale.dark });
    const lightValue = getGreyTokenData({
        saturation: opacity ? 1000 : 100,
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
