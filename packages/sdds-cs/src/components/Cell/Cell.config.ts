import { bodyM, bodyS, bodyXS, textPrimary, textSecondary } from '@salutejs/sdds-themes/tokens/sdds_cs';
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
            s: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.375rem;

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
            xs: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.25rem;

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
        },
    },
};
