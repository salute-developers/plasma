import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineTransparentInfoTokens = () => {
    const opacityValue = -0.72;

    const darkValue = `[general.blue.500][${opacityValue}]`;
    const lightValue = `[general.blue.600][${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки информация',
        onDark: 'Прозрачный цвет обводки информация на темном фоне',
        onLight: 'Прозрачный цвет обводки информация на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет обводки информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
