import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getSurfaceClearTokens = () => {
    const darkValue = baseColors.clear.value;
    const lightValue = baseColors.clear.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Фон поверхности/контрола без заливки',
        onDark: 'Фон поверхности/контрола без заливки на темном фоне',
        onLight: 'Фон поверхности/контрола без заливки на светлом фоне',
        inverse: 'Инвертированный фон поверхности/контрола без заливки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
