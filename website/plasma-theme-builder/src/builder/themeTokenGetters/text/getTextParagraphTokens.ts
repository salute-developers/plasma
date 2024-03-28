import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getTextParagraphTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.8;

    const darkValue = alphenColor(baseColors.white.value, opacityValue - 1);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Сплошной наборный текст',
        onDark: 'Сплошной наборный текст на темном фоне',
        onLight: 'Сплошной наборный текст на светлом фоне',
        inverse: 'Инвертированный сплошной наборный текст',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
