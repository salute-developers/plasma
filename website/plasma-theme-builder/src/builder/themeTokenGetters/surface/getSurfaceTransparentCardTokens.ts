import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getSurfaceTransparentCardTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: 0.06,
    });
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.06,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный фон для карточек',
        onDark: 'Прозрачный фон для карточек на темном фоне',
        onLight: 'Прозрачный фон для карточек на светлом фоне',
        inverse: 'Инвертированный прозрачный фон для карточек',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
