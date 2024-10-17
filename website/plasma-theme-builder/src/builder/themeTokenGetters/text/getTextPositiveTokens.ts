import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getTextPositiveTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.green.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.green.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет успеха',
        onDark: 'Цвет успеха на темном фоне',
        onLight: 'Цвет успеха на светлом фоне',
        inverse: 'Инвертированный цвет успеха',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
