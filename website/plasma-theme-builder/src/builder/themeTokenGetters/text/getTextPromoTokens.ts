import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getTextPromoTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Промо цвет',
        onDark: 'Промо цвет на темном фоне',
        onLight: 'Промо цвет на светлом фоне',
        inverse: 'Инвертированный промо цвет',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
