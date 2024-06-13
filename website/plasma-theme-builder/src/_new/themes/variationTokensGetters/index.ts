import { getHoverAndActiveColorThemeTokens } from './getHoverAndActiveColorThemeTokens';
import { getHoverAndActiveGradientAndroidThemeTokens } from './getHoverAndActiveGradientAndroidThemeTokens';
import { getHoverAndActiveGradientIOSThemeTokens } from './getHoverAndActiveGradientIOSThemeTokens';
import { getHoverAndActiveGradientWebThemeTokens } from './getHoverAndActiveGradientWebThemeTokens';
import { ExtraThemeTokensGetters } from '../createVariationTokens';

export const extraThemeTokenGetters: ExtraThemeTokensGetters = {
    color: {
        web: getHoverAndActiveColorThemeTokens,
        ios: getHoverAndActiveColorThemeTokens,
        android: getHoverAndActiveColorThemeTokens,
    },
    gradient: {
        web: getHoverAndActiveGradientWebThemeTokens,
        ios: getHoverAndActiveGradientIOSThemeTokens,
        android: getHoverAndActiveGradientAndroidThemeTokens,
    },
};
