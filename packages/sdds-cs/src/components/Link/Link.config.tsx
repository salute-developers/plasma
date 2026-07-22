import {
    textAccent,
    textAccentActive,
    textAccentMinor,
    textM,
    textNegative,
    textNegativeActive,
    textNegativeHover,
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
} from '@salutejs/sdds-themes/tokens/sdds_cs';
import { css, linkTokens as tokens } from '@salutejs/plasma-new-hope/emotion';

export const config = {
    defaults: {
        view: 'default',
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
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            secondary: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textSecondary};
                ${tokens.linkColorHover}: ${textSecondaryHover};
                ${tokens.linkColorActive}: ${textSecondaryActive};
                ${tokens.linkColorVisited}: ${textSecondary};
                ${tokens.linkColorVisitedHover}: ${textSecondaryHover};
                ${tokens.linkColorVisitedActive}: ${textSecondaryActive};
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            tertiary: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textTertiary};
                ${tokens.linkColorHover}: ${textTertiaryHover};
                ${tokens.linkColorActive}: ${textTertiaryActive};
                ${tokens.linkColorVisited}: ${textTertiary};
                ${tokens.linkColorVisitedHover}: ${textTertiaryHover};
                ${tokens.linkColorVisitedActive}: ${textTertiaryActive};
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            paragraph: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: var(--text-paragraph);
                ${tokens.linkColorHover}: var(--text-paragraph-hover);
                ${tokens.linkColorActive}: var(--text-paragraph-active);
                ${tokens.linkColorVisited}: var(--text-paragraph);
                ${tokens.linkColorVisitedHover}: var(--text-paragraph-hover);
                ${tokens.linkColorVisitedActive}: var(--text-paragraph-active);
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            accent: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textAccent};
                ${tokens.linkColorHover}: ${textAccentMinor};
                ${tokens.linkColorActive}: ${textAccentActive};
                ${tokens.linkColorVisited}: ${textAccent};
                ${tokens.linkColorVisitedHover}: ${textAccentMinor};
                ${tokens.linkColorVisitedActive}: ${textAccentActive};
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            positive: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textPositive};
                ${tokens.linkColorHover}: ${textPositiveHover};
                ${tokens.linkColorActive}: ${textPositiveActive};
                ${tokens.linkColorVisited}: ${textPositive};
                ${tokens.linkColorVisitedHover}: ${textPositiveHover};
                ${tokens.linkColorVisitedActive}: ${textPositiveActive};
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            warning: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textWarning};
                ${tokens.linkColorHover}: ${textWarningHover};
                ${tokens.linkColorActive}: ${textWarningActive};
                ${tokens.linkColorVisited}: ${textWarning};
                ${tokens.linkColorVisitedHover}: ${textWarningHover};
                ${tokens.linkColorVisitedActive}: ${textWarningActive};
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            negative: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}: ${textNegative};
                ${tokens.linkColorHover}: ${textNegativeHover};
                ${tokens.linkColorActive}: ${textNegativeActive};
                ${tokens.linkColorVisited}: ${textNegative};
                ${tokens.linkColorVisitedHover}: ${textNegativeHover};
                ${tokens.linkColorVisitedActive}: ${textNegativeActive};
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
            clear: css`
                ${tokens.linkFontFamily}: ${textM.fontFamily};
                ${tokens.linkColor}:inherit;
                ${tokens.linkColorHover}: inherit;
                ${tokens.linkColorActive}: inherit;
                ${tokens.linkColorVisited}: inherit;
                ${tokens.linkColorVisitedHover}: inherit;
                ${tokens.linkColorVisitedActive}: inherit;
                ${tokens.linkUnderlineBorder}: 0.063rem;
                ${tokens.linkUnderlineOffset}: 0.25rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.linkDisabledOpacity}: 0.4;
            `,
        },
        focused: {
            true: css`
                ${tokens.linkColorFocus}: ${textPrimary};
            `,
        },
    },
};
