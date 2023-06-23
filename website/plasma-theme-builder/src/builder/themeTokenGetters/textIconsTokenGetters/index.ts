import { TextIconsTokenName, TokensGetterFn } from '@salutejs/plasma-tokens-utils';

import { getTextAccentGradient } from './getTextAccentGradient';
import { getTextAccentTokens } from './getTextAccentTokens';
import { getTextNegativeTokens } from './getTextNegativeTokens';
import { getTextParagraphTokens } from './getTextParagraphTokens';
import { getTextPositiveTokens } from './getTextPositiveTokens';
import { getTextPrimaryTokens } from './getTextPrimaryTokens';
import { getTextSecondaryTokens } from './getTextSecondaryTokens';
import { getTextTertiaryTokens } from './getTextTertiaryTokens';
import { getTextWarningTokens } from './getTextWarningTokens';

export const textIconsTokenGetters: Record<TextIconsTokenName, TokensGetterFn> = {
    textPrimary: getTextPrimaryTokens,
    textSecondary: getTextSecondaryTokens,
    textTertiary: getTextTertiaryTokens,
    textParagraph: getTextParagraphTokens,
    textAccent: getTextAccentTokens,
    textAccentGradient: getTextAccentGradient,
    textPositive: getTextPositiveTokens,
    textWarning: getTextWarningTokens,
    textNegative: getTextNegativeTokens,
};
