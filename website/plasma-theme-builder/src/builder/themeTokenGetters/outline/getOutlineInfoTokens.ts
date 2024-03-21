import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineInfoTokens = () => {
    const darkValue = '[general.blue.500]';
    const lightValue = '[general.blue.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки информация',
        onDark: 'Цвет обводки информация на темном фоне',
        onLight: 'Цвет обводки информация на светлом фоне',
        inverse: 'Инвертированный цвет обводки информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
