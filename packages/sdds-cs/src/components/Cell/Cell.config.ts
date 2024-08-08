import { css, cellTokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    variations: {
        view: {
            default: css`
                ${cellTokens.cellColor}: var(--text-primary);
                ${cellTokens.cellLabelColor}: var(--text-secondary);
                ${cellTokens.cellTitleColor}: var(--text-primary);
                ${cellTokens.cellSubtitleColor}: var(--text-secondary);
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

                ${cellTokens.cellLabelFontFamily}: var(--plasma-typo-body-s-font-family);
                ${cellTokens.cellLabelFontSize}: var(--plasma-typo-body-s-font-size);
                ${cellTokens.cellLabelFontStyle}: var(--plasma-typo-body-s-font-style);
                ${cellTokens.cellLabelFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${cellTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${cellTokens.cellLabelLineHeight}: var(--plasma-typo-body-s-line-height);

                ${cellTokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${cellTokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${cellTokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${cellTokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${cellTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${cellTokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${cellTokens.cellSubtitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${cellTokens.cellSubtitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${cellTokens.cellSubtitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${cellTokens.cellSubtitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${cellTokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${cellTokens.cellSubtitleLineHeight}: var(--plasma-typo-body-s-line-height);
            `,
            xs: css`
                ${cellTokens.cellWidth}: 15rem;

                ${cellTokens.cellPadding}: 0rem;
                ${cellTokens.cellPaddingLeftContent}: 0rem;
                ${cellTokens.cellPaddingContent}: 0rem;
                ${cellTokens.cellPaddingRightContent}: 0rem;

                ${cellTokens.cellTextboxGap}: 0.125rem;
                ${cellTokens.cellGap}: 0.25rem;

                ${cellTokens.cellLabelFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${cellTokens.cellLabelFontSize}: var(--plasma-typo-body-xs-font-size);
                ${cellTokens.cellLabelFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${cellTokens.cellLabelFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${cellTokens.cellLabelLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${cellTokens.cellLabelLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${cellTokens.cellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${cellTokens.cellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${cellTokens.cellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${cellTokens.cellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${cellTokens.cellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${cellTokens.cellTitleLineHeight}: var(--plasma-typo-body-s-line-height);

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
