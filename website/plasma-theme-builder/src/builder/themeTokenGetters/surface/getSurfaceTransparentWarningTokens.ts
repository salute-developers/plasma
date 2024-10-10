import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, tokensCreator } from '../../../utils';

export const getSurfaceTransparentWarningTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = `[general.orange.${saturationDark}][-0.80]`;
    const lightValue = `[general.orange.${saturationLight}][-0.88]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет фона поверхности/контрола предупреждение',
        onDark: 'Прозрачный цвет фона поверхности/контрола предупреждение на темном фоне',
        onLight: 'Прозрачный цвет фона поверхности/контрола предупреждение на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
