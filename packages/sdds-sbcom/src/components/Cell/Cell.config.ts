import { css, cellTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyS, textPrimary, textSecondary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyM, bodyXs
 */
export const config = {
    variations: {
        view: {
            default: css`
                ${cellTokens.cellColor}: ${textPrimary};
                ${cellTokens.cellLabelColor}: ${textSecondary};
                ${cellTokens.cellTitleColor}: ${textPrimary};
                ${cellTokens.cellSubtitleColor}: ${textSecondary};
                ${cellTokens.cellBackgroundColor}: transparent;
            `,
        },
        size: {
            l: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.375rem;

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelLineHeight}: var(--plasma-typo-body-m-line-height);

                ${cellTokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${cellTokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${cellTokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${cellTokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${cellTokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${cellTokens.cellTitleLineHeight}: ${bodyL.lineHeight};

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-m-line-height);
            `,
            m: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.5rem;

                ${cellTokens.cellLabelFontFamily}: ${bodyS.fontFamily};
                ${cellTokens.cellLabelFontSize}: ${bodyS.fontSize};
                ${cellTokens.cellLabelFontStyle}: ${bodyS.fontStyle};
                ${cellTokens.cellLabelFontWeight}: ${bodyS.fontWeight};
                ${cellTokens.cellLabelLetterSpacing}: ${bodyS.letterSpacing};
                ${cellTokens.cellLabelLineHeight}: ${bodyS.lineHeight};

                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                /* NOTE: no token bodyM in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${cellTokens.cellSubtitleFontFamily}: ${bodyS.fontFamily};
                ${cellTokens.cellSubtitleFontSize}: ${bodyS.fontSize};
                ${cellTokens.cellSubtitleFontStyle}: ${bodyS.fontStyle};
                ${cellTokens.cellSubtitleFontWeight}: ${bodyS.fontWeight};
                ${cellTokens.cellSubtitleLetterSpacing}: ${bodyS.letterSpacing};
                ${cellTokens.cellSubtitleLineHeight}: ${bodyS.lineHeight};
            `,
            s: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.375rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${cellTokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${cellTokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${cellTokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${cellTokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${cellTokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${cellTokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
            xs: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.375rem;

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                /* NOTE: no token bodyXs in @salutejs/sdds-themes/tokens */
                ${cellTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
