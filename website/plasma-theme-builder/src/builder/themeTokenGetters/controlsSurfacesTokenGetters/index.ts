import { getSurfaceAccentGradient } from './getSurfaceAccentGradient';
import { getSurfaceAccentTokens } from './getSurfaceAccentTokens';
import { getSurfaceClearTokens } from './getSurfaceClearTokens';
import { getSurfaceNegativeTokens } from './getSurfaceNegativeTokens';
import { getSurfacePositiveTokens } from './getSurfacePositiveTokens';
import { getSurfaceSolidCardTokens } from './getSurfaceSolidCardTokens';
import { getSurfaceSolidDefaultTokens } from './getSurfaceSolidDefaultTokens';
import { getSurfaceSolidPrimaryTokens } from './getSurfaceSolidPrimaryTokens';
import { getSurfaceSolidSecondaryTokens } from './getSurfaceSolidSecondaryTokens';
import { getSurfaceSolidTertiaryTokens } from './getSurfaceSolidTertiaryTokens';
import { getSurfaceTransparentCardTokens } from './getSurfaceTransparentCardTokens';
import { getSurfaceTransparentDefaultTokens } from './getSurfaceTransparentDefaultTokens';
import { getSurfaceTransparentPrimaryTokens } from './getSurfaceTransparentPrimaryTokens';
import { getSurfaceTransparentSecondaryTokens } from './getSurfaceTransparentSecondaryTokens';
import { getSurfaceTransparentTertiaryTokens } from './getSurfaceTransparentTertiaryTokens';
import { ControlsSurfacesName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getSurfaceWarningTokens } from './getSurfaceWarningTokens';

export const controlsSurfacesTokenGetters: Record<ControlsSurfacesName, TokensGetterFn> = {
    surfaceSolidDefault: getSurfaceSolidDefaultTokens,
    surfaceSolidPrimary: getSurfaceSolidPrimaryTokens,
    surfaceSolidSecondary: getSurfaceSolidSecondaryTokens,
    surfaceSolidTertiary: getSurfaceSolidTertiaryTokens,
    surfaceSolidCard: getSurfaceSolidCardTokens,
    surfaceTransparentDefault: getSurfaceTransparentDefaultTokens,
    surfaceTransparentPrimary: getSurfaceTransparentPrimaryTokens,
    surfaceTransparentSecondary: getSurfaceTransparentSecondaryTokens,
    surfaceTransparentTertiary: getSurfaceTransparentTertiaryTokens,
    surfaceTransparentCard: getSurfaceTransparentCardTokens,
    surfaceAccent: getSurfaceAccentTokens,
    surfaceAccentGradient: getSurfaceAccentGradient,
    surfacePositive: getSurfacePositiveTokens,
    surfaceWarning: getSurfaceWarningTokens,
    surfaceNegative: getSurfaceNegativeTokens,
    surfaceClear: getSurfaceClearTokens,
};
