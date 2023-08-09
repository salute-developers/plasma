import type { TokensByType } from '@salutejs/plasma-tokens-utils';

import { transparentWarningTokensCreator } from '../textIconsTokenGetters/getTextTransparentWarningTokens';

const comment: Record<keyof TokensByType, string> = {
    default: 'Прозрачный цвет фона поверхности/контрола предупреждение',
    onDark: 'Прозрачный цвет фона поверхности/контрола предупреждение на темном фоне',
    onLight: 'Прозрачный цвет фона поверхности/контрола предупреждение на светлом фоне',
    inverse: 'Прозрачный инвертированный цвет фона поверхности/контрола предупреждение',
};

export const getSurfaceTransparentWarningTokens = transparentWarningTokensCreator(comment);
