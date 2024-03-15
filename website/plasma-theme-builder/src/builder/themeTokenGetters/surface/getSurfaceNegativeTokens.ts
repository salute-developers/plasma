import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceNegativeTokens = () => {
    const darkValue = '[general.red.500]';
    const lightValue = '[general.red.500]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола ошибка',
        onDark: 'Цвет фона поверхности/контрола ошибка на темном фоне',
        onLight: 'Цвет фона поверхности/контрола ошибка на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола ошибка',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
