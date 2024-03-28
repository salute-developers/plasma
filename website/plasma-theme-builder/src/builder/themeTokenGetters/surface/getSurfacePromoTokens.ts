import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfacePromoTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Промо фон поверхности/контрола',
        onDark: 'Промо фон поверхности/контрола на темном фоне',
        onLight: 'Промо фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный промо фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
