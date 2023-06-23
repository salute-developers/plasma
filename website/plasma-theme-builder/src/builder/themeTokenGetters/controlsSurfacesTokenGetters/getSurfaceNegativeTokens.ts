import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { negativeTokensCreator } from '../textIconsTokenGetters/getTextNegativeTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Цвет фона поверхности/контрола ошибка',
    onDark: 'Цвет фона поверхности/контрола ошибка на темном фоне',
    onLight: 'Цвет фона поверхности/контрола ошибка на светлом фоне',
    inverse: 'Инвертированный цвет фона поверхности/контрола ошибка',
};

export const getSurfaceNegativeTokens = negativeTokensCreator(comment);
