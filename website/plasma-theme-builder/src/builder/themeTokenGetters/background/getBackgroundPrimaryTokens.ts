import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';
import { getGreyTokenData, tokensCreator } from '../../../utils';

export const getBackgroundPrimaryTokens = (config: ThemeConfig) => {
    const { grayscale } = config;

    const darkValue = getGreyTokenData({
        saturation: 1000,
        grayscale: grayscale.dark,
    });
    const lightValue = getGreyTokenData({
        saturation: 50,
        grayscale: grayscale.light,
    });

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной фон',
        onDark: 'Основной фон на темном фоне',
        onLight: 'Основной фон на светлом фоне',
        inverse: 'Инвертированный основной фон',
    };

    return tokensCreator({ darkValue, lightValue, darkSubGroup: 'dark', lightSubGroup: 'light', comment });
};
