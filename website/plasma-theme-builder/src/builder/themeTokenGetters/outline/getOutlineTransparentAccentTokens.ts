import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { shiftAccentColor, tokensCreator } from '../../../utils';

export const getOutlineTransparentAccentTokens = (config: ThemeConfig) => {
    const { dark, light } = config.accentColor;

    const darkValue = shiftAccentColor(dark, 'dark', 0.28);
    const lightValue = shiftAccentColor(light, 'light', 0.2);

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный акцентный цвет обводки',
        onDark: 'Прозрачный акцентный цвет обводки на темном фоне',
        onLight: 'Прозрачный акцентный цвет обводки на светлом фоне',
        inverse: 'Прозрачный инвертированный акцентный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
