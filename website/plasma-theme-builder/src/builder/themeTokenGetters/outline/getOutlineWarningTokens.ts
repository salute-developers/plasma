import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineWarningTokens = () => {
    const darkValue = '[general.orange.500]';
    const lightValue = '[general.orange.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет обводки предупреждение',
        onDark: 'Цвет обводки предупреждение на темном фоне',
        onLight: 'Цвет обводки предупреждение на светлом фоне',
        inverse: 'Инвертированный цвет обводки предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
