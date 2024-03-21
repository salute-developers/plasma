import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator, updateColorSaturation } from '../../../utils';

export const getTextAccentMinorTokens = (config: ThemeConfig) => {
    const darkValue = updateColorSaturation(config.accentColor.dark, 150);
    const lightValue = updateColorSaturation(config.accentColor.light, 900);

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный минорный цвет',
        onDark: 'Акцентный минорный цвет на темном фоне',
        onLight: 'Акцентный минорный цвет на светлом фоне',
        inverse: 'Инвертированный минорный акцентный цвет',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
