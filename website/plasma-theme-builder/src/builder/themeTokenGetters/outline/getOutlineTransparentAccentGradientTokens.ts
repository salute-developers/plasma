import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getOutlineTransparentAccentGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный акцентный цвет обводки с градиентом',
        onDark: 'Прозрачный акцентный цвет обводки с градиентом на темном фоне',
        onLight: 'Прозрачный акцентный цвет обводки с градиентом на светлом фоне',
        inverse: 'Прозрачный инвертированный акцентный цвет обводки с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
