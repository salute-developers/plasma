import { TextIconsTokenName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getTextAccentTokens } from './getTextAccentTokens';
import { getTextAccentGradientTokens } from './getTextAccentGradientTokens';
import { getTextNegativeTokens } from './getTextNegativeTokens';
import { getTextParagraphTokens } from './getTextParagraphTokens';
import { getTextPositiveTokens } from './getTextPositiveTokens';
import { getTextPrimaryTokens } from './getTextPrimaryTokens';
import { getTextSecondaryTokens } from './getTextSecondaryTokens';
import { getTextTertiaryTokens } from './getTextTertiaryTokens';
import { getTextWarningTokens } from './getTextWarningTokens';

export const textTokenGetters: Record<TextIconsTokenName, TokensGetterFn> = {
    textAccent: getTextAccentTokens,
    textAccentGradient: getTextAccentGradientTokens,
    textNegative: getTextNegativeTokens,
    textParagraph: getTextParagraphTokens,
    textPositive: getTextPositiveTokens,
    textPrimary: getTextPrimaryTokens,
    textSecondary: getTextSecondaryTokens,
    textTertiary: getTextTertiaryTokens,
    textWarning: getTextWarningTokens,
};
