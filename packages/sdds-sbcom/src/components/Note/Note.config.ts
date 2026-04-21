import { noteTokens as tokens, css } from '@salutejs/plasma-new-hope/styled-components';
import {
    /*
     * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
     * Missing tokens in @salutejs/sdds-themes/tokens: surfaceTransparentInfo, surfaceTransparentNegative
     * surfaceTransparentPositive, surfaceTransparentWarning, textL, textLBold, textM,
     * textMBold, textS, textSBold, textXs
     * textXsBold
     */
    surfaceTransparentSecondary,
    textInfo,
    textNegative,
    textPositive,
    textPrimary,
    textSecondary,
    textSecondaryHover,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: ${surfaceTransparentSecondary};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPrimary};
            `,
            positive: css`
                /* NOTE: no token surfaceTransparentPositive in @salutejs/sdds-themes/tokens */
                ${tokens.background}: var(--surface-transparent-positive);
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPositive};
            `,
            warning: css`
                /* NOTE: no token surfaceTransparentWarning in @salutejs/sdds-themes/tokens */
                ${tokens.background}: var(--surface-transparent-warning);
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textWarning};
            `,
            negative: css`
                /* NOTE: no token surfaceTransparentNegative in @salutejs/sdds-themes/tokens */
                ${tokens.background}: var(--surface-transparent-negative);
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textNegative};
            `,
            info: css`
                /* NOTE: no token surfaceTransparentInfo in @salutejs/sdds-themes/tokens */
                ${tokens.background}: var(--surface-transparent-info);
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textInfo};
            `,
        },
        size: {
            l: css`
                ${tokens.padding}: 1.5rem 1.875rem;
                ${tokens.paddingScalable}: 1.5rem 1.75rem;
                ${tokens.borderRadius}: 0.875rem;
                ${tokens.gap}: 0.75rem;
                ${tokens.gapScalable}: 1rem;
                ${tokens.contentGap}: 0.25rem;

                ${tokens.closeIconTop}: 1rem;
                ${tokens.closeIconRight}: 1rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 2rem;
                ${tokens.fixedContentBeforePadding}: 0.25rem 0;

                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontFamily}: var(--plasma-typo-text-l-font-family);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontSize}: var(--plasma-typo-text-l-font-size);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontStyle}: var(--plasma-typo-text-l-font-style);
                /* NOTE: no token textLBold in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontWeight}: var(--plasma-typo-text-l-bold-font-weight);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.titleLetterSpacing}: var(--plasma-typo-text-l-letter-spacing);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.titleLineHeight}: var(--plasma-typo-text-l-line-height);
                ${tokens.titlePaddingRight}: 1.875rem;

                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.textFontFamily}: var(--plasma-typo-text-l-font-family);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.textFontSize}: var(--plasma-typo-text-l-font-size);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.textFontStyle}: var(--plasma-typo-text-l-font-style);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.textFontWeight}: var(--plasma-typo-text-l-font-weight);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.textLetterSpacing}: var(--plasma-typo-text-l-letter-spacing);
                /* NOTE: no token textL in @salutejs/sdds-themes/tokens */
                ${tokens.textLineHeight}: var(--plasma-typo-text-l-line-height);
            `,
            m: css`
                ${tokens.padding}: 1.25rem 1.5rem;
                ${tokens.paddingScalable}: 1.25rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.gap}: 0.625rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.75rem;
                ${tokens.closeIconRight}: 0.75rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 1.5rem;
                ${tokens.fixedContentBeforePadding}: 0;

                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontFamily}: var(--plasma-typo-text-m-font-family);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontSize}: var(--plasma-typo-text-m-font-size);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontStyle}: var(--plasma-typo-text-m-font-style);
                /* NOTE: no token textMBold in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontWeight}: var(--plasma-typo-text-m-bold-font-weight);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.titleLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.titleLineHeight}: var(--plasma-typo-text-m-line-height);
                ${tokens.titlePaddingRight}: 1.75rem;

                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.textFontFamily}: var(--plasma-typo-text-m-font-family);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.textFontSize}: var(--plasma-typo-text-m-font-size);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.textFontStyle}: var(--plasma-typo-text-m-font-style);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.textFontWeight}: var(--plasma-typo-text-m-font-weight);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.textLetterSpacing}: var(--plasma-typo-text-m-letter-spacing);
                /* NOTE: no token textM in @salutejs/sdds-themes/tokens */
                ${tokens.textLineHeight}: var(--plasma-typo-text-m-line-height);
            `,
            s: css`
                ${tokens.padding}: 1rem 1.25rem;
                ${tokens.paddingScalable}: 1rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.gap}: 0.5rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1.125rem;
                ${tokens.fixedContentBeforePadding}: 0.063rem 0;

                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontFamily}: var(--plasma-typo-text-s-font-family);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontSize}: var(--plasma-typo-text-s-font-size);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontStyle}: var(--plasma-typo-text-s-font-style);
                /* NOTE: no token textSBold in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontWeight}: var(--plasma-typo-text-s-bold-font-weight);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.titleLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.titleLineHeight}: var(--plasma-typo-text-s-line-height);
                ${tokens.titlePaddingRight}: 1.625rem;

                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.textFontFamily}: var(--plasma-typo-text-s-font-family);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.textFontSize}: var(--plasma-typo-text-s-font-size);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.textFontStyle}: var(--plasma-typo-text-s-font-style);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.textFontWeight}: var(--plasma-typo-text-s-font-weight);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.textLetterSpacing}: var(--plasma-typo-text-s-letter-spacing);
                /* NOTE: no token textS in @salutejs/sdds-themes/tokens */
                ${tokens.textLineHeight}: var(--plasma-typo-text-s-line-height);
            `,
            xs: css`
                ${tokens.padding}: 0.75rem 1rem;
                ${tokens.paddingScalable}: 0.75rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.gap}: 0.375rem;
                ${tokens.gapScalable}: 0.5rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1rem;
                ${tokens.closeIconButtonSize}: 1rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1rem;
                ${tokens.fixedContentBeforePadding}: 0;

                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontFamily}: var(--plasma-typo-text-xs-font-family);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontSize}: var(--plasma-typo-text-xs-font-size);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontStyle}: var(--plasma-typo-text-xs-font-style);
                /* NOTE: no token textXsBold in @salutejs/sdds-themes/tokens */
                ${tokens.titleFontWeight}: var(--plasma-typo-text-xs-bold-font-weight);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleLetterSpacing}: var(--plasma-typo-text-xs-letter-spacing);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.titleLineHeight}: var(--plasma-typo-text-xs-line-height);
                ${tokens.titlePaddingRight}: 1.5rem;

                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFontFamily}: var(--plasma-typo-text-xs-font-family);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFontSize}: var(--plasma-typo-text-xs-font-size);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFontStyle}: var(--plasma-typo-text-xs-font-style);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.textFontWeight}: var(--plasma-typo-text-xs-font-weight);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.textLetterSpacing}: var(--plasma-typo-text-xs-letter-spacing);
                /* NOTE: no token textXs in @salutejs/sdds-themes/tokens */
                ${tokens.textLineHeight}: var(--plasma-typo-text-xs-line-height);
            `,
        },
    },
};
