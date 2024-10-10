import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getTextNegativeTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.red.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.red.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет ошибки',
        onDark: 'Цвет ошибки на темном фоне',
        onLight: 'Цвет ошибки на светлом фоне',
        inverse: 'Инвертированный цвет ошибки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
