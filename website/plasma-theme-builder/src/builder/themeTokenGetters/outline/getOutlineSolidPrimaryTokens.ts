import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineSolidPrimaryTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${900}]`;
    const lightValue = `[general.${config.grayscale.light}.${200}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной непрозрачный цвет обводки',
        onDark: 'Основной непрозрачный цвет обводки на темном фоне',
        onLight: 'Основной непрозрачный цвет обводки на светлом фоне',
        inverse: 'Инвертированный основной непрозрачный цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
