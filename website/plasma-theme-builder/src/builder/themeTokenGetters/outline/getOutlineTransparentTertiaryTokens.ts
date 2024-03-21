import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getOutlineTransparentTertiaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: 0.28,
    });
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
