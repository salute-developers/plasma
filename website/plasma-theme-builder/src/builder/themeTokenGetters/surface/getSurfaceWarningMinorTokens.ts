import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceWarningMinorTokens = () => {
    const darkValue = '[general.orange.900]';
    const lightValue = '[general.orange.200]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет фона поверхности/контрола предупреждение',
        onDark: 'Минорный цвет фона поверхности/контрола предупреждение на темном фоне',
        onLight: 'Минорный цвет фона поверхности/контрола предупреждение на светлом фоне',
        inverse: 'Инвертированный минорный цвет фона поверхности/контрола предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
