import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { accentGradientCreator } from '../textIconsTokenGetters/getTextAccentGradient';

const comment: Record<keyof TokensByType, string> = {
    default: 'Акцентный фон поверхности/контрола с градиентом',
    onDark: 'Акцентный фон поверхности/контрола с градиентом на темном фоне',
    onLight: 'Акцентный фон поверхности/контрола с градиентом на светлом фоне',
    inverse: 'Инвертированный акцентный фон поверхности/контрола с градиентом',
};

export const getSurfaceAccentGradient = accentGradientCreator(comment);
