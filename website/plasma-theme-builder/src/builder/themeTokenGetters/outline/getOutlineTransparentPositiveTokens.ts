import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getOutlineTransparentPositiveTokens = () => {
    const opacityValue = -0.72;

    const darkValue = `[general.green.500][${opacityValue}]`;
    const lightValue = `[general.green.600][${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет обводки успех',
        onDark: 'Прозрачный цвет обводки успех на темном фоне',
        onLight: 'Прозрачный цвет обводки успех на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет обводки успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
