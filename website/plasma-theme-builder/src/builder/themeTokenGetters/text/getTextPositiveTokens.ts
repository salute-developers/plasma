import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextPositiveTokens = () => {
    const darkValue = '[general.green.500]';
    const lightValue = '[general.green.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет успеха',
        onDark: 'Цвет успеха на темном фоне',
        onLight: 'Цвет успеха на светлом фоне',
        inverse: 'Инвертированный цвет успеха',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
