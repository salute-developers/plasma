import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getSurfaceTransparentTertiaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: 0.2,
    });
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
