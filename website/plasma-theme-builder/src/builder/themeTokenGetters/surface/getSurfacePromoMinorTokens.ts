import type { TokensByType, ThemeConfig } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getSurfacePromoMinorTokens = (config: ThemeConfig) => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный промо фон поверхности/контрола',
        onDark: 'Минорный промо фон поверхности/контрола на темном фоне',
        onLight: 'Минорный промо фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный минорный промо фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
