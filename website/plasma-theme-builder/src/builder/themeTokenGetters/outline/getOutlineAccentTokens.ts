import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineAccentTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const darkValue = shiftAccentColor(dark, 'dark');
    const lightValue = shiftAccentColor(light, 'light');

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный цвет обводки',
        onDark: 'Акцентный цвет обводки на темном фоне',
        onLight: 'Акцентный цвет обводки на светлом фоне',
        inverse: 'Инвертированный акцентный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
