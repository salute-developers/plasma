import { css, cellTokens } from '@salutejs/plasma-new-hope/styled-components';
import { bodyL, bodyM, bodyS, textPrimary, textSecondary } from '@salutejs-ds/sdds_sbcom/theme/tokens';

/*
 * NOTE: Mixed DS tokens + raw vars. Prefer @salutejs-ds/sdds_sbcom/theme/tokens where possible.
 * Missing tokens in @salutejs/sdds-themes/tokens: bodyXs
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

                ${cellTokens.cellLabelFontFamily}: ${bodyM.fontFamily};
                ${cellTokens.cellLabelFontSize}: ${bodyM.fontSize};
                ${cellTokens.cellLabelFontStyle}: ${bodyM.fontStyle};
                ${cellTokens.cellLabelFontWeight}: ${bodyM.fontWeight};
                ${cellTokens.cellLabelLetterSpacing}: ${bodyM.letterSpacing};
                ${cellTokens.cellLabelLineHeight}: ${bodyM.lineHeight};

                ${cellTokens.cellTitleFontFamily}: ${bodyL.fontFamily};
                ${cellTokens.cellTitleFontSize}: ${bodyL.fontSize};
                ${cellTokens.cellTitleFontStyle}: ${bodyL.fontStyle};
                ${cellTokens.cellTitleFontWeight}: ${bodyL.fontWeight};
                ${cellTokens.cellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${cellTokens.cellTitleLineHeight}: ${bodyL.lineHeight};

                ${cellTokens.cellSubtitleFontFamily}: ${bodyM.fontFamily};
                ${cellTokens.cellSubtitleFontSize}: ${bodyM.fontSize};
                ${cellTokens.cellSubtitleFontStyle}: ${bodyM.fontStyle};
                ${cellTokens.cellSubtitleFontWeight}: ${bodyM.fontWeight};
                ${cellTokens.cellSubtitleLetterSpacing}: ${bodyM.letterSpacing};
                ${cellTokens.cellSubtitleLineHeight}: ${bodyM.lineHeight};
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

                ${cellTokens.cellTitleFontFamily}: ${bodyM.fontFamily};
                ${cellTokens.cellTitleFontSize}: ${bodyM.fontSize};
                ${cellTokens.cellTitleFontStyle}: ${bodyM.fontStyle};
                ${cellTokens.cellTitleFontWeight}: ${bodyM.fontWeight};
                ${cellTokens.cellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${cellTokens.cellTitleLineHeight}: ${bodyM.lineHeight};

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

                ${cellTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${cellTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${cellTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${cellTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${cellTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${cellTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${cellTokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${cellTokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${cellTokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${cellTokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${cellTokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${cellTokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                ${cellTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${cellTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${cellTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${cellTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${cellTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
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

                ${cellTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${cellTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${cellTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${cellTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${cellTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${cellTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${cellTokens.cellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${cellTokens.cellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${cellTokens.cellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${cellTokens.cellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${cellTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${cellTokens.cellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${cellTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${cellTokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${cellTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${cellTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${cellTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${cellTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
            `,
        },
    },
};
