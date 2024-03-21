import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextNegativeTokens = () => {
    const darkValue = '[general.red.500]';
    const lightValue = '[general.red.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет ошибки',
        onDark: 'Цвет ошибки на темном фоне',
        onLight: 'Цвет ошибки на светлом фоне',
        inverse: 'Инвертированный цвет ошибки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
