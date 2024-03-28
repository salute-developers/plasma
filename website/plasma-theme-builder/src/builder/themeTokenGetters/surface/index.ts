import type { ControlsSurfacesName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getSurfaceSolidPrimaryTokens } from './getSurfaceSolidPrimaryTokens';
import { getSurfaceSolidSecondaryTokens } from './getSurfaceSolidSecondaryTokens';
import { getSurfaceSolidTertiaryTokens } from './getSurfaceSolidTertiaryTokens';
import { getSurfaceSolidCardTokens } from './getSurfaceSolidCardTokens';
import { getSurfaceSolidDefaultTokens } from './getSurfaceSolidDefaultTokens';
import { getSurfaceTransparentPrimaryTokens } from './getSurfaceTransparentPrimaryTokens';
import { getSurfaceTransparentSecondaryTokens } from './getSurfaceTransparentSecondaryTokens';
import { getSurfaceTransparentTertiaryTokens } from './getSurfaceTransparentTertiaryTokens';
import { getSurfaceTransparentDeepTokens } from './getSurfaceTransparentDeepTokens';
import { getSurfaceTransparentCardTokens } from './getSurfaceTransparentCardTokens';
import { getSurfaceClearTokens } from './getSurfaceClearTokens';
import { getSurfaceAccentTokens } from './getSurfaceAccentTokens';
import { getSurfaceAccentGradientTokens } from './getSurfaceAccentGradientTokens';
import { getSurfaceAccentMinorTokens } from './getSurfaceAccentMinorTokens';
import { getSurfaceAccentMinorGradientTokens } from './getSurfaceAccentMinorGradientTokens';
import { getSurfaceTransparentAccentTokens } from './getSurfaceTransparentAccentTokens';
import { getSurfaceTransparentAccentGradientTokens } from './getSurfaceTransparentAccentGradientTokens';
import { getSurfacePromoTokens } from './getSurfacePromoTokens';
import { getSurfacePromoGradientTokens } from './getSurfacePromoGradientTokens';
import { getSurfacePromoMinorTokens } from './getSurfacePromoMinorTokens';
import { getSurfacePromoMinorGradientTokens } from './getSurfacePromoMinorGradientTokens';
import { getSurfaceTransparentPromoTokens } from './getSurfaceTransparentPromoTokens';
import { getSurfaceTransparentPromoGradientTokens } from './getSurfaceTransparentPromoGradientTokens';
import { getSurfacePositiveTokens } from './getSurfacePositiveTokens';
import { getSurfaceWarningTokens } from './getSurfaceWarningTokens';
import { getSurfaceNegativeTokens } from './getSurfaceNegativeTokens';
import { getSurfaceInfoTokens } from './getSurfaceInfoTokens';
import { getSurfacePositiveMinorTokens } from './getSurfacePositiveMinorTokens';
import { getSurfaceWarningMinorTokens } from './getSurfaceWarningMinorTokens';
import { getSurfaceNegativeMinorTokens } from './getSurfaceNegativeMinorTokens';
import { getSurfaceInfoMinorTokens } from './getSurfaceInfoMinorTokens';
import { getSurfaceTransparentNegativeTokens } from './getSurfaceTransparentNegativeTokens';
import { getSurfaceTransparentPositiveTokens } from './getSurfaceTransparentPositiveTokens';
import { getSurfaceTransparentWarningTokens } from './getSurfaceTransparentWarningTokens';
import { getSurfaceTransparentInfoTokens } from './getSurfaceTransparentInfoTokens';

export const surfaceTokenGetters: Record<ControlsSurfacesName, TokensGetterFn> = {
    // General
    surfaceSolidPrimary: getSurfaceSolidPrimaryTokens,
    surfaceSolidSecondary: getSurfaceSolidSecondaryTokens,
    surfaceSolidTertiary: getSurfaceSolidTertiaryTokens,
    surfaceSolidCard: getSurfaceSolidCardTokens,
    surfaceSolidDefault: getSurfaceSolidDefaultTokens,
    surfaceTransparentPrimary: getSurfaceTransparentPrimaryTokens,
    surfaceTransparentSecondary: getSurfaceTransparentSecondaryTokens,
    surfaceTransparentTertiary: getSurfaceTransparentTertiaryTokens,
    surfaceTransparentDeep: getSurfaceTransparentDeepTokens,
    surfaceTransparentCard: getSurfaceTransparentCardTokens,
    surfaceClear: getSurfaceClearTokens,
    // Accent
    surfaceAccent: getSurfaceAccentTokens,
    surfaceAccentGradient: getSurfaceAccentGradientTokens,
    surfaceAccentMinor: getSurfaceAccentMinorTokens,
    surfaceAccentMinorGradient: getSurfaceAccentMinorGradientTokens,
    surfaceTransparentAccent: getSurfaceTransparentAccentTokens,
    surfaceTransparentAccentGradient: getSurfaceTransparentAccentGradientTokens,
    surfacePromo: getSurfacePromoTokens,
    surfacePromoGradient: getSurfacePromoGradientTokens,
    surfacePromoMinor: getSurfacePromoMinorTokens,
    surfacePromoMinorGradient: getSurfacePromoMinorGradientTokens,
    surfaceTransparentPromo: getSurfaceTransparentPromoTokens,
    surfaceTransparentPromoGradient: getSurfaceTransparentPromoGradientTokens,
    // Status
    surfacePositive: getSurfacePositiveTokens,
    surfaceWarning: getSurfaceWarningTokens,
    surfaceNegative: getSurfaceNegativeTokens,
    surfaceInfo: getSurfaceInfoTokens,
    surfacePositiveMinor: getSurfacePositiveMinorTokens,
    surfaceWarningMinor: getSurfaceWarningMinorTokens,
    surfaceNegativeMinor: getSurfaceNegativeMinorTokens,
    surfaceInfoMinor: getSurfaceInfoMinorTokens,
    surfaceTransparentPositive: getSurfaceTransparentPositiveTokens,
    surfaceTransparentWarning: getSurfaceTransparentWarningTokens,
    surfaceTransparentNegative: getSurfaceTransparentNegativeTokens,
    surfaceTransparentInfo: getSurfaceTransparentInfoTokens,
};
