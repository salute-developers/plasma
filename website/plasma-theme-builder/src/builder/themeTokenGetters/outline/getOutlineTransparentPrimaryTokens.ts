import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getOutlineTransparentPrimaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = alphenColor(baseColors.white.value, -0.88);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.12,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной прозрачный цвет обводки',
        onDark: 'Основной прозрачный цвет обводки на темном фоне',
        onLight: 'Основной прозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный основной прозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
