import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { transparentAccentTokenCreator } from '../textIconsTokenGetters/getTextTransparentAccentTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный акцентный фон поверхности/контрола',
    onDark: 'Прозрачный акцентный фон поверхности/контрола на темном фоне',
    onLight: 'Прозрачный акцентный фон поверхности/контрола на светлом фоне',
    inverse: 'Прозрачный инвертированный акцентный фон поверхности/контрола',
};

export const getSurfaceTransparentAccentTokens = transparentAccentTokenCreator(comment);
