import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getSurfaceTransparentSecondaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = alphenColor(baseColors.white.value, -0.88);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.08,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный прозрачный фон поверхности/контрола',
        onDark: 'Вторичный прозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Вторичный прозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный вторичный прозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
