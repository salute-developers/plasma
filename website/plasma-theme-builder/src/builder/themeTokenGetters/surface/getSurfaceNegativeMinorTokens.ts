import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceNegativeMinorTokens = () => {
    const darkValue = '[general.red.900]';
    const lightValue = '[general.red.200]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет фона поверхности/контрола ошибка',
        onDark: 'Минорный цвет фона поверхности/контрола ошибка на темном фоне',
        onLight: 'Минорный цвет фона поверхности/контрола ошибка на светлом фоне',
        inverse: 'Инвертированный минорный цвет фона поверхности/контрола ошибка',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
