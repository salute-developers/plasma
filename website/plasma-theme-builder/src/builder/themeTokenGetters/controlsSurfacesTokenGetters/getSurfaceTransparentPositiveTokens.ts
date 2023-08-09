import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { transparentPositiveTokensCreator } from '../textIconsTokenGetters/getTextTransparentPositiveTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный цвет фона поверхности/контрола успех',
    onDark: 'Прозрачный цвет фона поверхности/контрола успех на темном фоне',
    onLight: 'Прозрачный цвет фона поверхности/контрола успех на светлом фоне',
    inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола успех',
};

export const getSurfaceTransparentPositiveTokens = transparentPositiveTokensCreator(comment);
