import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceSolidDefaultTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${50}]`;
    const lightValue = `[general.${config.grayscale.light}.${1000}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Непрозрачный фон поверхности/контрола по умолчанию',
        onDark: 'Непрозрачный фон поверхности/контрола по умолчанию на темном фоне',
        onLight: 'Непрозрачный фон поверхности/контрола по умолчанию на светлом фоне',
        inverse: 'Инвертированный непрозрачный фон поверхности/контрола по умолчанию',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
