import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfaceAccentMinorGradientTokens = () => {
    const darkValue = baseColors.white.value;
    const lightValue = baseColors.white.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Акцентный минорный фон поверхности/контрола с градиентом',
        onDark: 'Акцентный минорный фон поверхности/контрола с градиентом на темном фоне',
        onLight: 'Акцентный минорный фон поверхности/контрола с градиентом на светлом фоне',
        inverse: 'Инвертированный акцентный минорный фон поверхности/контрола с градиентом',
    };

    return tokensCreator({ darkValue, lightValue, comment, enabledAll: false });
};
