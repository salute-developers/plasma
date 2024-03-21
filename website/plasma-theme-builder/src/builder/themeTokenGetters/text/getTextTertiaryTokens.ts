import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getTextTertiaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.28;

    const darkValue = alphenColor(baseColors.white.value, opacityValue - 1);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Третичный цвет текста',
        onDark: 'Третичный цвет текста на темном фоне',
        onLight: 'Третичный цвет текста на светлом фоне',
        inverse: 'Инвертированный третичный цвет текста',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
