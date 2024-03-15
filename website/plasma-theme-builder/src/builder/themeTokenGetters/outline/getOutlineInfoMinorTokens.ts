import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineInfoMinorTokens = () => {
    const darkValue = '[general.blue.850]';
    const lightValue = '[general.blue.250]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет обводки информация',
        onDark: 'Минорный цвет обводки информация на темном фоне',
        onLight: 'Минорный цвет обводки информация на светлом фоне',
        inverse: 'Инвертированный минорный цвет обводки информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
