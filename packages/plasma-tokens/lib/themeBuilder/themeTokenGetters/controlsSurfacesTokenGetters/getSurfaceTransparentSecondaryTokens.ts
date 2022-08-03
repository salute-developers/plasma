import { alphenColor } from '@salutejs/plasma-tokens-utils';

import { white } from '../../constants';
import { ThemeConfig, TokensByType } from '../../types';
import { getGreyTokenData } from '../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Вторичный прозрачный фон поверхности/контрола',
    onDark: 'Вторичный прозрачный фон поверхности/контрола на темном фоне',
    onLight: 'Вторичный прозрачный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный вторичный прозрачный фон поверхности/контрола',
};

export const getSurfaceTransparentSecondaryTokens = (config: ThemeConfig) => {
    const { opacity, grayscale } = config;
    const opacityLightValue = opacity ? 0.06 : null;

    const darkValue = opacity ? alphenColor(white, -0.88) : getGreyTokenData({ saturation: 900, grayscale });
    const lightValue = getGreyTokenData({ saturation: opacity ? 1000 : 150, grayscale, opacity: opacityLightValue });

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
