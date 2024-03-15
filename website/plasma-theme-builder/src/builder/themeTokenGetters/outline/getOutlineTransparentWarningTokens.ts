import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineTransparentWarningTokens = () => {
    const opacityValue = -0.72;

    const darkValue = `[general.orange.500][${opacityValue}]`;
    const lightValue = `[general.orange.600][${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки предупреждение',
        onDark: 'Прозрачный цвет обводки предупреждение на темном фоне',
        onLight: 'Прозрачный цвет обводки предупреждение на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет обводки предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
