import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineSolidTertiaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${800}]`;
    const lightValue = `[general.${config.grayscale.light}.${700}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Третичный непрозрачный цвет обводки',
        onDark: 'Третичный непрозрачный цвет обводки на темном фоне',
        onLight: 'Третичный непрозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный третичный непрозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
