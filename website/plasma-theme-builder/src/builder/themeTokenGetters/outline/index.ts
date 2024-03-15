import type { OutlineName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getOutlineSolidPrimaryTokens } from './getOutlineSolidPrimaryTokens';
import { getOutlineSolidSecondaryTokens } from './getOutlineSolidSecondaryTokens';
import { getOutlineSolidTertiaryTokens } from './getOutlineSolidTertiaryTokens';
import { getOutlineTransparentDefaultTokens } from './getOutlineTransparentDefaultTokens';
import { getOutlineTransparentPrimaryTokens } from './getOutlineTransparentPrimaryTokens';
import { getOutlineTransparentSecondaryTokens } from './getOutlineTransparentSecondaryTokens';
import { getOutlineTransparentTertiaryTokens } from './getOutlineTransparentTertiaryTokens';
import { getOutlineClearTokens } from './getOutlineClearTokens';
import { getOutlineAccentTokens } from './getOutlineAccentTokens';
import { getOutlineAccentGradientTokens } from './getOutlineAccentGradientTokens';
import { getOutlineAccentMinorTokens } from './getOutlineAccentMinorTokens';
import { getOutlineAccentMinorGradientTokens } from './getOutlineAccentMinorGradientTokens';
import { getOutlineTransparentAccentTokens } from './getOutlineTransparentAccentTokens';
import { getOutlineTransparentAccentGradientTokens } from './getOutlineTransparentAccentGradientTokens';
import { getOutlinePromoTokens } from './getOutlinePromoTokens';
import { getOutlinePromoGradientTokens } from './getOutlinePromoGradientTokens';
import { getOutlinePromoMinorTokens } from './getOutlinePromoMinorTokens';
import { getOutlinePromoMinorGradientTokens } from './getOutlinePromoMinorGradientTokens';
import { getOutlinePositiveTokens } from './getOutlinePositiveTokens';
import { getOutlineWarningTokens } from './getOutlineWarningTokens';
import { getOutlineNegativeTokens } from './getOutlineNegativeTokens';
import { getOutlineInfoTokens } from './getOutlineInfoTokens';
import { getOutlinePositiveMinorTokens } from './getOutlinePositiveMinorTokens';
import { getOutlineWarningMinorTokens } from './getOutlineWarningMinorTokens';
import { getOutlineNegativeMinorTokens } from './getOutlineNegativeMinorTokens';
import { getOutlineInfoMinorTokens } from './getOutlineInfoMinorTokens';
import { getOutlineTransparentNegativeTokens } from './getOutlineTransparentNegativeTokens';
import { getOutlineTransparentPositiveTokens } from './getOutlineTransparentPositiveTokens';
import { getOutlineTransparentWarningTokens } from './getOutlineTransparentWarningTokens';
import { getOutlineTransparentInfoTokens } from './getOutlineTransparentInfoTokens';

export const outlineTokenGetters: Record<OutlineName, TokensGetterFn> = {
    // General
    outlineSolidPrimary: getOutlineSolidPrimaryTokens,
    outlineSolidSecondary: getOutlineSolidSecondaryTokens,
    outlineSolidTertiary: getOutlineSolidTertiaryTokens,
    outlineTransparentDefault: getOutlineTransparentDefaultTokens,
    outlineTransparentPrimary: getOutlineTransparentPrimaryTokens,
    outlineTransparentSecondary: getOutlineTransparentSecondaryTokens,
    outlineTransparentTertiary: getOutlineTransparentTertiaryTokens,
    outlineClear: getOutlineClearTokens,
    // Accent
    outlineAccent: getOutlineAccentTokens,
    outlineAccentGradient: getOutlineAccentGradientTokens,
    outlineAccentMinor: getOutlineAccentMinorTokens,
    outlineAccentMinorGradient: getOutlineAccentMinorGradientTokens,
    outlineTransparentAccent: getOutlineTransparentAccentTokens,
    outlineTransparentAccentGradient: getOutlineTransparentAccentGradientTokens,
    outlinePromo: getOutlinePromoTokens,
    outlinePromoGradient: getOutlinePromoGradientTokens,
    outlinePromoMinor: getOutlinePromoMinorTokens,
    outlinePromoMinorGradient: getOutlinePromoMinorGradientTokens,
    // Status
    outlinePositive: getOutlinePositiveTokens,
    outlineWarning: getOutlineWarningTokens,
    outlineNegative: getOutlineNegativeTokens,
    outlineInfo: getOutlineInfoTokens,
    outlinePositiveMinor: getOutlinePositiveMinorTokens,
    outlineWarningMinor: getOutlineWarningMinorTokens,
    outlineNegativeMinor: getOutlineNegativeMinorTokens,
    outlineInfoMinor: getOutlineInfoMinorTokens,
    outlineTransparentPositive: getOutlineTransparentPositiveTokens,
    outlineTransparentWarning: getOutlineTransparentWarningTokens,
    outlineTransparentNegative: getOutlineTransparentNegativeTokens,
    outlineTransparentInfo: getOutlineTransparentInfoTokens,
};
