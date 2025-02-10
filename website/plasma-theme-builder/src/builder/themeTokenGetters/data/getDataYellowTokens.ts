import type { TokensByType } from '@salutejs/plasma-tokens-utils';
import { tokensCreator } from '../../../utils';

export const getDataYellowTokens = () => {
    const darkValue = '[general.amber.300]';
    const lightValue = '[general.amber.300]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Желтый цвет для данных',
        onDark: 'Желтый цвет для данных на темном фоне',
        onLight: 'Желтый цвет для данных на светлом фоне',
        inverse: 'Инвертированный желтый цвет для данных',
    };

    return tokensCreator({
        darkValue,
        lightValue,
        comment,
    });
};
