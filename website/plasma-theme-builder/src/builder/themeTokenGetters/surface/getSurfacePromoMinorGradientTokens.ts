import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfacePromoMinorGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный промо фон поверхности/контрола с градиентом',
        onDark: 'Минорный промо фон поверхности/контрола с градиентом на темном фоне',
        onLight: 'Минорный промо фон поверхности/контрола с градиентом на светлом фоне',
        inverse: 'Инвертированный минорный промо фон поверхности/контрола с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
