import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getOutlineTransparentSecondaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = alphenColor(baseColors.white.value, -0.72);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.28,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный прозрачный цвет обводки',
        onDark: 'Вторичный прозрачный цвет обводки на темном фоне',
        onLight: 'Вторичный прозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный вторичный прозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
