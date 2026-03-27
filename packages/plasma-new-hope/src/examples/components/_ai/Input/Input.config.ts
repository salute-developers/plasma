import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    onDarkTextPrimary,
    surfaceAccent,
    surfaceAccentActive,
    surfaceAccentHover,
    surfaceSolidCardBrightness,
    surfaceTransparentPrimary,
    textPrimary,
    textPrimaryActive,
    textPrimaryHover,
    textSecondary,
    textTertiary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
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
                ${tokens.background}: ${surfaceTransparentPrimary};
                ${tokens.focusColor}: ${surfaceAccent};
                ${tokens.fileBackground}: ${surfaceSolidCardBrightness};
                ${tokens.fileEmbedIconButtonColor}: ${textPrimary};
                ${tokens.fileEmbedIconButtonColorHover}: ${textPrimaryHover};
                ${tokens.fileEmbedIconButtonColorActive}: ${textPrimaryActive};
                ${tokens.fileCellTitleColor}: ${textPrimary};
                ${tokens.fileCellSubtitleColor}: ${textSecondary};
                ${tokens.textareaColor}: ${textPrimary};
                ${tokens.textareaPlaceholderColor}: ${textSecondary};
                ${tokens.textareaPlaceholderColorFocus}: ${textTertiary};
                ${tokens.textareaCaretColor}: ${surfaceAccent};
                ${tokens.textareaScrollTrackColor}: ${surfaceTransparentPrimary};
                ${tokens.textareaScrollThumbColor}: ${surfaceTransparentPrimary};
                ${tokens.submitButtonColor}: ${onDarkTextPrimary};
                ${tokens.submitButtonBackgroundColor}: ${surfaceAccent};
                ${tokens.submitButtonBackgroundColorHover}: ${surfaceAccentHover};
                ${tokens.submitButtonBackgroundColorActive}: ${surfaceAccentActive};
                ${tokens.submitButtonLoadingBackgroundColor}: ${surfaceAccent};
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
                ${tokens.fileCellTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.fileCellTitleFontSize}: ${bodyL.fontSize};
                ${tokens.fileCellTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.fileCellTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.fileCellTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.fileCellTitleLineHeight}: ${bodyL.lineHeight};
                ${tokens.fileCellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileCellSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileCellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileCellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileCellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileCellSubtitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.fileThumbSize}: 2.5rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.textareaPaddingTop}: 1.0625rem;
                ${tokens.textareaPaddingRight}: 1.25rem;
                ${tokens.textareaPaddingBottom}: 1.0625rem;
                ${tokens.textareaPaddingLeft}: 1.25rem;
                ${tokens.textareaFontFamily}: ${bodyL.fontFamily};
                ${tokens.textareaFontSize}: ${bodyL.fontSize};
                ${tokens.textareaFontStyle}: ${bodyL.fontStyle};
                ${tokens.textareaFontWeight}: ${bodyL.fontWeight};
                ${tokens.textareaLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textareaLineHeight}: ${bodyL.lineHeight};
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
                ${tokens.fileCellTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.fileCellTitleFontSize}: ${bodyM.fontSize};
                ${tokens.fileCellTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.fileCellTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.fileCellTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.fileCellTitleLineHeight}: ${bodyM.lineHeight};
                ${tokens.fileCellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileCellSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileCellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileCellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileCellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileCellSubtitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.fileThumbSize}: 2.25rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.textareaPaddingTop}: 0.8125rem;
                ${tokens.textareaPaddingRight}: 0.875rem;
                ${tokens.textareaPaddingBottom}: 0.8125rem;
                ${tokens.textareaPaddingLeft}: 0.875rem;
                ${tokens.textareaFontFamily}: ${bodyL.fontFamily};
                ${tokens.textareaFontSize}: ${bodyL.fontSize};
                ${tokens.textareaFontStyle}: ${bodyL.fontStyle};
                ${tokens.textareaFontWeight}: ${bodyL.fontWeight};
                ${tokens.textareaLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textareaLineHeight}: ${bodyL.lineHeight};
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
                ${tokens.fileCellTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.fileCellTitleFontSize}: ${bodyS.fontSize};
                ${tokens.fileCellTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.fileCellTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.fileCellTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.fileCellTitleLineHeight}: ${bodyS.lineHeight};
                ${tokens.fileCellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileCellSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileCellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileCellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileCellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileCellSubtitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.fileThumbSize}: 2rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.textareaPaddingTop}: 0.625rem;
                ${tokens.textareaPaddingRight}: 0.625rem;
                ${tokens.textareaPaddingBottom}: 0.625rem;
                ${tokens.textareaPaddingLeft}: 0.625rem;
                ${tokens.textareaFontFamily}: ${bodyM.fontFamily};
                ${tokens.textareaFontSize}: ${bodyM.fontSize};
                ${tokens.textareaFontStyle}: ${bodyM.fontStyle};
                ${tokens.textareaFontWeight}: ${bodyM.fontWeight};
                ${tokens.textareaLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textareaLineHeight}: ${bodyM.lineHeight};
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
                ${tokens.fileCellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileCellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileCellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileCellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileCellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileCellTitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.fileCellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileCellSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileCellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileCellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileCellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileCellSubtitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.25rem;

                ${tokens.textareaPaddingTop}: 0.4375rem;
                ${tokens.textareaPaddingRight}: 0.625rem;
                ${tokens.textareaPaddingBottom}: 0.4375rem;
                ${tokens.textareaPaddingLeft}: 0.625rem;
                ${tokens.textareaFontFamily}: ${bodyS.fontFamily};
                ${tokens.textareaFontSize}: ${bodyS.fontSize};
                ${tokens.textareaFontStyle}: ${bodyS.fontStyle};
                ${tokens.textareaFontWeight}: ${bodyS.fontWeight};
                ${tokens.textareaLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textareaLineHeight}: ${bodyS.lineHeight};
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
                ${tokens.fileCellTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileCellTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileCellTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileCellTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileCellTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileCellTitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.fileCellSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileCellSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileCellSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileCellSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileCellSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileCellSubtitleLineHeight}: ${bodyXS.lineHeight};
                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.25rem;

                ${tokens.textareaPaddingTop}: 0.5625rem;
                ${tokens.textareaPaddingRight}: 0.5625rem;
                ${tokens.textareaPaddingBottom}: 0.5625rem;
                ${tokens.textareaPaddingLeft}: 0.5625rem;
                ${tokens.textareaFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textareaFontSize}: ${bodyXS.fontSize};
                ${tokens.textareaFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textareaFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textareaLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textareaLineHeight}: ${bodyXS.lineHeight};
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
