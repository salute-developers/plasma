import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfaceTransparentAccentGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный акцентный фон поверхности/контрола с градиентом',
        onDark: 'Прозрачный акцентный фон поверхности/контрола с градиентом на темном фоне',
        onLight: 'Прозрачный акцентный фон поверхности/контрола с градиентом на светлом фоне',
        inverse: 'Прозрачный инвертированный акцентный фон поверхности/контрола с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
