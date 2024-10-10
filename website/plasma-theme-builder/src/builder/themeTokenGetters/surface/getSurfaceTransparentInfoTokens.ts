import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, tokensCreator } from '../../../utils';

export const getSurfaceTransparentInfoTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = `[general.blue.${saturationDark}][-0.80]`;
    const lightValue = `[general.blue.${saturationLight}][-0.88]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет фона поверхности/контрола информация',
        onDark: 'Прозрачный цвет фона поверхности/контрола информация на темном фоне',
        onLight: 'Прозрачный цвет фона поверхности/контрола информация на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
