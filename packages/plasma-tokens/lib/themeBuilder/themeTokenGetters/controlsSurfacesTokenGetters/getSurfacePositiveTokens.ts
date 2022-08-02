import { TokensByType } from '../../types';
import { positiveTokensCreator } from '../textIconsTokenGetters/getTextPositiveTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Цвет фона поверхности/контрола успех',
    onDark: 'Цвет фона поверхности/контрола успех на темном фоне',
    onLight: 'Цвет фона поверхности/контрола успех на светлом фоне',
    inverse: 'Инвертированный цвет фона поверхности/контрола успех',
};

export const getSurfacePositiveTokens = positiveTokensCreator(comment);
