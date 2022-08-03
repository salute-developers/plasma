import { BackgroundName, TokensGetterFn } from '../../types';
import { getBackgroundPrimaryTokens } from './getBackgroundPrimaryTokens';
import { getBackgroundSecondaryTokens } from './getBackgroundSecondaryTokens';
import { getBackgroundTertiaryTokens } from './getBackgroundTertiaryTokens';

export const backgroundTokenGetters: Record<BackgroundName, TokensGetterFn> = {
    backgroundPrimary: getBackgroundPrimaryTokens,
    backgroundSecondary: getBackgroundSecondaryTokens,
    backgroundTertiary: getBackgroundTertiaryTokens,
};
