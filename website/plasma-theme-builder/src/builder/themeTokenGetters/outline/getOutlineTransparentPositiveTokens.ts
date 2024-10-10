import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineTransparentPositiveTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = shiftAccentColor(`[general.green.${saturationDark}]`, 'dark', 0.28);
    const lightValue = shiftAccentColor(`[general.green.${saturationLight}]`, 'light', 0.2);

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки успех',
        onDark: 'Прозрачный цвет обводки успех на темном фоне',
        onLight: 'Прозрачный цвет обводки успех на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет обводки успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
