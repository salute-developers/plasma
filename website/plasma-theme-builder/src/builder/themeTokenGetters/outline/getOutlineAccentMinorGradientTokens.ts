import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getOutlineAccentMinorGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный минорный цвет обводки с градиентом',
        onDark: 'Акцентный минорный цвет обводки с градиентом на темном фоне',
        onLight: 'Акцентный минорный цвет обводки с градиентом на светлом фоне',
        inverse: 'Инвертированный акцентный минорный цвет обводки с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
