import { bodyL, bodyM, bodyS, bodyXS, textPrimary, textSecondary } from '@salutejs/sdds-themes/tokens/sdds_serv';
import { css, cellTokens } from '@salutejs/plasma-new-hope/styled-components';

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

                ${cellTokens.cellLabelFontFamily}: ${bodyXS.fontFamily};
                ${cellTokens.cellLabelFontSize}: ${bodyXS.fontSize};
                ${cellTokens.cellLabelFontStyle}: ${bodyXS.fontStyle};
                ${cellTokens.cellLabelFontWeight}: ${bodyXS.fontWeight};
                ${cellTokens.cellLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${cellTokens.cellLabelLineHeight}: ${bodyXS.lineHeight};

                ${cellTokens.cellTitleFontFamily}: ${bodyS.fontFamily};
                ${cellTokens.cellTitleFontSize}: ${bodyS.fontSize};
                ${cellTokens.cellTitleFontStyle}: ${bodyS.fontStyle};
                ${cellTokens.cellTitleFontWeight}: ${bodyS.fontWeight};
                ${cellTokens.cellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${cellTokens.cellTitleLineHeight}: ${bodyS.lineHeight};

                ${cellTokens.cellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${cellTokens.cellSubtitleFontSize}: ${bodyXS.fontSize};
                ${cellTokens.cellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${cellTokens.cellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${cellTokens.cellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${cellTokens.cellSubtitleLineHeight}: ${bodyXS.lineHeight};
            `,
            xs: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.375rem;

                ${cellTokens.cellLabelFontFamily}: ${bodyXS.fontFamily};
                ${cellTokens.cellLabelFontSize}: ${bodyXS.fontSize};
                ${cellTokens.cellLabelFontStyle}: ${bodyXS.fontStyle};
                ${cellTokens.cellLabelFontWeight}: ${bodyXS.fontWeight};
                ${cellTokens.cellLabelLetterSpacing}: ${bodyXS.letterSpacing};
                ${cellTokens.cellLabelLineHeight}: ${bodyXS.lineHeight};

                ${cellTokens.cellTitleFontFamily}: ${bodyXS.fontFamily};
                ${cellTokens.cellTitleFontSize}: ${bodyXS.fontSize};
                ${cellTokens.cellTitleFontStyle}: ${bodyXS.fontStyle};
                ${cellTokens.cellTitleFontWeight}: ${bodyXS.fontWeight};
                ${cellTokens.cellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${cellTokens.cellTitleLineHeight}: ${bodyXS.lineHeight};

                ${cellTokens.cellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${cellTokens.cellSubtitleFontSize}: ${bodyXS.fontSize};
                ${cellTokens.cellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${cellTokens.cellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${cellTokens.cellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${cellTokens.cellSubtitleLineHeight}: ${bodyXS.lineHeight};
            `,
        },
    },
};
