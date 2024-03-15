import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getOutlineAccentGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный цвет обводки с градиентом',
        onDark: 'Акцентный цвет обводки с градиентом на темном фоне',
        onLight: 'Акцентный цвет обводки с градиентом на светлом фоне',
        inverse: 'Инвертированный акцентный цвет обводки с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
