import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getTextWarningTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.orange.${saturationDark}]`, 'dark');
    const lightValue = shiftAccentColor(`[general.orange.${saturationLight}]`, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет предупреждения',
        onDark: 'Цвет предупреждения на темном фоне',
        onLight: 'Цвет предупреждения на светлом фоне',
        inverse: 'Инвертированный цвет предупреждения',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
