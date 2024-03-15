import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getOutlineTransparentPrimaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: 0.12,
    });
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
