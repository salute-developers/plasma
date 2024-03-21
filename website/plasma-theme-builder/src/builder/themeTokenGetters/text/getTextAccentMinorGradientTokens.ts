import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getTextAccentMinorGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный минорный цвет с градиентом',
        onDark: 'Акцентный минорный цвет с градиентом на темном фоне',
        onLight: 'Акцентный минорный цвет с градиентом на светлом фоне',
        inverse: 'Инвертированный акцентный минорный цвет с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
