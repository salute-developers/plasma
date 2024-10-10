import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineWarningTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.orange.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.orange.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки предупреждение',
        onDark: 'Цвет обводки предупреждение на темном фоне',
        onLight: 'Цвет обводки предупреждение на светлом фоне',
        inverse: 'Инвертированный цвет обводки предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
