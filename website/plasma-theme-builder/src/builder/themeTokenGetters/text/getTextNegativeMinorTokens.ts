import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextNegativeMinorTokens = () => {
    const darkValue = '[general.red.800]';
    const lightValue = '[general.red.300]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет ошибки',
        onDark: 'Минорный цвет ошибки на темном фоне',
        onLight: 'Минорный цвет ошибки на светлом фоне',
        inverse: 'Инвертированный минорный цвет ошибки',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
