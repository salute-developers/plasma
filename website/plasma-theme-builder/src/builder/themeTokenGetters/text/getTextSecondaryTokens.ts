import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getTextSecondaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.56;

    const darkValue = alphenColor(baseColors.white.value, opacityValue - 1);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный цвет текста',
        onDark: 'Вторичный цвет текста на темном фоне',
        onLight: 'Вторичный цвет текста на светлом фоне',
        inverse: 'Инвертированный вторичный цвет текста',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
