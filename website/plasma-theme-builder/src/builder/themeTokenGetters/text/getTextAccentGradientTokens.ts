import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

const comment: Record<keyof TokensByType, string> = {
    default: 'Акцентный цвет с градиентом',
    onDark: 'Акцентный цвет с градиентом на темном фоне',
    onLight: 'Акцентный цвет с градиентом на светлом фоне',
    inverse: 'Инвертированный акцентный цвет с градиентом',
};

export const getTextAccentGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
