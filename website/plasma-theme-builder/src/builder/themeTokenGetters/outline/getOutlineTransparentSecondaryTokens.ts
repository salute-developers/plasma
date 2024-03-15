import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getOutlineTransparentSecondaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: 0.2,
    });
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.28,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный прозрачный цвет обводки',
        onDark: 'Вторичный прозрачный цвет обводки на темном фоне',
        onLight: 'Вторичный прозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный вторичный прозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
