import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineInfoTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.blue.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.blue.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки информация',
        onDark: 'Цвет обводки информация на темном фоне',
        onLight: 'Цвет обводки информация на светлом фоне',
        inverse: 'Инвертированный цвет обводки информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
