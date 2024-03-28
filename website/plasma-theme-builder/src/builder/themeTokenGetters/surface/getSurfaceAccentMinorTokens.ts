import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator, updateColorSaturation } from '../../../utils';

export const getSurfaceAccentMinorTokens = (config: ThemeConfig) => {
    const darkValue = updateColorSaturation(config.accentColor.dark, 900);
    const lightValue = updateColorSaturation(config.accentColor.light, 200);

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный минорный непрозрачный фон поверхности/контрола',
        onDark: 'Акцентный минорный непрозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Акцентный минорный непрозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный акцентный минорный непрозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
