import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { tokensCreator } from '../../../utils';

export const getSurfaceTransparentInfoTokens = () => {
    const opacityValue = -0.72;

    const darkValue = `[general.blue.500][${opacityValue}]`;
    const lightValue = `[general.blue.500][${opacityValue}]`;

    const comment: Record<keyof TokensByType, string> = {
        default: 'Прозрачный цвет фона поверхности/контрола информация',
        onDark: 'Прозрачный цвет фона поверхности/контрола информация на темном фоне',
        onLight: 'Прозрачный цвет фона поверхности/контрола информация на светлом фоне',
        inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола информация',
    };

    return tokensCreator({ darkValue, lightValue, comment });
};
