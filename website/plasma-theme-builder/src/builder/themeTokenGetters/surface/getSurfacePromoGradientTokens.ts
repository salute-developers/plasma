import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfacePromoGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Промо фон поверхности/контрола с градиентом',
        onDark: 'Промо фон поверхности/контрола с градиентом на темном фоне',
        onLight: 'Промо фон поверхности/контрола с градиентом на светлом фоне',
        inverse: 'Инвертированный промо фон поверхности/контрола с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
