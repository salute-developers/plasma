import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineNegativeMinorTokens = () => {
    const darkValue = '[general.red.850]';
    const lightValue = '[general.red.250]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет обводки ошибка',
        onDark: 'Минорный цвет обводки ошибка на темном фоне',
        onLight: 'Минорный цвет обводки ошибка на светлом фоне',
        inverse: 'Инвертированный минорный цвет обводки ошибка',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
