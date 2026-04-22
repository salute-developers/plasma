import { css, ratingTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyLBold,
    bodyM,
    bodyMBold,
    bodyS,
    bodySBold,
    dsplS,
    dsplSBold,
    h1,
    h1Bold,
    h2,
    h2Bold,
    h3,
    h3Bold,
    h4,
    h4Bold,
    textPrimary,
    textSecondary,
    textTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs, bodyXsBold, bodyXxs, bodyXxsBold, dsplL, dsplLBold, dsplM
 * dsplMBold, h5, h5Bold, h6, h6Bold
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'l',
    },
    variations: {
        view: {
            default: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.helperTextColor}: ${textSecondary};
                ${tokens.iconColor}: ${textPrimary};
                ${tokens.outlineIconColor}: ${textPrimary};
            `,
            accent: css`
                ${tokens.color}: ${textPrimary};
                ${tokens.helperTextColor}: ${textSecondary};
                // TODO: change with token data-yellow, when it will be added to theme
                ${tokens.iconColor}: #F3A912;
                ${tokens.outlineIconColor}: ${textTertiary};
            `,
        },
        size: {
            l: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyL.fontFamily};
                ${tokens.fontSize}: ${bodyL.fontSize};
                ${tokens.fontStyle}: ${bodyL.fontStyle};
                ${tokens.fontWeight}: ${bodyLBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyL.letterSpacing};
                ${tokens.lineHeight}: ${bodyL.lineHeight};

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1.25rem;
            `,
            m: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyM.fontFamily};
                ${tokens.fontSize}: ${bodyM.fontSize};
                ${tokens.fontStyle}: ${bodyM.fontStyle};
                ${tokens.fontWeight}: ${bodyMBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyM.letterSpacing};
                ${tokens.lineHeight}: ${bodyM.lineHeight};

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1.25rem;
            `,
            s: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${bodyS.fontFamily};
                ${tokens.fontSize}: ${bodyS.fontSize};
                ${tokens.fontStyle}: ${bodyS.fontStyle};
                ${tokens.fontWeight}: ${bodySBold.fontWeight};
                ${tokens.letterSpacing}: ${bodyS.letterSpacing};
                ${tokens.lineHeight}: ${bodyS.lineHeight};

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.5rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 1rem;
            `,
            xs: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xs-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.contentGap}: 0.375rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.iconSize}: 0.75rem;
                ${tokens.actualIconSize}: 1rem;
                ${tokens.scaleFactor}: 0.75;
            `,
            xxs: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.fontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.fontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.fontWeight}: var(--plasma-typo-body-xxs-bold-font-weight);
                ${tokens.letterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.lineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xxs-font-family);
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xxs-font-size);
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xxs-font-style);
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xxs-font-weight);
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xxs-letter-spacing);
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xxs-line-height);

                ${tokens.contentGap}: 0.375rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSize}: 0.75rem;
                ${tokens.actualIconSize}: 1rem;
                ${tokens.scaleFactor}: 0.75;
            `,
            h1: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${h1.fontFamily};
                ${tokens.fontSize}: ${h1.fontSize};
                ${tokens.fontStyle}: ${h1.fontStyle};
                ${tokens.fontWeight}: ${h1Bold.fontWeight};
                ${tokens.letterSpacing}: ${h1.letterSpacing};
                ${tokens.lineHeight}: ${h1.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyM.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyM.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyM.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyM.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyM.lineHeight};

                ${tokens.contentGap}: 1rem;
                ${tokens.singleIconContentGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.25rem;
                ${tokens.iconSizeLarge}: 3rem;
                ${tokens.iconSizeMedium}: 3rem;
                ${tokens.iconSizeSmall}: 2.25rem;

                ${tokens.singleIconMarginBottom}: 0.25rem;
                ${tokens.singleIconSizeLarge}: 3rem;
                ${tokens.singleIconSizeMedium}: 3rem;
                ${tokens.singleIconSizeSmall}: 2.25rem;
            `,
            h2: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${h2.fontFamily};
                ${tokens.fontSize}: ${h2.fontSize};
                ${tokens.fontStyle}: ${h2.fontStyle};
                ${tokens.fontWeight}: ${h2Bold.fontWeight};
                ${tokens.letterSpacing}: ${h2.letterSpacing};
                ${tokens.lineHeight}: ${h2.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyS.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyS.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyS.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyS.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyS.lineHeight};

                ${tokens.contentGap}: 0.875rem;
                ${tokens.singleIconContentGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.25rem;
                ${tokens.iconSizeLarge}: 2rem;
                ${tokens.iconSizeMedium}: 1.75rem;
                ${tokens.iconSizeSmall}: 1.5rem;

                ${tokens.singleIconMarginBottom}: 0.25rem;
                ${tokens.singleIconSizeLarge}: 2rem;
                ${tokens.singleIconSizeMedium}: 1.75rem;
                ${tokens.singleIconSizeSmall}: 1.5rem;
            `,
            h3: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${h3.fontFamily};
                ${tokens.fontSize}: ${h3.fontSize};
                ${tokens.fontStyle}: ${h3.fontStyle};
                ${tokens.fontWeight}: ${h3Bold.fontWeight};
                ${tokens.letterSpacing}: ${h3.letterSpacing};
                ${tokens.lineHeight}: ${h3.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.75rem;
                ${tokens.singleIconContentGap}: 0.375rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.75rem;
                ${tokens.iconSizeMedium}: 1.5rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.75rem;
                ${tokens.singleIconSizeMedium}: 1.5rem;
                ${tokens.singleIconSizeSmall}: 1.25rem;
            `,
            h4: css`
                ${tokens.gap}: 0.25rem;

                ${tokens.fontFamily}: ${h4.fontFamily};
                ${tokens.fontSize}: ${h4.fontSize};
                ${tokens.fontStyle}: ${h4.fontStyle};
                ${tokens.fontWeight}: ${h4Bold.fontWeight};
                ${tokens.letterSpacing}: ${h4.letterSpacing};
                ${tokens.lineHeight}: ${h4.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.5rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.5rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1.25rem;
            `,
            h5: css`
                ${tokens.gap}: 0.25rem;

                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-h5-font-family);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-h5-font-size);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-h5-font-style);
                /* NOTE: no token h5Bold in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-h5-bold-font-weight);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-h5-letter-spacing);
                /* NOTE: no token h5 in @salutejs/sdds-themes/tokens */
                ${tokens.lineHeight}: var(--plasma-typo-h5-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.25rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.25rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1rem;
            `,
            h6: css`
                ${tokens.gap}: 0.25rem;

                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-h6-font-family);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-h6-font-size);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-h6-font-style);
                /* NOTE: no token h6Bold in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-h6-bold-font-weight);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-h6-letter-spacing);
                /* NOTE: no token h6 in @salutejs/sdds-themes/tokens */
                ${tokens.lineHeight}: var(--plasma-typo-h6-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.helperTextLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.contentGap}: 0.625rem;
                ${tokens.singleIconContentGap}: 0.25rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconMarginBottom}: 0.125rem;
                ${tokens.iconSizeLarge}: 1.25rem;
                ${tokens.iconSizeMedium}: 1.25rem;
                ${tokens.iconSizeSmall}: 1rem;

                ${tokens.singleIconMarginBottom}: 0.125rem;
                ${tokens.singleIconSizeLarge}: 1.25rem;
                ${tokens.singleIconSizeMedium}: 1.25rem;
                ${tokens.singleIconSizeSmall}: 1rem;
            `,
            displayL: css`
                ${tokens.gap}: 0.375rem;

                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-dspl-l-font-family);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-dspl-l-font-size);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-dspl-l-font-style);
                /* NOTE: no token dsplLBold in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-dspl-l-bold-font-weight);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-l-letter-spacing);
                /* NOTE: no token dsplL in @salutejs/sdds-themes/tokens */
                ${tokens.lineHeight}: var(--plasma-typo-dspl-l-line-height);

                ${tokens.helperTextFontFamily}: ${h3.fontFamily};
                ${tokens.helperTextFontSize}: ${h3.fontSize};
                ${tokens.helperTextFontStyle}: ${h3.fontStyle};
                ${tokens.helperTextFontWeight}: ${h3.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${h3.letterSpacing};
                ${tokens.helperTextLineHeight}: ${h3.lineHeight};

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.625rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 4rem;
                ${tokens.iconSizeMedium}: 3rem;
                ${tokens.iconSizeSmall}: 2.25rem;

                ${tokens.singleIconMarginBottom}: 0.5rem;
                ${tokens.singleIconSizeLarge}: 7.5rem;
                ${tokens.singleIconSizeMedium}: 7rem;
                ${tokens.singleIconSizeSmall}: 5.5rem;
            `,
            displayM: css`
                ${tokens.gap}: 0.375rem;

                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${tokens.fontFamily}: var(--plasma-typo-dspl-m-font-family);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${tokens.fontSize}: var(--plasma-typo-dspl-m-font-size);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${tokens.fontStyle}: var(--plasma-typo-dspl-m-font-style);
                /* NOTE: no token dsplMBold in @salutejs/sdds-themes/tokens */
                ${tokens.fontWeight}: var(--plasma-typo-dspl-m-bold-font-weight);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${tokens.letterSpacing}: var(--plasma-typo-dspl-m-letter-spacing);
                /* NOTE: no token dsplM in @salutejs/sdds-themes/tokens */
                ${tokens.lineHeight}: var(--plasma-typo-dspl-m-line-height);

                ${tokens.helperTextFontFamily}: ${bodyL.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyL.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyL.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyL.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyL.lineHeight};

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.5rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 3rem;
                ${tokens.iconSizeMedium}: 2.25rem;
                ${tokens.iconSizeSmall}: 1.75rem;

                ${tokens.singleIconMarginBottom}: 0.5rem;
                ${tokens.singleIconSizeLarge}: 5.25rem;
                ${tokens.singleIconSizeMedium}: 4.5rem;
                ${tokens.singleIconSizeSmall}: 4rem;
            `,
            displayS: css`
                ${tokens.gap}: 0.375rem;

                ${tokens.fontFamily}: ${dsplS.fontFamily};
                ${tokens.fontSize}: ${dsplS.fontSize};
                ${tokens.fontStyle}: ${dsplS.fontStyle};
                ${tokens.fontWeight}: ${dsplSBold.fontWeight};
                ${tokens.letterSpacing}: ${dsplS.letterSpacing};
                ${tokens.lineHeight}: ${dsplS.lineHeight};

                ${tokens.helperTextFontFamily}: ${bodyL.fontFamily};
                ${tokens.helperTextFontSize}: ${bodyL.fontSize};
                ${tokens.helperTextFontStyle}: ${bodyL.fontStyle};
                ${tokens.helperTextFontWeight}: ${bodyL.fontWeight};
                ${tokens.helperTextLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.helperTextLineHeight}: ${bodyL.lineHeight};

                ${tokens.contentGap}: 1.5rem;
                ${tokens.singleIconContentGap}: 0.75rem;
                ${tokens.wrapperGap}: 0.375rem;
                ${tokens.starsWrapperGap}: 0.125rem;

                ${tokens.iconSizeLarge}: 2rem;
                ${tokens.iconSizeMedium}: 1.5rem;
                ${tokens.iconSizeSmall}: 1.25rem;

                ${tokens.singleIconMarginBottom}: 0.313rem;
                ${tokens.singleIconSizeLarge}: 4rem;
                ${tokens.singleIconSizeMedium}: 3.5rem;
                ${tokens.singleIconSizeSmall}: 2.75rem;
            `,
        },
    },
};
