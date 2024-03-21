import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { baseColors } from '../../../types';
import { tokensCreator } from '../../../utils';

export const getOutlineClearTokens = () => {
    const darkValue = baseColors.clear.value;
    const lightValue = baseColors.clear.value;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Бесцветная обводка',
        onDark: 'Бесцветная обводка на темном фоне',
        onLight: 'Бесцветная обводка на светлом фоне',
        inverse: 'Инвертированная бесцветная обводка',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
