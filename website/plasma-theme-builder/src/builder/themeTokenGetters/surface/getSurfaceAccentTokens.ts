import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceAccentTokens = (config: ThemeConfig) => {
    const darkValue = config.accentColor.dark;
    const lightValue = config.accentColor.light;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный фон поверхности/контрола',
        onDark: 'Акцентный фон поверхности/контрола на темном фоне',
        onLight: 'Акцентный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный акцентный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
