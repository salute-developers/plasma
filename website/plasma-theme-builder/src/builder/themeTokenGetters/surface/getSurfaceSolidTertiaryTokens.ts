import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceSolidTertiaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${850}]`;
    const lightValue = `[general.${config.grayscale.light}.${200}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Третичный непрозрачный фон поверхности/контрола',
        onDark: 'Третичный непрозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Третичный непрозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный третичный непрозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
