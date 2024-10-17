import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { shiftAccentColor, tokensCreator } from '../../../utils';

export const getTextAccentTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const darkValue = shiftAccentColor(dark, 'dark');
    const lightValue = shiftAccentColor(light, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный цвет',
        onDark: 'Акцентный цвет на темном фоне',
        onLight: 'Акцентный цвет на светлом фоне',
        inverse: 'Инвертированный акцентный цвет',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
