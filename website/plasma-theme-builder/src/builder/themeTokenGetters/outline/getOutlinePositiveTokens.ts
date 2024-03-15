import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlinePositiveTokens = () => {
    const darkValue = '[general.green.500]';
    const lightValue = '[general.green.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки успех',
        onDark: 'Цвет обводки успех на темном фоне',
        onLight: 'Цвет обводки успех на светлом фоне',
        inverse: 'Инвертированный цвет обводки успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
