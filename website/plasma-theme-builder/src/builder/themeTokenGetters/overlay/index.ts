import { OverlayName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getOverlayHardTokens } from './getOverlayHardTokens';
import { getOverlaySoftTokens } from './getOverlaySoftTokens';

export const overlayTokenGetters: Record<OverlayName, TokensGetterFn> = {
    overlaySoft: getOverlaySoftTokens,
    overlayHard: getOverlayHardTokens,
};
