import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextWarningMinorTokens = () => {
    const darkValue = '[general.orange.150]';
    const lightValue = '[general.orange.900]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет предупреждения',
        onDark: 'Минорный цвет предупреждения на темном фоне',
        onLight: 'Минорный цвет предупреждения на светлом фоне',
        inverse: 'Инвертированный минорный цвет предупреждения',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
