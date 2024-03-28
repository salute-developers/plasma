import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfaceTransparentPromoGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный промо фон поверхности/контрола с градиентом',
        onDark: 'Прозрачный промо фон поверхности/контрола с градиентом на темном фоне',
        onLight: 'Прозрачный промо фон поверхности/контрола с градиентом на светлом фоне',
        inverse: 'Инвертированный прозрачный промо фон поверхности/контрола с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
