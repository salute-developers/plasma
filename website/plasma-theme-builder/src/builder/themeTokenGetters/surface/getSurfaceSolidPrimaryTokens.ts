import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceSolidPrimaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${950}]`;
    const lightValue = `[general.${config.grayscale.light}.${100}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной непрозрачный фон поверхности/контрола',
        onDark: 'Основной непрозрачный фон поверхности/контрола на темном фоне',
        onLight: 'Основной непрозрачный фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный основной непрозрачный фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
