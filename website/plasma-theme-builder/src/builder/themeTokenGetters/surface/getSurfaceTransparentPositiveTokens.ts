import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceTransparentPositiveTokens = () => {
    const opacityValue = -0.72;

    const darkValue = `[general.green.500][${opacityValue}]`;
    const lightValue = `[general.green.500][${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет фона поверхности/контрола успех',
        onDark: 'Прозрачный цвет фона поверхности/контрола успех на темном фоне',
        onLight: 'Прозрачный цвет фона поверхности/контрола успех на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола успех',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
