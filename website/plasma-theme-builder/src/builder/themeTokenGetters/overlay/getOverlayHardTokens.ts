import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getOverlayHardTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.96;

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
        default: 'Цвет фона паранжи темный',
        onDark: 'Цвет фона паранжи темный на темном фоне',
        onLight: 'Цвет фона паранжи темный на светлом фоне',
        inverse: 'Инвертированный цвет фона паранжи темный',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
