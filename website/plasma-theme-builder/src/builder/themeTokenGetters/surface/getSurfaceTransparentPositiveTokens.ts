import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, tokensCreator } from '../../../utils';

export const getSurfaceTransparentPositiveTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = `[general.green.${saturationDark}][-0.80]`;
    const lightValue = `[general.green.${saturationLight}][-0.88]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет фона поверхности/контрола успех',
        onDark: 'Прозрачный цвет фона поверхности/контрола успех на темном фоне',
        onLight: 'Прозрачный цвет фона поверхности/контрола успех на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
