import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getSurfaceTransparentPromoTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный промо фон поверхности/контрола',
        onDark: 'Прозрачный промо фон поверхности/контрола на темном фоне',
        onLight: 'Прозрачный промо фон поверхности/контрола на светлом фоне',
        inverse: 'Инвертированный прозрачный промо фон поверхности/контрола',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
