import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getTextPromoMinorGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный промо цвет с градиентом',
        onDark: 'Минорный промо цвет на темном фоне с градиентом',
        onLight: 'Минорный промо цвет на светлом фоне с градиентом',
        inverse: 'Инвертированный минорный промо цвет с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
