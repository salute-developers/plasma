import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getTextPromoMinorTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный промо цвет',
        onDark: 'Минорный промо цвет на темном фоне',
        onLight: 'Минорный промо цвет на светлом фоне',
        inverse: 'Инвертированный минорный промо цвет',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
