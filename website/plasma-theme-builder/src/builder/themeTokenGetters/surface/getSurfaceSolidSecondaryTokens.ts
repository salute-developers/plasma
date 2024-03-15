import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceSolidSecondaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${900}]`;
    const lightValue = `[general.${config.grayscale.light}.${150}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный непрозрачный фон поверхности/контрола',
        onDark: 'Вторичный непрозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Вторичный непрозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный вторичный непрозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
