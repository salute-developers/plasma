import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { transparentAccentGradientCreator } from '../textIconsTokenGetters/getTextTransparentAccentGradientTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный акцентный фон поверхности/контрола с градиентом',
    onDark: 'Прозрачный акцентный фон поверхности/контрола с градиентом на темном фоне',
    onLight: 'Прозрачный акцентный фон поверхности/контрола с градиентом на светлом фоне',
    inverse: 'Прозрачный инвертированный акцентный фон поверхности/контрола с градиентом',
};

export const getSurfaceTransparentAccentGradientTokens = transparentAccentGradientCreator(comment);
