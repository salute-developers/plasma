import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, tokensCreator } from '../../../utils';

export const getSurfaceNegativeTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = `[general.red.${saturationDark}]`;
    const lightValue = `[general.red.${saturationLight}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола ошибка',
        onDark: 'Цвет фона поверхности/контрола ошибка на темном фоне',
        onLight: 'Цвет фона поверхности/контрола ошибка на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола ошибка',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
