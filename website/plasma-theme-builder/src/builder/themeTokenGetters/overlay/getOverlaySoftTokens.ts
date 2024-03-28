import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getOverlaySoftTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.56;

    const darkValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.dark,
        opacity: opacityValue,
    });
    const lightValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.light,
        opacity: opacityValue,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона паранжи светлый',
        onDark: 'Цвет фона паранжи светлый на темном фоне',
        onLight: 'Цвет фона паранжи светлый на светлом фоне',
        inverse: 'Инвертированный цвет фона паранжи светлый',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
