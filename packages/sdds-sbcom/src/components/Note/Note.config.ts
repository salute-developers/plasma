import { css, noteTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    surfaceTransparentNegative,
    surfaceTransparentSecondary,
    textInfo,
    h2,
    h2Bold,
    h4,
    h4Bold,
    textNegative,
    textPositive,
    textPrimary,
    bodyS,
    bodySBold,
    bodyXS,
    bodyXSBold,
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
        orientation: 'vertical',
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

                ${tokens.paddingBottomWithActionContent}: 0.4375rem;

                ${tokens.closeIconTop}: 1rem;
                ${tokens.closeIconRight}: 1rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 2rem;
                ${tokens.fixedContentBeforePadding}: 0.25rem 0rem;

                ${tokens.titleFontFamily}: ${h2.fontFamily};
                ${tokens.titleFontSize}: ${h2.fontSize};
                ${tokens.titleFontStyle}: ${h2.fontStyle};
                ${tokens.titleFontWeight}: ${h2Bold.fontWeight};
                ${tokens.titleLetterSpacing}: ${h2.letterSpacing};
                ${tokens.titleLineHeight}: ${h2.lineHeight};
                ${tokens.titlePaddingRight}: 1.875rem;

                ${tokens.textFontFamily}: ${h2.fontFamily};
                ${tokens.textFontSize}: ${h2.fontSize};
                ${tokens.textFontStyle}: ${h2.fontStyle};
                ${tokens.textFontWeight}: ${h2.fontWeight};
                ${tokens.textLetterSpacing}: ${h2.letterSpacing};
                ${tokens.textLineHeight}: ${h2.lineHeight};
            `,
            m: css`
                ${tokens.padding}: 1.25rem 1.5rem;
                ${tokens.paddingScalable}: 1.25rem;
                ${tokens.borderRadius}: 0.75rem;
                ${tokens.gap}: 0.625rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.paddingBottomWithActionContent}: 0.5rem;

                ${tokens.closeIconTop}: 0.75rem;
                ${tokens.closeIconRight}: 0.75rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1.5rem;
                ${tokens.fixedContentBeforeHeight}: 1.625rem;
                ${tokens.fixedContentBeforePadding}: 0rem;

                ${tokens.titleFontFamily}: ${h4.fontFamily};
                ${tokens.titleFontSize}: ${h4.fontSize};
                ${tokens.titleFontStyle}: ${h4.fontStyle};
                ${tokens.titleFontWeight}: ${h4Bold.fontWeight};
                ${tokens.titleLetterSpacing}: ${h4.letterSpacing};
                ${tokens.titleLineHeight}: ${h4.lineHeight};
                ${tokens.titlePaddingRight}: 1.75rem;

                ${tokens.textFontFamily}: ${h4.fontFamily};
                ${tokens.textFontSize}: ${h4.fontSize};
                ${tokens.textFontStyle}: ${h4.fontStyle};
                ${tokens.textFontWeight}: ${h4.fontWeight};
                ${tokens.textLetterSpacing}: ${h4.letterSpacing};
                ${tokens.textLineHeight}: ${h4.lineHeight};
            `,
            s: css`
                ${tokens.padding}: 1rem 1.25rem;
                ${tokens.paddingScalable}: 1rem;
                ${tokens.borderRadius}: 0.625rem;
                ${tokens.gap}: 0.5rem;
                ${tokens.gapScalable}: 0.75rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.paddingBottomWithActionContent}: 0.3125rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1.5rem;
                ${tokens.closeIconButtonSize}: 1.5rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1.125rem;
                ${tokens.fixedContentBeforePadding}: 0.063rem 0rem;

                ${tokens.titleFontFamily}: ${bodyS.fontFamily};
                ${tokens.titleFontSize}: ${bodyS.fontSize};
                ${tokens.titleFontStyle}: ${bodyS.fontStyle};
                ${tokens.titleFontWeight}: ${bodySBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyS.lineHeight};
                ${tokens.titlePaddingRight}: 1.625rem;

                ${tokens.textFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFontSize}: ${bodyS.fontSize};
                ${tokens.textFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFontWeight}: ${bodyS.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${tokens.padding}: 0.75rem 1rem;
                ${tokens.paddingScalable}: 0.75rem;
                ${tokens.borderRadius}: 0.5rem;
                ${tokens.gap}: 0.375rem;
                ${tokens.gapScalable}: 0.5rem;
                ${tokens.contentGap}: 0.125rem;

                ${tokens.paddingBottomWithActionContent}: 0.1875rem;

                ${tokens.closeIconTop}: 0.625rem;
                ${tokens.closeIconRight}: 0.625rem;
                ${tokens.closeIconColor}: ${textSecondary};
                ${tokens.closeIconColorOnHover}: ${textSecondaryHover};
                ${tokens.closeIconSize}: 1rem;
                ${tokens.closeIconButtonSize}: 1rem;

                ${tokens.fixedContentBeforeWidth}: 1rem;
                ${tokens.fixedContentBeforeHeight}: 1rem;
                ${tokens.fixedContentBeforePadding}: 0rem;

                ${tokens.titleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.titleFontSize}: ${bodyXS.fontSize};
                ${tokens.titleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.titleFontWeight}: ${bodyXSBold.fontWeight};
                ${tokens.titleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.titleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.titlePaddingRight}: 1.5rem;

                ${tokens.textFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFontSize}: ${bodyXS.fontSize};
                ${tokens.textFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textLineHeight}: ${bodyXS.lineHeight};
            `,
        },
        orientation: {
            vertical: css``,
            horizontal: css``,
        },
    },
    intersections: [
        {
            size: 'l',
            orientation: 'horizontal',
            style: css`
                ${tokens.actionContentMargin}: -0.5rem 0rem 0rem 1rem;
                ${tokens.closeIconMargin}: 0.4375rem 0rem 0rem 1.25rem;
            `,
        },
        {
            size: 'm',
            orientation: 'horizontal',
            style: css`
                ${tokens.actionContentMargin}: -0.6875rem 0rem 0rem 1rem;
                ${tokens.closeIconMargin}: 0.0625rem 0rem 0rem 1.25rem;
            `,
        },
        {
            size: 's',
            orientation: 'horizontal',
            style: css`
                ${tokens.actionContentMargin}: -0.625rem 0rem 0rem 0.75rem;
                ${tokens.closeIconMargin}: -0.125rem 0rem 0rem 0.875rem;
            `,
        },
        {
            size: 'xs',
            orientation: 'horizontal',
            style: css`
                ${tokens.actionContentMargin}: -0.5rem 0rem 0rem 0.75rem;
                ${tokens.closeIconMargin}: -0.0625rem 0rem 0rem 0.875rem;
            `,
        },
    ],
};
