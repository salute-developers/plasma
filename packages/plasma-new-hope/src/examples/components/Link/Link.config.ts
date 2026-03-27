import {
    textAccent,
    textAccentActive,
    textAccentHover,
    textM,
    textNegative,
    textNegativeActive,
    textNegativeHover,
    textParagraph,
    textParagraphActive,
    textParagraphHover,
    textPositive,
    textPositiveActive,
    textPositiveHover,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textSecondaryActive,
    textSecondaryHover,
    textTertiary,
    textTertiaryActive,
    textTertiaryHover,
    textWarning,
    textWarningActive,
    textWarningHover,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { tokens } from '../../../components/Link/Link.tokens';

export const config = {
    defaults: {
        view: 'accent',
        focused: 'true',
    },
    variations: {
        view: {
            default: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textPrimary};
                ${tokens.linkColorHover}: ${textPrimaryHover};
                ${tokens.linkColorActive}: ${textPrimaryActive};
                ${tokens.linkColorVisited}: ${textPrimary};
                ${tokens.linkColorVisitedHover}: ${textPrimaryHover};
                ${tokens.linkColorVisitedActive}: ${textPrimaryActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            secondary: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textSecondary};
                ${tokens.linkColorHover}: ${textSecondaryHover};
                ${tokens.linkColorActive}: ${textSecondaryActive};
                ${tokens.linkColorVisited}: ${textSecondary};
                ${tokens.linkColorVisitedHover}: ${textSecondaryHover};
                ${tokens.linkColorVisitedActive}: ${textSecondaryActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            tertiary: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textTertiary};
                ${tokens.linkColorHover}: ${textTertiaryHover};
                ${tokens.linkColorActive}: ${textTertiaryActive};
                ${tokens.linkColorVisited}: ${textTertiary};
                ${tokens.linkColorVisitedHover}: ${textTertiaryHover};
                ${tokens.linkColorVisitedActive}: ${textTertiaryActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            paragraph: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textParagraph};
                ${tokens.linkColorHover}: ${textParagraphHover};
                ${tokens.linkColorActive}: ${textParagraphActive};
                ${tokens.linkColorVisited}: ${textParagraph};
                ${tokens.linkColorVisitedHover}: ${textParagraphHover};
                ${tokens.linkColorVisitedActive}: ${textParagraphActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            accent: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textAccent};
                ${tokens.linkColorHover}: ${textAccentHover};
                ${tokens.linkColorActive}: ${textAccentActive};
                ${tokens.linkColorVisited}: ${textAccent};
                ${tokens.linkColorVisitedHover}: ${textAccentHover};
                ${tokens.linkColorVisitedActive}: ${textAccentActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            positive: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textPositive};
                ${tokens.linkColorHover}: ${textPositiveHover};
                ${tokens.linkColorActive}: ${textPositiveActive};
                ${tokens.linkColorVisited}: ${textPositive};
                ${tokens.linkColorVisitedHover}: ${textPositiveHover};
                ${tokens.linkColorVisitedActive}: ${textPositiveActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            warning: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textWarning};
                ${tokens.linkColorHover}: ${textWarningHover};
                ${tokens.linkColorActive}: ${textWarningActive};
                ${tokens.linkColorVisited}: ${textWarning};
                ${tokens.linkColorVisitedHover}: ${textWarningHover};
                ${tokens.linkColorVisitedActive}: ${textWarningActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            negative: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textNegative};
                ${tokens.linkColorHover}: ${textNegativeHover};
                ${tokens.linkColorActive}: ${textNegativeActive};
                ${tokens.linkColorVisited}: ${textNegative};
                ${tokens.linkColorVisitedHover}: ${textNegativeHover};
                ${tokens.linkColorVisitedActive}: ${textNegativeActive};
                ${tokens.linkUnderlineBorder}: 0;
            `,
            clear: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}:inherit;
                ${tokens.linkColorHover}: inherit;
                ${tokens.linkColorActive}: inherit;
                ${tokens.linkColorVisited}: inherit;
                ${tokens.linkColorVisitedHover}: inherit;
                ${tokens.linkColorVisitedActive}: inherit;
                ${tokens.linkUnderlineBorder}: 0.0625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.linkDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${tokens.linkColorFocus}: ${textAccent};
            `,
        },
    },
};
