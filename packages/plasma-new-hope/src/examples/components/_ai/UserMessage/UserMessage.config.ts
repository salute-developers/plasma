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
                ${tokens.backgroundColor}: var(--surface-solid-card);
                ${tokens.backgroundColorEditing}: var(--surface-solid-tertiary);

                ${tokens.caretColor}: var(--text-accent);
                ${tokens.textColor}: var(--text-primary);

                ${tokens.fileItemTitleColor}: var(--text-primary);
                ${tokens.fileItemSubtitleColor}: var(--text-secondary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);
            `,
            secondary: css`
                ${tokens.backgroundColor}: var(--surface-solid-secondary);
                ${tokens.backgroundColorEditing}: var(--surface-solid-tertiary);

                ${tokens.caretColor}: var(--text-accent);
                ${tokens.textColor}: var(--text-primary);

                ${tokens.fileItemTitleColor}: var(--text-primary);
                ${tokens.fileItemSubtitleColor}: var(--text-secondary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);
            `,
            accent: css`
                ${tokens.backgroundColor}: var(--surface-transparent-accent);
                ${tokens.backgroundColorEditing}: var(--surface-solid-tertiary);

                ${tokens.caretColor}: var(--text-accent);
                ${tokens.textColor}: var(--text-primary);

                ${tokens.fileItemTitleColor}: var(--text-primary);
                ${tokens.fileItemSubtitleColor}: var(--text-secondary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);
            `,
            positive: css`
                ${tokens.backgroundColor}: var(--surface-transparent-positive);
                ${tokens.backgroundColorEditing}: var(--surface-solid-tertiary);

                ${tokens.caretColor}: var(--text-accent);
                ${tokens.textColor}: var(--text-primary);

                ${tokens.fileItemTitleColor}: var(--text-primary);
                ${tokens.fileItemSubtitleColor}: var(--text-secondary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);
            `,
            negative: css`
                ${tokens.backgroundColor}: var(--surface-transparent-negative);
                ${tokens.backgroundColorEditing}: var(--surface-solid-tertiary);

                ${tokens.caretColor}: var(--text-accent);
                ${tokens.textColor}: var(--text-primary);

                ${tokens.fileItemTitleColor}: var(--text-primary);
                ${tokens.fileItemSubtitleColor}: var(--text-secondary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);
            `,
            warning: css`
                ${tokens.backgroundColor}: var(--surface-transparent-warning);
                ${tokens.backgroundColorEditing}: var(--surface-solid-tertiary);

                ${tokens.caretColor}: var(--text-accent);
                ${tokens.textColor}: var(--text-primary);

                ${tokens.fileItemTitleColor}: var(--text-primary);
                ${tokens.fileItemSubtitleColor}: var(--text-secondary);

                ${tokens.scrollbarThumbBackgroundColor}: var(--surface-transparent-tertiary);
                ${tokens.scrollbarThumbBackgroundColorHover}: var(--surface-transparent-tertiary-hover);
                ${tokens.scrollbarThumbBackgroundColorActive}: var(--surface-transparent-tertiary-active);
                ${tokens.scrollbarTrackBackgroundColor}: var(--surface-transparent-primary);
                ${tokens.scrollbarTrackBackgroundColorActive}: var(--surface-transparent-primary-active);
                ${tokens.scrollbarTrackBackgroundColorHover}: var(--surface-transparent-primary-hover);
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

                ${tokens.textFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textLineHeight}: var(--plasma-typo-body-l-line-height);

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

                ${tokens.fileItemTitleFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.fileItemTitleFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.fileItemTitleFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.fileItemTitleFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.fileItemTitleLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.fileItemTitleLineHeight}: var(--plasma-typo-body-l-line-height);

                ${tokens.fileItemSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileItemSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileItemSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileItemSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileItemSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileItemSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.textFontFamily}: var(--plasma-typo-body-l-font-family);
                ${tokens.textFontSize}: var(--plasma-typo-body-l-font-size);
                ${tokens.textFontStyle}: var(--plasma-typo-body-l-font-style);
                ${tokens.textFontWeight}: var(--plasma-typo-body-l-font-weight);
                ${tokens.textLetterSpacing}: var(--plasma-typo-body-l-letter-spacing);
                ${tokens.textLineHeight}: var(--plasma-typo-body-l-line-height);

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

                ${tokens.fileItemTitleFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.fileItemTitleFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.fileItemTitleFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.fileItemTitleFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.fileItemTitleLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.fileItemTitleLineHeight}: var(--plasma-typo-body-m-line-height);

                ${tokens.fileItemSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileItemSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileItemSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileItemSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileItemSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileItemSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.textFontFamily}: var(--plasma-typo-body-m-font-family);
                ${tokens.textFontSize}: var(--plasma-typo-body-m-font-size);
                ${tokens.textFontStyle}: var(--plasma-typo-body-m-font-style);
                ${tokens.textFontWeight}: var(--plasma-typo-body-m-font-weight);
                ${tokens.textLetterSpacing}: var(--plasma-typo-body-m-letter-spacing);
                ${tokens.textLineHeight}: var(--plasma-typo-body-m-line-height);

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

                ${tokens.fileItemTitleFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.fileItemTitleFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.fileItemTitleFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.fileItemTitleFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.fileItemTitleLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.fileItemTitleLineHeight}: var(--plasma-typo-body-s-line-height);

                ${tokens.fileItemSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileItemSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileItemSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileItemSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileItemSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileItemSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.textFontFamily}: var(--plasma-typo-body-s-font-family);
                ${tokens.textFontSize}: var(--plasma-typo-body-s-font-size);
                ${tokens.textFontStyle}: var(--plasma-typo-body-s-font-style);
                ${tokens.textFontWeight}: var(--plasma-typo-body-s-font-weight);
                ${tokens.textLetterSpacing}: var(--plasma-typo-body-s-letter-spacing);
                ${tokens.textLineHeight}: var(--plasma-typo-body-s-line-height);

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

                ${tokens.fileItemTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileItemTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileItemTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileItemTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileItemTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileItemTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.fileItemSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileItemSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileItemSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileItemSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileItemSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileItemSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.textFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.textFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.textFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.textFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.textLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.textLineHeight}: var(--plasma-typo-body-xs-line-height);

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

                ${tokens.fileItemTitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileItemTitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileItemTitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileItemTitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileItemTitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileItemTitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.fileItemSubtitleFontFamily}: var(--plasma-typo-body-xs-font-family);
                ${tokens.fileItemSubtitleFontSize}: var(--plasma-typo-body-xs-font-size);
                ${tokens.fileItemSubtitleFontStyle}: var(--plasma-typo-body-xs-font-style);
                ${tokens.fileItemSubtitleFontWeight}: var(--plasma-typo-body-xs-font-weight);
                ${tokens.fileItemSubtitleLetterSpacing}: var(--plasma-typo-body-xs-letter-spacing);
                ${tokens.fileItemSubtitleLineHeight}: var(--plasma-typo-body-xs-line-height);

                ${tokens.fileThumbSize}: 1.75rem;
                ${tokens.fileThumbRadius}: 0.25rem;

                ${tokens.imageContentBorderRadius}: 0.5rem;
            `,
        },
        attachmentsView: {
            default: css`
                ${tokens.fileContentBackgroundColor}: var(--surface-solid-card);
                ${tokens.imageBorderColor}: var(--surface-solid-card);
            `,
            secondary: css`
                ${tokens.fileContentBackgroundColor}: var(--surface-solid-secondary);
                ${tokens.imageBorderColor}: var(--surface-solid-secondary);
            `,
        },
    },
};
