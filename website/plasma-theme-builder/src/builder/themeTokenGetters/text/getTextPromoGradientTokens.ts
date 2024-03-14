import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getTextPromoGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Промо цвет с градиентом',
        onDark: 'Промо цвет на темном фоне с градиентом',
        onLight: 'Промо цвет на светлом фоне с градиентом',
        inverse: 'Инвертированный промо цвет с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
