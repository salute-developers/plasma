import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceInfoTokens = () => {
    const darkValue = '[general.blue.500]';
    const lightValue = '[general.blue.500]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола информация',
        onDark: 'Цвет фона поверхности/контрола информация на темном фоне',
        onLight: 'Цвет фона поверхности/контрола информация на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
