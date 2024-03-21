import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextInfoMinorTokens = () => {
    const darkValue = '[general.blue.150]';
    const lightValue = '[general.blue.900]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет информации',
        onDark: 'Минорный цвет информации на темном фоне',
        onLight: 'Минорный цвет информации на светлом фоне',
        inverse: 'Инвертированный минорный цвет информации',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
