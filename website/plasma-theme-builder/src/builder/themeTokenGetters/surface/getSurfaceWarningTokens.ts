import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceWarningTokens = () => {
    const darkValue = '[general.orange.500]';
    const lightValue = '[general.orange.500]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет фона поверхности/контрола предупреждение',
        onDark: 'Цвет фона поверхности/контрола предупреждение на темном фоне',
        onLight: 'Цвет фона поверхности/контрола предупреждение на светлом фоне',
        inverse: 'Инвертированный цвет фона поверхности/контрола предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
