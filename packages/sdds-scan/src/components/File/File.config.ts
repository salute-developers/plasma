import { css, fileTokens as tokens } from '@salutejs/plasma-new-hope/styled-components';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.embedIconButtonColor}: var(--text-primary);
                ${tokens.embedIconButtonColorHover}: var(--text-primary-hover);
                ${tokens.embedIconButtonColorActive}: var(--text-primary-active);
                ${tokens.embedIconButtonFocusColor}: var(--surface-accent);

                ${tokens.cellTitleColor}: var(--text-primary);
                ${tokens.cellSubtitleColor}: var(--text-secondary);

                ${tokens.progressBarCircularContentColor}: var(--text-primary);
                ${tokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${tokens.progressBarCircularStroke}: var(--surface-solid-default);

                ${tokens.progressTrackBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.progressFilledBackgroundColor}: var(--surface-solid-default);
            `,
            negative: css`
                ${tokens.embedIconButtonColor}: var(--text-primary);
                ${tokens.embedIconButtonColorHover}: var(--text-primary-hover);
                ${tokens.embedIconButtonColorActive}: var(--text-primary-active);
                ${tokens.embedIconButtonFocusColor}: var(--surface-accent);

                ${tokens.cellTitleColor}: var(--text-primary);
                ${tokens.cellSubtitleColor}: var(--text-negative);

                ${tokens.progressBarCircularContentColor}: var(--text-primary);
                ${tokens.progressBarCircularBackgroundStroke}: var(--surface-transparent-tertiary);
                ${tokens.progressBarCircularStroke}: var(--surface-negative);

                ${tokens.progressTrackBackgroundColor}: var(--surface-transparent-secondary);
                ${tokens.progressFilledBackgroundColor}: var(--surface-negative);
            `,
        },
        size: {
            m: css`
                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.cellHeight}: 2.5rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.625rem;
                ${tokens.cellPaddingRightContent}: 0.625rem;

                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.progressBarCircularSize}: 36;
                ${tokens.progressBarCircularHeight}: 2.25rem;
                ${tokens.progressBarCircularWidth}: 2.25rem;

                ${tokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${tokens.progressBarCircularStrokeSize}: 2;

                ${tokens.progressTrackHeight}: 0.25rem;
                ${tokens.progressTrackBorderRadius}: 0.125rem;
                ${tokens.progressFilledHeight}: 0.25rem;
                ${tokens.progressFilledBorderRadius}: 0.375rem;

                ${tokens.progressLinearGap}: 0.5rem;

                ${tokens.fileThumbSize}: 2.25rem;
                ${tokens.fileThumbRadius}: 0.625rem;
            `,
            s: css`
                ${tokens.embedIconButtonHeight}: 2.5rem;
                ${tokens.embedIconButtonWidth}: 2.5rem;
                ${tokens.embedIconButtonPadding}: 0.5rem;
                ${tokens.embedIconButtonRadius}: 0.625rem;

                ${tokens.cellHeight}: 2.5rem;
                ${tokens.cellTextboxGap}: 0.125rem;
                ${tokens.cellGap}: 0.5rem;
                ${tokens.cellPaddingRightContent}: 0.5rem;

                ${tokens.cellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.cellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.cellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.cellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.cellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.cellTitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.cellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.cellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.cellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.cellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.cellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.cellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.progressBarCircularSize}: 36;
                ${tokens.progressBarCircularHeight}: 2.25rem;
                ${tokens.progressBarCircularWidth}: 2.25rem;

                ${tokens.progressBarCircularStrokeWidth}: 0.125rem;
                ${tokens.progressBarCircularStrokeSize}: 2;

                ${tokens.progressTrackHeight}: 0.25rem;
                ${tokens.progressTrackBorderRadius}: 0.125rem;
                ${tokens.progressFilledHeight}: 0.25rem;
                ${tokens.progressFilledBorderRadius}: 0.375rem;

                ${tokens.progressLinearGap}: 0.5rem;

                ${tokens.fileThumbSize}: 2.25rem;
                ${tokens.fileThumbRadius}: 0.625rem;
            `,
        },
        disabled: {
            true: css`
                ${tokens.fileDisabledOpacity}: 0.4;
            `,
        },
    },
};
