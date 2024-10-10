import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, tokensCreator } from '../../../utils';

export const getSurfacePositiveTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = `[general.green.${saturationDark}]`;
    const lightValue = `[general.green.${saturationLight}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола успех',
        onDark: 'Цвет фона поверхности/контрола успех на темном фоне',
        onLight: 'Цвет фона поверхности/контрола успех на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
