import { TokensByType } from '../../types';
import { warningTokensCreator } from '../textIconsTokenGetters/getTextWarningTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Цвет фона поверхности/контрола предупреждение',
    onDark: 'Цвет фона поверхности/контрола предупреждение на темном фоне',
    onLight: 'Цвет фона поверхности/контрола предупреждение на светлом фоне',
    inverse: 'Инвертированный цвет фона поверхности/контрола предупреждение',
};

export const getSurfaceWarningTokens = warningTokensCreator(comment);
