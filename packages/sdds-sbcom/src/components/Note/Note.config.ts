import { css, noteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceTransparentNegative,
    surfaceTransparentSecondary,
    textInfo,
    textL,
    textLBold,
    textM,
    textMBold,
    textNegative,
    textPositive,
    textPrimary,
    textS,
    textSBold,
    textSecondary,
    textSecondaryHover,
    textWarning,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: surfaceTransparentInfo, surfaceTransparentPositive
 * surfaceTransparentWarning, textXs, textXsBold
 */
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
                ${tokens.background}: var(--surface-transparent-positive);
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textPositive};
            `,
            warning: css`
                ${tokens.background}: var(--surface-transparent-warning);
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textWarning};
            `,
            negative: css`
                ${tokens.background}: ${surfaceTransparentNegative};
                ${tokens.color}: ${textPrimary};
                ${tokens.contentBeforeColor}: ${textNegative};
            `,
            info: css`
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

                ${tokens.titleFontFamily}: ${textL.fontFamily};
                ${tokens.titleFontSize}: ${textL.fontSize};
                ${tokens.titleFontStyle}: ${textL.fontStyle};
                ${tokens.titleFontWeight}: ${textLBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textL.letterSpacing};
                ${tokens.titleLineHeight}: ${textL.lineHeight};
                ${tokens.titlePaddingRight}: 1.875rem;

                ${tokens.textFontFamily}: ${textL.fontFamily};
                ${tokens.textFontSize}: ${textL.fontSize};
                ${tokens.textFontStyle}: ${textL.fontStyle};
                ${tokens.textFontWeight}: ${textL.fontWeight};
                ${tokens.textLetterSpacing}: ${textL.letterSpacing};
                ${tokens.textLineHeight}: ${textL.lineHeight};
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

                ${tokens.titleFontFamily}: ${textM.fontFamily};
                ${tokens.titleFontSize}: ${textM.fontSize};
                ${tokens.titleFontStyle}: ${textM.fontStyle};
                ${tokens.titleFontWeight}: ${textMBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textM.letterSpacing};
                ${tokens.titleLineHeight}: ${textM.lineHeight};
                ${tokens.titlePaddingRight}: 1.75rem;

                ${tokens.textFontFamily}: ${textM.fontFamily};
                ${tokens.textFontSize}: ${textM.fontSize};
                ${tokens.textFontStyle}: ${textM.fontStyle};
                ${tokens.textFontWeight}: ${textM.fontWeight};
                ${tokens.textLetterSpacing}: ${textM.letterSpacing};
                ${tokens.textLineHeight}: ${textM.lineHeight};
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

                ${tokens.titleFontFamily}: ${textS.fontFamily};
                ${tokens.titleFontSize}: ${textS.fontSize};
                ${tokens.titleFontStyle}: ${textS.fontStyle};
                ${tokens.titleFontWeight}: ${textSBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${textS.letterSpacing};
                ${tokens.titleLineHeight}: ${textS.lineHeight};
                ${tokens.titlePaddingRight}: 1.625rem;

                ${tokens.textFontFamily}: ${textS.fontFamily};
                ${tokens.textFontSize}: ${textS.fontSize};
                ${tokens.textFontStyle}: ${textS.fontStyle};
                ${tokens.textFontWeight}: ${textS.fontWeight};
                ${tokens.textLetterSpacing}: ${textS.letterSpacing};
                ${tokens.textLineHeight}: ${textS.lineHeight};
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
