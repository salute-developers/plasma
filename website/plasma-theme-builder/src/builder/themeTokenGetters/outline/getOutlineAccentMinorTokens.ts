import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator, updateColorSaturation } from '../../../utils';

export const getOutlineAccentMinorTokens = (config: ThemeConfig) => {
    const darkValue = updateColorSaturation(config.accentColor.dark, 800);
    const lightValue = updateColorSaturation(config.accentColor.light, 300);

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный минорный непрозрачный цвет обводки',
        onDark: 'Акцентный минорный непрозрачный цвет обводки на темном фоне',
        onLight: 'Акцентный минорный непрозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный акцентный минорный непрозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
