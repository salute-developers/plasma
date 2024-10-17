import { alphenColor, ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getSurfaceTransparentDeepTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = alphenColor(baseColors.white.value, -0.36);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.64,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Глубокий прозрачный фон поверхности/контрола',
        onDark: 'Глубокий прозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Глубокий прозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный глубокий прозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
