import { TokensByType, ThemeConfig, alphenColor } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getOutlineTransparentTertiaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = alphenColor(baseColors.white.value, -0.44);
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.56,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Третичный прозрачный цвет обводки',
        onDark: 'Третичный прозрачный цвет обводки на темном фоне',
        onLight: 'Третичный прозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный третичный прозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
