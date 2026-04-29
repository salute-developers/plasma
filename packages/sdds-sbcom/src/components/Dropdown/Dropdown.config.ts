import { css, dropdownTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';
import {
    bodyL,
    bodyM,
    bodyS,
    surfaceTransparentSecondary,
    surfaceTransparentTertiary,
} from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
 */
export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        size: {
            xl: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 17.5rem;
                ${tokens.borderRadius}: 1rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1.25rem 1.125rem;
                ${tokens.itemPaddingTight}: 1rem 1.125rem;
                ${tokens.itemBorderRadius}: 1rem;

                ${tokens.dividerMarginTop}: 0.625rem;
                ${tokens.dividerMarginRight}: 1.25rem;
                ${tokens.dividerMarginBottom}: 0.625rem;
                ${tokens.dividerMarginLeft}: 1.25rem;
                ${tokens.dividerMarginTopTight}: 0.5rem;
                ${tokens.dividerMarginBottomTight}: 0.5rem;

                ${tokens.itemFontFamily}: ${bodyL.fontFamily};
                ${tokens.itemFontSize}: ${bodyL.fontSize};
                ${tokens.itemFontStyle}: ${bodyL.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyL.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyL.lineHeight};

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.5rem;
                ${tokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyL.lineHeight};
            `,
            l: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 17.5rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 1rem 1.125rem;
                ${tokens.itemPaddingTight}: 0.75rem 1.125rem;
                ${tokens.itemBorderRadius}: 0.75rem;

                ${tokens.dividerMarginTop}: 0.5rem;
                ${tokens.dividerMarginRight}: 1.125rem;
                ${tokens.dividerMarginBottom}: 0.5rem;
                ${tokens.dividerMarginLeft}: 1.125rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;

                ${tokens.itemFontFamily}: ${bodyL.fontFamily};
                ${tokens.itemFontSize}: ${bodyL.fontSize};
                ${tokens.itemFontStyle}: ${bodyL.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyL.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyL.lineHeight};

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyL.lineHeight};
            `,
            m: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 15rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.75rem 0.875rem;
                ${tokens.itemPaddingTight}: 0.5rem 0.875rem;
                ${tokens.itemBorderRadius}: 0.625rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.875rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.875rem;
                ${tokens.dividerMarginTopTight}: 0.375rem;
                ${tokens.dividerMarginBottomTight}: 0.375rem;

                ${tokens.itemFontFamily}: ${bodyM.fontFamily};
                ${tokens.itemFontSize}: ${bodyM.fontSize};
                ${tokens.itemFontStyle}: ${bodyM.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyM.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyM.lineHeight};

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyM.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyM.lineHeight};
            `,
            s: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 12.5rem;
                ${tokens.borderRadius}: 0.625rem;

                ${tokens.itemHeight}: 1.5rem;
                ${tokens.itemPadding}: 0.5rem 0.75rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.75rem;
                ${tokens.itemBorderRadius}: 0.5rem;

                ${tokens.dividerMarginTop}: 0.375rem;
                ${tokens.dividerMarginRight}: 0.75rem;
                ${tokens.dividerMarginBottom}: 0.375rem;
                ${tokens.dividerMarginLeft}: 0.75rem;
                ${tokens.dividerMarginTopTight}: 0.25rem;
                ${tokens.dividerMarginBottomTight}: 0.25rem;

                ${tokens.itemFontFamily}: ${bodyS.fontFamily};
                ${tokens.itemFontSize}: ${bodyS.fontSize};
                ${tokens.itemFontStyle}: ${bodyS.fontStyle};
                ${tokens.itemFontWeightBold}: ${bodyS.fontWeight};
                ${tokens.itemFontLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.itemFontLineHeight}: ${bodyS.lineHeight};

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.375rem;
                ${tokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${tokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.cellTitleLineHeight}: ${bodyS.lineHeight};
            `,
            xs: css`
                ${tokens.padding}: 0.125rem;
                ${tokens.width}: 10rem;
                ${tokens.borderRadius}: 0.5rem;

                ${tokens.itemHeight}: 1rem;
                ${tokens.itemPadding}: 0.5rem;
                ${tokens.itemPaddingTight}: 0.25rem 0.5rem;
                ${tokens.itemBorderRadius}: 0.375rem;

                ${tokens.dividerMarginTop}: 0.25rem;
                ${tokens.dividerMarginRight}: 0.5rem;
                ${tokens.dividerMarginBottom}: 0.25rem;
                ${tokens.dividerMarginLeft}: 0.5rem;
                ${tokens.dividerMarginTopTight}: 0.125rem;
                ${tokens.dividerMarginBottomTight}: 0.125rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontWeightBold}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.itemFontLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.cellPadding}: 0rem;
                ${tokens.cellPaddingLeftContent}: 0rem;
                ${tokens.cellPaddingContent}: 0rem;
                ${tokens.cellPaddingRightContent}: 0rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.25rem;
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
        view: {
            default: css`
                ${tokens.itemBackgroundHover}: ${surfaceTransparentSecondary};
                ${tokens.dividerColor}: ${surfaceTransparentTertiary};
            `,
        },
    },
};
