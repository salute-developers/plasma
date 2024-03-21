import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextInfoTokens = () => {
    const darkValue = '[general.blue.500]';
    const lightValue = '[general.blue.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет информации',
        onDark: 'Цвет информации на темном фоне',
        onLight: 'Цвет информации на светлом фоне',
        inverse: 'Инвертированный цвет информации',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
