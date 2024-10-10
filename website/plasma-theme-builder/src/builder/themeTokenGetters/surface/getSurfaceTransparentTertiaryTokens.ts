import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getSurfaceTransparentTertiaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = alphenColor(baseColors.white.value, -0.8);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.12,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Третичный прозрачный фон поверхности/контрола',
        onDark: 'Третичный прозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Третичный прозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный третичный прозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
