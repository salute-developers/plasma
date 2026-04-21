import {
    bodyL,
    bodyM,
    bodyS,
    bodyXS,
    surfaceSolidCard,
    surfaceSolidSecondary,
    surfaceSolidTertiary,
    surfaceTransparentAccent,
    surfaceTransparentNegative,
    surfaceTransparentPositive,
    surfaceTransparentPrimary,
    surfaceTransparentPrimaryActive,
    surfaceTransparentPrimaryHover,
    surfaceTransparentTertiary,
    surfaceTransparentTertiaryActive,
    surfaceTransparentTertiaryHover,
    surfaceTransparentWarning,
    textAccent,
    textPrimary,
    textSecondary,
} from '@salutejs/plasma-themes/tokens/plasma_b2c';
import { css } from '@linaria/core';

import { userMessageTokens as tokens } from '../../../../components/_ai/UserMessage';

export const config = {
    defaults: {
        view: 'default',
        size: 'm',
        fileContnentVew: 'default',
    },
    variations: {
        view: {
            default: css`
                ${tokens.backgroundColor}: ${surfaceSolidCard};
                ${tokens.backgroundColorEditing}: ${surfaceSolidTertiary};

                ${tokens.caretColor}: ${textAccent};
                ${tokens.textColor}: ${textPrimary};

                ${tokens.fileItemTitleColor}: ${textPrimary};
                ${tokens.fileItemSubtitleColor}: ${textSecondary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
            `,
            secondary: css`
                ${tokens.backgroundColor}: ${surfaceSolidSecondary};
                ${tokens.backgroundColorEditing}: ${surfaceSolidTertiary};

                ${tokens.caretColor}: ${textAccent};
                ${tokens.textColor}: ${textPrimary};

                ${tokens.fileItemTitleColor}: ${textPrimary};
                ${tokens.fileItemSubtitleColor}: ${textSecondary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
            `,
            accent: css`
                ${tokens.backgroundColor}: ${surfaceTransparentAccent};
                ${tokens.backgroundColorEditing}: ${surfaceSolidTertiary};

                ${tokens.caretColor}: ${textAccent};
                ${tokens.textColor}: ${textPrimary};

                ${tokens.fileItemTitleColor}: ${textPrimary};
                ${tokens.fileItemSubtitleColor}: ${textSecondary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
            `,
            positive: css`
                ${tokens.backgroundColor}: ${surfaceTransparentPositive};
                ${tokens.backgroundColorEditing}: ${surfaceSolidTertiary};

                ${tokens.caretColor}: ${textAccent};
                ${tokens.textColor}: ${textPrimary};

                ${tokens.fileItemTitleColor}: ${textPrimary};
                ${tokens.fileItemSubtitleColor}: ${textSecondary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
            `,
            negative: css`
                ${tokens.backgroundColor}: ${surfaceTransparentNegative};
                ${tokens.backgroundColorEditing}: ${surfaceSolidTertiary};

                ${tokens.caretColor}: ${textAccent};
                ${tokens.textColor}: ${textPrimary};

                ${tokens.fileItemTitleColor}: ${textPrimary};
                ${tokens.fileItemSubtitleColor}: ${textSecondary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
            `,
            warning: css`
                ${tokens.backgroundColor}: ${surfaceTransparentWarning};
                ${tokens.backgroundColorEditing}: ${surfaceSolidTertiary};

                ${tokens.caretColor}: ${textAccent};
                ${tokens.textColor}: ${textPrimary};

                ${tokens.fileItemTitleColor}: ${textPrimary};
                ${tokens.fileItemSubtitleColor}: ${textSecondary};

                ${tokens.scrollbarThumbBackgroundColor}: ${surfaceTransparentTertiary};
                ${tokens.scrollbarThumbBackgroundColorHover}: ${surfaceTransparentTertiaryHover};
                ${tokens.scrollbarThumbBackgroundColorActive}: ${surfaceTransparentTertiaryActive};
                ${tokens.scrollbarTrackBackgroundColor}: ${surfaceTransparentPrimary};
                ${tokens.scrollbarTrackBackgroundColorActive}: ${surfaceTransparentPrimaryActive};
                ${tokens.scrollbarTrackBackgroundColorHover}: ${surfaceTransparentPrimaryHover};
            `,
        },
        size: {
            xl: css`
                ${tokens.bubblePadding}: 1.313rem 1.125rem;
                ${tokens.bubbleBorderRadius}: 1rem;
                ${tokens.bubbleGap}: 1rem;

                ${tokens.textAreaHeight}: 1.375rem;
                ${tokens.textAreaMinHeight}: 1.375rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.textFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFontSize}: ${bodyL.fontSize};
                ${tokens.textFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFontWeight}: ${bodyL.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textLineHeight}: ${bodyL.lineHeight};

                ${tokens.actionsGap}: 0.5rem;
                ${tokens.actionsEditingGap}: 0.125rem;
                ${tokens.actionsMarginTop}: 0.75rem;

                ${tokens.attachmentMaxWidth}: 13.75rem;

                ${tokens.fileContentBorderRadius}: 1rem;
                ${tokens.fileContentPadding}: 0.75rem 0.875rem;
                ${tokens.fileContentGap}: 0.75rem;
                ${tokens.fileContentMarginBottom}: 0.625rem;

                ${tokens.fileItemHeight}: 2.5rem;
                ${tokens.fileItemGap}: 0.75rem;
                ${tokens.fileItemTextboxGap}: 0.125rem;

                ${tokens.fileItemTitleFontFamily}: ${bodyL.fontFamily};
                ${tokens.fileItemTitleFontSize}: ${bodyL.fontSize};
                ${tokens.fileItemTitleFontStyle}: ${bodyL.fontStyle};
                ${tokens.fileItemTitleFontWeight}: ${bodyL.fontWeight};
                ${tokens.fileItemTitleLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.fileItemTitleLineHeight}: ${bodyL.lineHeight};

                ${tokens.fileItemSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileItemSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileItemSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileItemSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileItemSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileItemSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fileThumbSize}: 2.5rem;
                ${tokens.fileThumbRadius}: 0.625rem;

                ${tokens.imageContentBorderRadius}: 1rem;
            `,
            l: css`
                ${tokens.bubblePadding}: 1.063rem 1rem;
                ${tokens.bubbleBorderRadius}: 0.875rem;
                ${tokens.bubbleGap}: 1rem;

                ${tokens.textAreaHeight}: 1.375rem;
                ${tokens.textAreaMinHeight}: 1.375rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.textFontFamily}: ${bodyL.fontFamily};
                ${tokens.textFontSize}: ${bodyL.fontSize};
                ${tokens.textFontStyle}: ${bodyL.fontStyle};
                ${tokens.textFontWeight}: ${bodyL.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyL.letterSpacing};
                ${tokens.textLineHeight}: ${bodyL.lineHeight};

                ${tokens.actionsGap}: 0.5rem;
                ${tokens.actionsEditingGap}: 0.125rem;
                ${tokens.actionsMarginTop}: 0.75rem;

                ${tokens.attachmentMaxWidth}: 13.75rem;

                ${tokens.fileContentBorderRadius}: 0.875rem;
                ${tokens.fileContentPadding}: 0.5rem 0.625rem;
                ${tokens.fileContentGap}: 0.625rem;
                ${tokens.fileContentMarginBottom}: 0.625rem;

                ${tokens.fileItemHeight}: 2.5rem;
                ${tokens.fileItemGap}: 0.625rem;
                ${tokens.fileItemTextboxGap}: 0.125rem;

                ${tokens.fileItemTitleFontFamily}: ${bodyM.fontFamily};
                ${tokens.fileItemTitleFontSize}: ${bodyM.fontSize};
                ${tokens.fileItemTitleFontStyle}: ${bodyM.fontStyle};
                ${tokens.fileItemTitleFontWeight}: ${bodyM.fontWeight};
                ${tokens.fileItemTitleLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.fileItemTitleLineHeight}: ${bodyM.lineHeight};

                ${tokens.fileItemSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileItemSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileItemSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileItemSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileItemSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileItemSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fileThumbSize}: 2.25rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.imageContentBorderRadius}: 0.875rem;
            `,
            m: css`
                ${tokens.bubblePadding}: 0.875rem;
                ${tokens.bubbleBorderRadius}: 0.75rem;
                ${tokens.bubbleGap}: 0.875rem;

                ${tokens.textAreaHeight}: 1.25rem;
                ${tokens.textAreaMinHeight}: 1.25rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.textFontFamily}: ${bodyM.fontFamily};
                ${tokens.textFontSize}: ${bodyM.fontSize};
                ${tokens.textFontStyle}: ${bodyM.fontStyle};
                ${tokens.textFontWeight}: ${bodyM.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyM.letterSpacing};
                ${tokens.textLineHeight}: ${bodyM.lineHeight};

                ${tokens.actionsGap}: 0.5rem;
                ${tokens.actionsEditingGap}: 0.125rem;
                ${tokens.actionsMarginTop}: 0.75rem;

                ${tokens.attachmentMaxWidth}: 10rem;

                ${tokens.fileContentBorderRadius}: 0.75rem;
                ${tokens.fileContentPadding}: 0.438rem 0.5rem;
                ${tokens.fileContentGap}: 0.5rem;
                ${tokens.fileContentMarginBottom}: 0.5rem;

                ${tokens.fileItemHeight}: 2.5rem;
                ${tokens.fileItemGap}: 0.5rem;
                ${tokens.fileItemTextboxGap}: 0.125rem;

                ${tokens.fileItemTitleFontFamily}: ${bodyS.fontFamily};
                ${tokens.fileItemTitleFontSize}: ${bodyS.fontSize};
                ${tokens.fileItemTitleFontStyle}: ${bodyS.fontStyle};
                ${tokens.fileItemTitleFontWeight}: ${bodyS.fontWeight};
                ${tokens.fileItemTitleLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.fileItemTitleLineHeight}: ${bodyS.lineHeight};

                ${tokens.fileItemSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileItemSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileItemSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileItemSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileItemSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileItemSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fileThumbSize}: 2rem;
                ${tokens.fileThumbRadius}: 0.375rem;

                ${tokens.imageContentBorderRadius}: 0.75rem;
            `,
            s: css`
                ${tokens.bubblePadding}: 0.688rem 0.75rem;
                ${tokens.bubbleBorderRadius}: 0.625rem;
                ${tokens.bubbleGap}: 0.875rem;

                ${tokens.textAreaHeight}: 1.125rem;
                ${tokens.textAreaMinHeight}: 1.125rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.textFontFamily}: ${bodyS.fontFamily};
                ${tokens.textFontSize}: ${bodyS.fontSize};
                ${tokens.textFontStyle}: ${bodyS.fontStyle};
                ${tokens.textFontWeight}: ${bodyS.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyS.letterSpacing};
                ${tokens.textLineHeight}: ${bodyS.lineHeight};

                ${tokens.actionsGap}: 0.5rem;
                ${tokens.actionsEditingGap}: 0.125rem;
                ${tokens.actionsMarginTop}: 0.75rem;

                ${tokens.attachmentMaxWidth}: 10rem;

                ${tokens.fileContentBorderRadius}: 0.625rem;
                ${tokens.fileContentPadding}: 0.313rem 0.375rem;
                ${tokens.fileContentGap}: 0.375rem;
                ${tokens.fileContentMarginBottom}: 0.375rem;

                ${tokens.fileItemHeight}: 1.875rem;
                ${tokens.fileItemGap}: 0.375rem;
                ${tokens.fileItemTextboxGap}: 0.125rem;

                ${tokens.fileItemTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileItemTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileItemTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileItemTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileItemTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileItemTitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fileItemSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileItemSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileItemSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileItemSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileItemSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileItemSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.25rem;

                ${tokens.imageContentBorderRadius}: 0.625rem;
            `,
            xs: css`
                ${tokens.bubblePadding}: 0.563rem 0.625rem;
                ${tokens.bubbleBorderRadius}: 0.5rem;
                ${tokens.bubbleGap}: 0.625rem;

                ${tokens.textAreaHeight}: 1.125rem;
                ${tokens.textAreaMinHeight}: 1.125rem;

                ${tokens.scrollbarWidth}: 0.188rem;
                ${tokens.scrollbarBorderWidth}: 0.063rem;

                ${tokens.textFontFamily}: ${bodyXS.fontFamily};
                ${tokens.textFontSize}: ${bodyXS.fontSize};
                ${tokens.textFontStyle}: ${bodyXS.fontStyle};
                ${tokens.textFontWeight}: ${bodyXS.fontWeight};
                ${tokens.textLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.textLineHeight}: ${bodyXS.lineHeight};

                ${tokens.actionsGap}: 0.5rem;
                ${tokens.actionsEditingGap}: 0.125rem;
                ${tokens.actionsMarginTop}: 0.625rem;

                ${tokens.attachmentMaxWidth}: 10rem;

                ${tokens.fileContentBorderRadius}: 0.5rem;
                ${tokens.fileContentPadding}: 0.188rem 0.25rem;
                ${tokens.fileContentGap}: 0.25rem;
                ${tokens.fileContentMarginBottom}: 0.25rem;

                ${tokens.fileItemHeight}: 1.875rem;
                ${tokens.fileItemGap}: 0.375rem;
                ${tokens.fileItemTextboxGap}: 0.125rem;

                ${tokens.fileItemTitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileItemTitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileItemTitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileItemTitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileItemTitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileItemTitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fileItemSubtitleFontFamily}: ${bodyXS.fontFamily};
                ${tokens.fileItemSubtitleFontSize}: ${bodyXS.fontSize};
                ${tokens.fileItemSubtitleFontStyle}: ${bodyXS.fontStyle};
                ${tokens.fileItemSubtitleFontWeight}: ${bodyXS.fontWeight};
                ${tokens.fileItemSubtitleLetterSpacing}: ${bodyXS.letterSpacing};
                ${tokens.fileItemSubtitleLineHeight}: ${bodyXS.lineHeight};

                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.25rem;

                ${tokens.imageContentBorderRadius}: 0.5rem;
            `,
        },
        attachmentsView: {
            default: css`
                ${tokens.fileContentBackgroundColor}: ${surfaceSolidCard};
                ${tokens.imageBorderColor}: ${surfaceSolidCard};
            `,
            secondary: css`
                ${tokens.fileContentBackgroundColor}: ${surfaceSolidSecondary};
                ${tokens.imageBorderColor}: ${surfaceSolidSecondary};
            `,
        },
    },
};
