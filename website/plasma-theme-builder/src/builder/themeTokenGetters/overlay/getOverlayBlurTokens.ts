import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';
import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getOverlayBlurTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const opacityValue = 0.28;

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
        default: 'Цвет фона паранжи размытый',
        onDark: 'Цвет фона паранжи размытый на темном фоне',
        onLight: 'Цвет фона паранжи размытый на светлом фоне',
        inverse: 'Инвертированный цвет фона паранжи размытый',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
