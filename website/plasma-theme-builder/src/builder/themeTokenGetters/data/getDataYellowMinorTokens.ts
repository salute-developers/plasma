import type { TokensByType } from '@salutejs/plasma-tokens-utils';
import { tokensCreator } from '../../../utils';

export const getDataYellowMinorTokens = () => {
    const darkValue = '[general.amber.700]';
    const lightValue = '[general.amber.200]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный желтый цвет для данных',
        onDark: 'Минорный желтый цвет для данных на темном фоне',
        onLight: 'Минорный желтый цвет для данных на светлом фоне',
        inverse: 'Инвертированный минорный желтый цвет для данных',
    };

    return tokensCreator({
        darkValue,
        lightValue,
        comment,
    });
};
