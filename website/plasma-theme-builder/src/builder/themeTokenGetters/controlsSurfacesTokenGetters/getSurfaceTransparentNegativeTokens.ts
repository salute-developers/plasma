import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { transparentNegativeTokensCreator } from '../textIconsTokenGetters/getTextTransparentNegativeTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный цвет фона поверхности/контрола ошибка',
    onDark: 'Прозрачный цвет фона поверхности/контрола ошибка на темном фоне',
    onLight: 'Прозрачный цвет фона поверхности/контрола ошибка на светлом фоне',
    inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола ошибка',
};

export const getSurfaceTransparentNegativeTokens = transparentNegativeTokensCreator(comment);
