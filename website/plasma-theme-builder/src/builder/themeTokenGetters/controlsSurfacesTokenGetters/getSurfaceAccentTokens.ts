import { TokensByType } from '../../types';
import { accentTokenCreator } from '../textIconsTokenGetters/getTextAccentTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Акцентный фон поверхности/контрола',
    onDark: 'Акцентный фон поверхности/контрола на темном фоне',
    onLight: 'Акцентный фон поверхности/контрола на светлом фоне',
    inverse: 'Инвертированный акцентный фон поверхности/контрола',
};

export const getSurfaceAccentTokens = accentTokenCreator(comment);
