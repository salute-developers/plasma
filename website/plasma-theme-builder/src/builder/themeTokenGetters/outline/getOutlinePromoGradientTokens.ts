import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getOutlinePromoGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Промо цвет обводки с градиентом',
        onDark: 'Промо цвет обводки с градиентом на темном фоне',
        onLight: 'Промо цвет обводки с градиентом на светлом фоне',
        inverse: 'Инвертированный промо цвет обводки с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
