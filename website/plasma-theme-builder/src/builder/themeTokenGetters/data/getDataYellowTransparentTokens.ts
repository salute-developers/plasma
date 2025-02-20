import type { TokensByType } from '@salutejs/plasma-tokens-utils';
import { tokensCreator } from '../../../utils';

export const getDataYellowTransparentTokens = () => {
    const darkValue = '[general.amber.300][-0.44]';
    const lightValue = '[general.amber.300][-0.44]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный желтый цвет для данных',
        onDark: 'Прозрачный желтый цвет для данных на темном фоне',
        onLight: 'Прозрачный желтый цвет для данных на светлом фоне',
        inverse: 'Инвертированный прозрачный желтый цвет для данных',
    };

    return tokensCreator({
        darkValue,
        lightValue,
        comment,
    });
};
