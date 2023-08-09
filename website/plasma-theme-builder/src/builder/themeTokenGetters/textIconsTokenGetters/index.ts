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
import { getTextTransparentAccentTokens } from './getTextTransparentAccentTokens';
import { getTextTransparentAccentGradientTokens } from './getTextTransparentAccentGradientTokens';
import { getTextTransparentNegativeTokens } from './getTextTransparentNegativeTokens';
import { getTextTransparentPositiveTokens } from './getTextTransparentPositiveTokens';
import { getTextTransparentWarningTokens } from './getTextTransparentWarningTokens';

// TODO: Удалить после релиза пакета plasma-tokens-utils
type NewTokens =
    | 'textTransparentAccent'
    | 'textTransparentAccentGradient'
    | 'textTransparentPositive'
    | 'textTransparentWarning'
    | 'textTransparentNegative';
type TextIconsTokenNameExtend = TextIconsTokenName | NewTokens;

export const textIconsTokenGetters: Record<TextIconsTokenNameExtend, TokensGetterFn> = {
    textAccent: getTextAccentTokens,
    textAccentGradient: getTextAccentGradientTokens,
    textNegative: getTextNegativeTokens,
    textParagraph: getTextParagraphTokens,
    textPositive: getTextPositiveTokens,
    textPrimary: getTextPrimaryTokens,
    textSecondary: getTextSecondaryTokens,
    textTertiary: getTextTertiaryTokens,
    textWarning: getTextWarningTokens,
    textTransparentAccent: getTextTransparentAccentTokens,
    textTransparentAccentGradient: getTextTransparentAccentGradientTokens,
    textTransparentNegative: getTextTransparentNegativeTokens,
    textTransparentPositive: getTextTransparentPositiveTokens,
    textTransparentWarning: getTextTransparentWarningTokens,
};
