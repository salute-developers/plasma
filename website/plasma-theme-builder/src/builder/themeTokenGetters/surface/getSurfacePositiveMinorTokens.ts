import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfacePositiveMinorTokens = () => {
    const darkValue = '[general.green.900]';
    const lightValue = '[general.green.150]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет фона поверхности/контрола успех',
        onDark: 'Минорный цвет фона поверхности/контрола успех на темном фоне',
        onLight: 'Минорный цвет фона поверхности/контрола успех на светлом фоне',
        inverse: 'Инвертированный минорный цвет фона поверхности/контрола успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
