import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getBackgroundTertiaryTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Третичный фон',
        onDark: 'Третичный фон на темном фоне',
        onLight: 'Третичный фон на светлом фоне',
        inverse: 'Инвертированный третичный фон',
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
