import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getTextPrimaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.96;

    const darkValue = alphenColor(baseColors.white.value, opacityValue - 1);
    const lightValue = getGreyTokenData({
        saturation: 950,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной цвет текста',
        onDark: 'Основной цвет текста на темном фоне',
        onLight: 'Основной цвет текста на светлом фоне',
        inverse: 'Инвертированный основной цвет текста',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
