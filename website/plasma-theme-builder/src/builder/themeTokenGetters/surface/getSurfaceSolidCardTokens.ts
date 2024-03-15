import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfaceSolidCardTokens = (config: ThemeConfig) => {
    const darkValue = `[general.${config.grayscale.dark}.${950}]`;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Основной фон для карточек',
        onDark: 'Основной фон для карточек на темном фоне',
        onLight: 'Основной фон для карточек на светлом фоне',
        inverse: 'Инвертированный основной фон для карточек',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
