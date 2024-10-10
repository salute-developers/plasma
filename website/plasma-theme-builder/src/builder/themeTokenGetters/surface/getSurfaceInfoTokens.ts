import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, tokensCreator } from '../../../utils';

export const getSurfaceInfoTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = `[general.blue.${saturationDark}]`;
    const lightValue = `[general.blue.${saturationLight}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола информация',
        onDark: 'Цвет фона поверхности/контрола информация на темном фоне',
        onLight: 'Цвет фона поверхности/контрола информация на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
