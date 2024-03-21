import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getSurfaceTransparentSecondaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: 0.12,
    });
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.06,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный прозрачный фон поверхности/контрола',
        onDark: 'Вторичный прозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Вторичный прозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный вторичный прозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
