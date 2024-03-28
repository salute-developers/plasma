import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineAccentTokens = (config: ThemeConfig) => {
    const darkValue = config.accentColor.dark;
    const lightValue = config.accentColor.light;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный цвет обводки',
        onDark: 'Акцентный цвет обводки на темном фоне',
        onLight: 'Акцентный цвет обводки на светлом фоне',
        inverse: 'Инвертированный акцентный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
