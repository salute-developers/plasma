import { css } from '@linaria/core';
import { inputTokens as tokens } from 'src/components/_ai/Input';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
    },
    variations: {
        view: {
            default: css`
                ${tokens.background}: var(--surface-transparent-primary);
                ${tokens.focusColor}: var(--surface-accent);
                ${tokens.fileBackground}: var(--surface-solid-card-brightness);
                ${tokens.fileEmbedIconButtonColor}: var(--text-primary);
                ${tokens.fileEmbedIconButtonColorHover}: var(--text-primary-hover);
                ${tokens.fileEmbedIconButtonColorActive}: var(--text-primary-active);
                ${tokens.fileCellTitleColor}: var(--text-primary);
                ${tokens.fileCellSubtitleColor}: var(--text-secondary);
                ${tokens.textareaColor}: var(--text-primary);
                ${tokens.textareaPlaceholderColor}: var(--text-secondary);
                ${tokens.textareaPlaceholderColorFocus}: var(--text-tertiary);
                ${tokens.textareaCaretColor}: var(--surface-accent);
                ${tokens.textareaScrollTrackColor}: var(--surface-transparent-primary);
                ${tokens.textareaScrollThumbColor}: var(--surface-transparent-primary);
                ${tokens.submitButtonColor}: var(--on-dark-text-primary);
                ${tokens.submitButtonBackgroundColor}: var(--surface-accent);
                ${tokens.submitButtonBackgroundColorHover}: var(--surface-accent-hover);
                ${tokens.submitButtonBackgroundColorActive}: var(--surface-accent-active);
                ${tokens.submitButtonLoadingBackgroundColor}: var(--surface-accent);
                ${tokens.submitButtonSpinnerColor}: inherit;
            `,
        },
        size: {
            xl: css`
                ${tokens.paddingTop}: 0.5rem;
                ${tokens.paddingRight}: 0.5rem;
                ${tokens.paddingBottom}: 0.5rem;
                ${tokens.paddingLeft}: 0.5rem;
                ${tokens.borderRadius}: 1.375rem;

                ${tokens.attachmentsListMargin}: 0.5rem;
                ${tokens.attachmentsGap}: 0.25rem;
                ${tokens.filePaddingTop}: 0.5rem;
                ${tokens.filePaddingRight}: 0.5rem;
                ${tokens.filePaddingBottom}: 0.5rem;
                ${tokens.filePaddingLeft}: 0.5rem;
                ${tokens.fileBorderRadius}: 0.875rem;
                ${tokens.fileEmbedIconButtonHeight}: 2.5rem;
                ${tokens.fileEmbedIconButtonWidth}: 2.5rem;
                ${tokens.fileEmbedIconButtonPadding}: 0;
                ${tokens.fileEmbedIconButtonRadius}: 0.5rem;
                ${tokens.fileCellHeight}: 2.5rem;
                ${tokens.fileCellTextboxGap}: 0.125rem;
                ${tokens.fileCellGap}: 0.75rem;
                ${tokens.fileCellTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fileCellTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fileCellTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fileCellTitleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.fileCellTitleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.fileCellTitleLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.fileCellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileCellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileCellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileCellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileCellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileCellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.fileThumbSize}: 2.5rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.textareaPaddingTop}: 1.0625rem;
                ${tokens.textareaPaddingRight}: 1.25rem;
                ${tokens.textareaPaddingBottom}: 1.0625rem;
                ${tokens.textareaPaddingLeft}: 1.25rem;
                ${tokens.textareaFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textareaFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textareaFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textareaFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textareaLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textareaLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.textareaScrollWidth}: 0.125rem;

                ${tokens.inputFieldPadding}: 0 1.125rem;

                ${tokens.submitButtonWidth}: 3.5rem;
                ${tokens.submitButtonHeight}: 3.5rem;
                ${tokens.submitButtonPadding}: 0;
                ${tokens.submitButtonRadius}: 0.875rem;
                ${tokens.submitButtonSpinnerSize}: 1.5rem;
            `,
            l: css`
                ${tokens.paddingTop}: 0.5rem;
                ${tokens.paddingRight}: 0.5rem;
                ${tokens.paddingBottom}: 0.5rem;
                ${tokens.paddingLeft}: 0.5rem;
                ${tokens.borderRadius}: 1.25rem;

                ${tokens.attachmentsListMargin}: 0.5rem;
                ${tokens.attachmentsGap}: 0.25rem;
                ${tokens.filePaddingTop}: 0.25rem;
                ${tokens.filePaddingRight}: 0.375rem;
                ${tokens.filePaddingBottom}: 0.25rem;
                ${tokens.filePaddingLeft}: 0.375rem;
                ${tokens.fileBorderRadius}: 0.75rem;
                ${tokens.fileEmbedIconButtonHeight}: 2.5rem;
                ${tokens.fileEmbedIconButtonWidth}: 2.5rem;
                ${tokens.fileEmbedIconButtonPadding}: 0;
                ${tokens.fileEmbedIconButtonRadius}: 0.5rem;
                ${tokens.fileCellHeight}: 2.5rem;
                ${tokens.fileCellTextboxGap}: 0.125rem;
                ${tokens.fileCellGap}: 0.625rem;
                ${tokens.fileCellTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fileCellTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fileCellTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fileCellTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fileCellTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fileCellTitleLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.fileCellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileCellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileCellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileCellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileCellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileCellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.fileThumbSize}: 2.25rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.textareaPaddingTop}: 0.8125rem;
                ${tokens.textareaPaddingRight}: 0.875rem;
                ${tokens.textareaPaddingBottom}: 0.8125rem;
                ${tokens.textareaPaddingLeft}: 0.875rem;
                ${tokens.textareaFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textareaFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textareaFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textareaFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textareaLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textareaLineHeight}: var(--plasma-typo-body-l-line-height);
                ${tokens.textareaScrollWidth}: 0.125rem;

                ${tokens.inputFieldPadding}: 0 0.75rem;

                ${tokens.submitButtonWidth}: 3rem;
                ${tokens.submitButtonHeight}: 3rem;
                ${tokens.submitButtonPadding}: 0;
                ${tokens.submitButtonRadius}: 0.75rem;
                ${tokens.submitButtonSpinnerSize}: 1.375rem;
            `,
            m: css`
                ${tokens.paddingTop}: 0.5rem;
                ${tokens.paddingRight}: 0.5rem;
                ${tokens.paddingBottom}: 0.5rem;
                ${tokens.paddingLeft}: 0.5rem;
                ${tokens.borderRadius}: 1.125rem;

                ${tokens.attachmentsListMargin}: 0.375rem;
                ${tokens.attachmentsGap}: 0.125rem;
                ${tokens.filePaddingTop}: 0.1875rem;
                ${tokens.filePaddingRight}: 0.25rem;
                ${tokens.filePaddingBottom}: 0.1875rem;
                ${tokens.filePaddingLeft}: 0.25rem;
                ${tokens.fileBorderRadius}: 0.625rem;
                ${tokens.fileEmbedIconButtonHeight}: 2rem;
                ${tokens.fileEmbedIconButtonWidth}: 2rem;
                ${tokens.fileEmbedIconButtonPadding}: 0;
                ${tokens.fileEmbedIconButtonRadius}: 0.375rem;
                ${tokens.fileCellHeight}: 2.125rem;
                ${tokens.fileCellTextboxGap}: 0.125rem;
                ${tokens.fileCellGap}: 0.5rem;
                ${tokens.fileCellTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fileCellTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fileCellTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fileCellTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.fileCellTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.fileCellTitleLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.fileCellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileCellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileCellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileCellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileCellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileCellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.fileThumbSize}: 2rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.textareaPaddingTop}: 0.625rem;
                ${tokens.textareaPaddingRight}: 0.625rem;
                ${tokens.textareaPaddingBottom}: 0.625rem;
                ${tokens.textareaPaddingLeft}: 0.625rem;
                ${tokens.textareaFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textareaFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textareaFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textareaFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textareaLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textareaLineHeight}: var(--plasma-typo-body-m-line-height);
                ${tokens.textareaScrollWidth}: 0.125rem;

                ${tokens.inputFieldPadding}: 0 0.5rem;

                ${tokens.submitButtonWidth}: 2.5rem;
                ${tokens.submitButtonHeight}: 2.5rem;
                ${tokens.submitButtonPadding}: 0;
                ${tokens.submitButtonRadius}: 0.625rem;
                ${tokens.submitButtonSpinnerSize}: 1.375rem;
            `,
            s: css`
                ${tokens.paddingTop}: 0.375rem;
                ${tokens.paddingRight}: 0.375rem;
                ${tokens.paddingBottom}: 0.375rem;
                ${tokens.paddingLeft}: 0.375rem;
                ${tokens.borderRadius}: 0.875rem;

                ${tokens.attachmentsListMargin}: 0.375rem;
                ${tokens.attachmentsGap}: 0.125rem;
                ${tokens.filePaddingTop}: 0.1875rem;
                ${tokens.filePaddingRight}: 0.25rem;
                ${tokens.filePaddingBottom}: 0.1875rem;
                ${tokens.filePaddingLeft}: 0.25rem;
                ${tokens.fileBorderRadius}: 0.5rem;
                ${tokens.fileEmbedIconButtonHeight}: 1.5rem;
                ${tokens.fileEmbedIconButtonWidth}: 1.5rem;
                ${tokens.fileEmbedIconButtonPadding}: 0;
                ${tokens.fileEmbedIconButtonRadius}: 0.25rem;
                ${tokens.fileCellHeight}: 1.875rem;
                ${tokens.fileCellTextboxGap}: 0.125rem;
                ${tokens.fileCellGap}: 0.375rem;
                ${tokens.fileCellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileCellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileCellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileCellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileCellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileCellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.fileCellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileCellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileCellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileCellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileCellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileCellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.25rem;

                ${tokens.textareaPaddingTop}: 0.4375rem;
                ${tokens.textareaPaddingRight}: 0.625rem;
                ${tokens.textareaPaddingBottom}: 0.4375rem;
                ${tokens.textareaPaddingLeft}: 0.625rem;
                ${tokens.textareaFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textareaFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textareaFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textareaFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textareaLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textareaLineHeight}: var(--plasma-typo-body-s-line-height);
                ${tokens.textareaScrollWidth}: 0.125rem;

                ${tokens.inputFieldPadding}: 0 0.625rem;

                ${tokens.submitButtonWidth}: 2rem;
                ${tokens.submitButtonHeight}: 2rem;
                ${tokens.submitButtonPadding}: 0;
                ${tokens.submitButtonRadius}: 0.5rem;
                ${tokens.submitButtonSpinnerSize}: 1.375rem;
            `,
            xs: css`
                ${tokens.paddingTop}: 0.25rem;
                ${tokens.paddingRight}: 0.25rem;
                ${tokens.paddingBottom}: 0.25rem;
                ${tokens.paddingLeft}: 0.25rem;
                ${tokens.borderRadius}: 0.75rem;

                ${tokens.attachmentsListMargin}: 0.25rem;
                ${tokens.attachmentsGap}: 0.125rem;
                ${tokens.filePaddingTop}: 0.1875rem;
                ${tokens.filePaddingRight}: 0.25rem;
                ${tokens.filePaddingBottom}: 0.1875rem;
                ${tokens.filePaddingLeft}: 0.25rem;
                ${tokens.fileBorderRadius}: 0.5rem;
                ${tokens.fileEmbedIconButtonHeight}: 1.5rem;
                ${tokens.fileEmbedIconButtonWidth}: 1.5rem;
                ${tokens.fileEmbedIconButtonPadding}: 0;
                ${tokens.fileEmbedIconButtonRadius}: 0.25rem;
                ${tokens.fileCellHeight}: 1.875rem;
                ${tokens.fileCellTextboxGap}: 0.125rem;
                ${tokens.fileCellGap}: 0.375rem;
                ${tokens.fileCellTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileCellTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileCellTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileCellTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileCellTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileCellTitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.fileCellSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileCellSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileCellSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileCellSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileCellSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileCellSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.25rem;

                ${tokens.textareaPaddingTop}: 0.5625rem;
                ${tokens.textareaPaddingRight}: 0.5625rem;
                ${tokens.textareaPaddingBottom}: 0.5625rem;
                ${tokens.textareaPaddingLeft}: 0.5625rem;
                ${tokens.textareaFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textareaFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textareaFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textareaFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textareaLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textareaLineHeight}: var(--plasma-typo-body-xs-line-height);
                ${tokens.textareaScrollWidth}: 0.125rem;

                ${tokens.inputFieldPadding}: 0 0.625rem;

                ${tokens.submitButtonWidth}: 2rem;
                ${tokens.submitButtonHeight}: 2rem;
                ${tokens.submitButtonPadding}: 0;
                ${tokens.submitButtonRadius}: 0.5rem;
                ${tokens.submitButtonSpinnerSize}: 1rem;
            `,
        },
    },
};
