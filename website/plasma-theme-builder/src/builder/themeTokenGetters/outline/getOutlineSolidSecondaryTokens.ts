import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineSolidSecondaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${850}]`;
    const lightValue = `[general.${config.grayscale.light}.${300}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный непрозрачный цвет обводки',
        onDark: 'Вторичный непрозрачный цвет обводки на темном фоне',
        onLight: 'Вторичный непрозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный вторичный непрозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
