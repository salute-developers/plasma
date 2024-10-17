import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getTextInfoTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.blue.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.blue.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет информации',
        onDark: 'Цвет информации на темном фоне',
        onLight: 'Цвет информации на светлом фоне',
        inverse: 'Инвертированный цвет информации',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
