import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlinePositiveMinorTokens = () => {
    const darkValue = '[general.green.800]';
    const lightValue = '[general.green.300]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Минорный цвет обводки успех',
        onDark: 'Минорный цвет обводки успех на темном фоне',
        onLight: 'Минорный цвет обводки успех на светлом фоне',
        inverse: 'Инвертированный минорный цвет обводки успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
