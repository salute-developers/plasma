import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getOutlinePromoTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Промо цвет обводки',
        onDark: 'Промо цвет обводки на темном фоне',
        onLight: 'Промо цвет обводки на светлом фоне',
        inverse: 'Инвертированный промо цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
