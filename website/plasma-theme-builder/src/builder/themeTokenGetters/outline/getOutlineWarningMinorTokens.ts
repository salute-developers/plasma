import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineWarningMinorTokens = () => {
    const darkValue = '[general.orange.800]';
    const lightValue = '[general.orange.300]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет обводки предупреждение',
        onDark: 'Минорный цвет обводки предупреждение на темном фоне',
        onLight: 'Минорный цвет обводки предупреждение на светлом фоне',
        inverse: 'Инвертированный минорный цвет обводки предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
