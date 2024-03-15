import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineNegativeTokens = () => {
    const darkValue = '[general.red.500]';
    const lightValue = '[general.red.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки ошибка',
        onDark: 'Цвет обводки ошибка на темном фоне',
        onLight: 'Цвет обводки ошибка на светлом фоне',
        inverse: 'Инвертированный цвет обводки ошибка',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
