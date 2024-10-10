import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { getPaletteColorByValue, tokensCreator } from '../../../utils';

export const getSurfaceWarningTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const [, saturationDark] = getPaletteColorByValue(dark);
    const [, saturationLight] = getPaletteColorByValue(light);

    const darkValue = `[general.orange.${saturationDark}]`;
    const lightValue = `[general.orange.${saturationLight}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола предупреждение',
        onDark: 'Цвет фона поверхности/контрола предупреждение на темном фоне',
        onLight: 'Цвет фона поверхности/контрола предупреждение на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
