import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextPositiveMinorTokens = () => {
    const darkValue = '[general.green.800]';
    const lightValue = '[general.green.300]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет успеха',
        onDark: 'Минорный цвет успеха на темном фоне',
        onLight: 'Минорный цвет успеха на светлом фоне',
        inverse: 'Инвертированный минорный цвет успеха',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
