import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineTransparentInfoTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.blue.${saturationDark}]`, 'dark', 0.28);
    const lightValue = shiftAccentColor(`[general.blue.${saturationLight}]`, 'light', 0.2);

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки информация',
        onDark: 'Прозрачный цвет обводки информация на темном фоне',
        onLight: 'Прозрачный цвет обводки информация на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет обводки информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
