import type { ControlsSurfacesName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getSurfaceAccentTokens } from './getSurfaceAccentTokens';
import { getSurfaceAccentGradientTokens } from './getSurfaceAccentGradientTokens';
import { getSurfaceClearTokens } from './getSurfaceClearTokens';
import { getSurfaceNegativeTokens } from './getSurfaceNegativeTokens';
import { getSurfacePositiveTokens } from './getSurfacePositiveTokens';
import { getSurfaceWarningTokens } from './getSurfaceWarningTokens';
import { getSurfaceSolidCardTokens } from './getSurfaceSolidCardTokens';
import { getSurfaceSolidDefaultTokens } from './getSurfaceSolidDefaultTokens';
import { getSurfaceSolidPrimaryTokens } from './getSurfaceSolidPrimaryTokens';
import { getSurfaceSolidSecondaryTokens } from './getSurfaceSolidSecondaryTokens';
import { getSurfaceSolidTertiaryTokens } from './getSurfaceSolidTertiaryTokens';
import { getSurfaceTransparentAccentTokens } from './getSurfaceTransparentAccentTokens';
import { getSurfaceTransparentAccentGradientTokens } from './getSurfaceTransparentAccentGradientTokens';
import { getSurfaceTransparentCardTokens } from './getSurfaceTransparentCardTokens';
import { getSurfaceTransparentDeepTokens } from './getSurfaceTransparentDeepTokens';
import { getSurfaceTransparentNegativeTokens } from './getSurfaceTransparentNegativeTokens';
import { getSurfaceTransparentPositiveTokens } from './getSurfaceTransparentPositiveTokens';
import { getSurfaceTransparentPrimaryTokens } from './getSurfaceTransparentPrimaryTokens';
import { getSurfaceTransparentSecondaryTokens } from './getSurfaceTransparentSecondaryTokens';
import { getSurfaceTransparentTertiaryTokens } from './getSurfaceTransparentTertiaryTokens';
import { getSurfaceTransparentWarningTokens } from './getSurfaceTransparentWarningTokens';

// TODO: Удалить после релиза пакета plasma-tokens-utils
type NewTokens =
    | 'surfaceTransparentDeep'
    | 'surfaceTransparentAccent'
    | 'surfaceTransparentAccentGradient'
    | 'surfaceTransparentPositive'
    | 'surfaceTransparentWarning'
    | 'surfaceTransparentNegative';
type ControlsSurfacesNameExtend = Exclude<ControlsSurfacesName, 'surfaceTransparentDefault'> | NewTokens;

export const controlsSurfacesTokenGetters: Record<ControlsSurfacesNameExtend, TokensGetterFn> = {
    surfaceAccent: getSurfaceAccentTokens,
    surfaceAccentGradient: getSurfaceAccentGradientTokens,
    surfaceClear: getSurfaceClearTokens,
    surfaceNegative: getSurfaceNegativeTokens,
    surfacePositive: getSurfacePositiveTokens,
    surfaceWarning: getSurfaceWarningTokens,
    surfaceSolidDefault: getSurfaceSolidDefaultTokens,
    surfaceSolidPrimary: getSurfaceSolidPrimaryTokens,
    surfaceSolidSecondary: getSurfaceSolidSecondaryTokens,
    surfaceSolidTertiary: getSurfaceSolidTertiaryTokens,
    surfaceSolidCard: getSurfaceSolidCardTokens,
    surfaceTransparentAccent: getSurfaceTransparentAccentTokens,
    surfaceTransparentAccentGradient: getSurfaceTransparentAccentGradientTokens,
    surfaceTransparentCard: getSurfaceTransparentCardTokens,
    surfaceTransparentDeep: getSurfaceTransparentDeepTokens,
    surfaceTransparentNegative: getSurfaceTransparentNegativeTokens,
    surfaceTransparentPositive: getSurfaceTransparentPositiveTokens,
    surfaceTransparentPrimary: getSurfaceTransparentPrimaryTokens,
    surfaceTransparentSecondary: getSurfaceTransparentSecondaryTokens,
    surfaceTransparentTertiary: getSurfaceTransparentTertiaryTokens,
    surfaceTransparentWarning: getSurfaceTransparentWarningTokens,
};
