import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getTextWarningTokens = () => {
    const darkValue = '[general.orange.500]';
    const lightValue = '[general.orange.600]';

    const comment: Record<keyof TokensByType, string> = {
        default: 'Цвет предупреждения',
        onDark: 'Цвет предупреждения на темном фоне',
        onLight: 'Цвет предупреждения на светлом фоне',
        inverse: 'Инвертированный цвет предупреждения',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
