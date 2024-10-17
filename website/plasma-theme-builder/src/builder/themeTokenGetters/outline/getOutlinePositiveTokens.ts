import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlinePositiveTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.green.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.green.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки успех',
        onDark: 'Цвет обводки успех на темном фоне',
        onLight: 'Цвет обводки успех на светлом фоне',
        inverse: 'Инвертированный цвет обводки успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
