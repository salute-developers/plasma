import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineTransparentNegativeTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.red.${saturationDark}]`, 'dark', 0.28);
    const lightValue = shiftAccentColor(`[general.red.${saturationLight}]`, 'light', 0.2);

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки предупреждение',
        onDark: 'Прозрачный цвет обводки предупреждение на темном фоне',
        onLight: 'Прозрачный цвет обводки предупреждение на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет обводки предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
