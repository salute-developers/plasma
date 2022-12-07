import { TokensGetterFn } from '../../types';
import { getOverlayHardTokens } from './getOverlayHardTokens';
import { getOverlaySoftTokens } from './getOverlaySoftTokens';

export type OverlayName = 'overlaySoft' | 'overlayHard';

export const overlayTokenGetters: Record<OverlayName, TokensGetterFn> = {
    overlaySoft: getOverlaySoftTokens,
    overlayHard: getOverlayHardTokens,
};
