import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getBackgroundSecondaryTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Вторичный фон',
        onDark: 'Вторичный фон на темном фоне',
        onLight: 'Вторичный фон на светлом фоне',
        inverse: 'Инвертированный вторичный фон',
    };

    return tokensCreator({
        darkValue,
        lightValue,
        darkSubGroup: 'dark',
        lightSubGroup: 'light',
        comment,
        enabledAll: false,
    });
};
