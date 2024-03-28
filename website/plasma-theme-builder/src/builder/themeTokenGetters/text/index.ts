import { TextIconsTokenName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getTextPrimaryTokens } from './getTextPrimaryTokens';
import { getTextSecondaryTokens } from './getTextSecondaryTokens';
import { getTextTertiaryTokens } from './getTextTertiaryTokens';
import { getTextParagraphTokens } from './getTextParagraphTokens';
import { getTextAccentTokens } from './getTextAccentTokens';
import { getTextAccentGradientTokens } from './getTextAccentGradientTokens';
import { getTextAccentMinorTokens } from './getTextAccentMinorTokens';
import { getTextAccentMinorGradientTokens } from './getTextAccentMinorGradientTokens';
import { getTextPromoTokens } from './getTextPromoTokens';
import { getTextPromoGradientTokens } from './getTextPromoGradientTokens';
import { getTextPromoMinorTokens } from './getTextPromoMinorTokens';
import { getTextPromoMinorGradientTokens } from './getTextPromoMinorGradientTokens';
import { getTextPositiveTokens } from './getTextPositiveTokens';
import { getTextWarningTokens } from './getTextWarningTokens';
import { getTextNegativeTokens } from './getTextNegativeTokens';
import { getTextInfoTokens } from './getTextInfoTokens';
import { getTextPositiveMinorTokens } from './getTextPositiveMinorTokens';
import { getTextWarningMinorTokens } from './getTextWarningMinorTokens';
import { getTextNegativeMinorTokens } from './getTextNegativeMinorTokens';
import { getTextInfoMinorTokens } from './getTextInfoMinorTokens';

export const textTokenGetters: Record<TextIconsTokenName, TokensGetterFn> = {
    // General
    textPrimary: getTextPrimaryTokens,
    textSecondary: getTextSecondaryTokens,
    textTertiary: getTextTertiaryTokens,
    textParagraph: getTextParagraphTokens,
    // Accent
    textAccent: getTextAccentTokens,
    textAccentGradient: getTextAccentGradientTokens,
    textAccentMinor: getTextAccentMinorTokens,
    textAccentMinorGradient: getTextAccentMinorGradientTokens,
    textPromo: getTextPromoTokens,
    textPromoGradient: getTextPromoGradientTokens,
    textPromoMinor: getTextPromoMinorTokens,
    textPromoMinorGradient: getTextPromoMinorGradientTokens,
    // Status
    textPositive: getTextPositiveTokens,
    textWarning: getTextWarningTokens,
    textNegative: getTextNegativeTokens,
    textInfo: getTextInfoTokens,
    textPositiveMinor: getTextPositiveMinorTokens,
    textWarningMinor: getTextWarningMinorTokens,
    textNegativeMinor: getTextNegativeMinorTokens,
    textInfoMinor: getTextInfoMinorTokens,
};
