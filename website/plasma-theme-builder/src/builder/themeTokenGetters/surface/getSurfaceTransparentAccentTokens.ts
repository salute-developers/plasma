import type { ThemeConfig, TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceTransparentAccentTokens = (config: ThemeConfig) => {
    const opacityValue = -0.72;

    const darkValue = `${config.accentColor.dark}[${opacityValue}]`;
    const lightValue = `${config.accentColor.light}[${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный акцентный фон поверхности/контрола',
        onDark: 'Прозрачный акцентный фон поверхности/контрола на темном фоне',
        onLight: 'Прозрачный акцентный фон поверхности/контрола на светлом фоне',
        inverse: 'Прозрачный инвертированный акцентный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
