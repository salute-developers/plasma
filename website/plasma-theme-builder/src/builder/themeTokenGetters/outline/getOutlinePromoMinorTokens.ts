import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getOutlinePromoMinorTokens = (config: ThemeConfig) => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный промо цвет обводки',
        onDark: 'Минорный промо цвет обводки на темном фоне',
        onLight: 'Минорный промо цвет обводки на светлом фоне',
        inverse: 'Инвертированный минорный промо цвет обводки',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
