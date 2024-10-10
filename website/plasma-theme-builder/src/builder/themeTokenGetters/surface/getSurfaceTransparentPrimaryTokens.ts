import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getSurfaceTransparentPrimaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = alphenColor(baseColors.white.value, -0.94);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.04,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной прозрачный фон поверхности/контрола',
        onDark: 'Основной прозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Основной прозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный основной прозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
