import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineNegativeTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.red.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.red.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки ошибка',
        onDark: 'Цвет обводки ошибка на темном фоне',
        onLight: 'Цвет обводки ошибка на светлом фоне',
        inverse: 'Инвертированный цвет обводки ошибка',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
