import { TokensByType, alphenColor } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';
import { baseColors } from '../../../types';

export const getSurfaceTransparentCardTokens = () => {
    const darkValue = alphenColor(baseColors.white.value, -0.94);
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный фон для карточек',
        onDark: 'Прозрачный фон для карточек на темном фоне',
        onLight: 'Прозрачный фон для карточек на светлом фоне',
        inverse: 'Инвертированный прозрачный фон для карточек',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
