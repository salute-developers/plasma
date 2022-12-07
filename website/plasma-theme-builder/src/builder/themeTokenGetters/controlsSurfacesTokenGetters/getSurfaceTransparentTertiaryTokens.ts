import { alphenColor } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';
import { getGreyTokenData } from '../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Третичный прозрачный фон поверхности/контрола',
    onDark: 'Третичный прозрачный фон поверхности/контрола на темном фоне',
    onLight: 'Третичный прозрачный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный третичный прозрачный фон поверхности/контрола',
};

export const getSurfaceTransparentTertiaryTokens = (config: ThemeConfig) => {
    const {
        opacity: { surfaces: opacity },
        grayscale,
    } = config;
    const opacityLightValue = opacity ? 0.12 : null;

    const darkValue = opacity
        ? alphenColor(baseColors.white.value, -0.8)
        : getGreyTokenData({ saturation: 850, grayscale: grayscale.dark });
    const lightValue = getGreyTokenData({
        saturation: opacity ? 1000 : 200,
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
