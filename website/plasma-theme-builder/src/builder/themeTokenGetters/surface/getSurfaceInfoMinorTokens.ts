import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceInfoMinorTokens = () => {
    const darkValue = '[general.blue.900]';
    const lightValue = '[general.blue.150]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет фона поверхности/контрола информация',
        onDark: 'Минорный цвет фона поверхности/контрола информация на темном фоне',
        onLight: 'Минорный цвет фона поверхности/контрола информация на светлом фоне',
        inverse: 'Инвертированный минорный цвет фона поверхности/контрола информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
