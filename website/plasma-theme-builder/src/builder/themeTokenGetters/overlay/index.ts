import { OverlayName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getOverlayHardTokens } from './getOverlayHardTokens';
import { getOverlaySoftTokens } from './getOverlaySoftTokens';
import { getOverlayBlurTokens } from './getOverlayBlurTokens';

type OverlayNameExtend = OverlayName | 'overlayBlur';

export const overlayTokenGetters: Record<OverlayNameExtend, TokensGetterFn> = {
    overlaySoft: getOverlaySoftTokens,
    overlayHard: getOverlayHardTokens,
    overlayBlur: getOverlayBlurTokens,
};
