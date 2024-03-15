import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfacePositiveTokens = () => {
    const darkValue = '[general.green.500]';
    const lightValue = '[general.green.500]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола успех',
        onDark: 'Цвет фона поверхности/контрола успех на темном фоне',
        onLight: 'Цвет фона поверхности/контрола успех на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
