import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getSurfaceTransparentPrimaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.dark,
        opacity: 0.06,
    });
    const lightValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.light,
        opacity: 0.03,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной прозрачный фон поверхности/контрола',
        onDark: 'Основной прозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Основной прозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный основной прозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
