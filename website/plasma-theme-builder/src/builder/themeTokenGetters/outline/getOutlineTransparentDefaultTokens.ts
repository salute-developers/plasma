import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getOutlineTransparentDefaultTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.96;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: opacityValue,
    });
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки по умолчанию',
        onDark: 'Прозрачный цвет обводки по умолчанию на темном фоне',
        onLight: 'Прозрачный цвет обводки по умолчанию на светлом фоне',
        inverse: 'Инвертированный прозрачный цвет обводки по умолчанию',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
