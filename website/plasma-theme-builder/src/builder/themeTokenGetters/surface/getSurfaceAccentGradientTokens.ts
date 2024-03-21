import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfaceAccentGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный фон поверхности/контрола с градиентом',
        onDark: 'Акцентный фон поверхности/контрола с градиентом на темном фоне',
        onLight: 'Акцентный фон поверхности/контрола с градиентом на светлом фоне',
        inverse: 'Инвертированный акцентный фон поверхности/контрола с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
