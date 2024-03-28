import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getOutlinePromoMinorGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный промо цвет обводки с градиентом',
        onDark: 'Минорный промо цвет обводки с градиентом на темном фоне',
        onLight: 'Минорный промо цвет обводки с градиентом на светлом фоне',
        inverse: 'Инвертированный минорный промо цвет обводки с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
