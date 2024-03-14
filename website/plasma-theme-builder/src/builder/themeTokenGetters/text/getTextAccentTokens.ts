import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextAccentTokens = (config: ThemeConfig) => {
    const darkValue = config.accentColor.dark;
    const lightValue = config.accentColor.light;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный цвет',
        onDark: 'Акцентный цвет на темном фоне',
        onLight: 'Акцентный цвет на светлом фоне',
        inverse: 'Инвертированный акцентный цвет',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
