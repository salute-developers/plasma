import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineTransparentNegativeTokens = () => {
    const opacityValue = -0.72;

    const darkValue = `[general.red.500][${opacityValue}]`;
    const lightValue = `[general.red.600][${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки предупреждение',
        onDark: 'Прозрачный цвет обводки предупреждение на темном фоне',
        onLight: 'Прозрачный цвет обводки предупреждение на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет обводки предупреждение',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
