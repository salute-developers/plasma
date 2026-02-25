import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { component, mergeConfig } from 'src/engines';
import { fileConfig, fileTokens } from 'src/components/File';
import { embedIconButtonConfig, embedIconButtonTokens } from 'src/components/EmbedIconButton';
import { iconButtonConfig, iconButtonTokens } from 'src/components/IconButton';
import { addScrollbar } from 'src/mixins';

import { tokens, classes } from './Input.tokens';

const fileMergedConfig = mergeConfig(fileConfig);
const File = component(fileMergedConfig);

const embedIconButtonMergedConfig = mergeConfig(embedIconButtonConfig);
const EmbedIconButton = component(embedIconButtonMergedConfig);

const iconButtonMergedConfig = mergeConfig(iconButtonConfig);
const IconButton = component(iconButtonMergedConfig);

export const base = css`
    box-sizing: border-box;
    display: block;
    padding-top: var(${tokens.paddingTop});
    padding-right: var(${tokens.paddingRight});
    padding-bottom: var(${tokens.paddingBottom});
    padding-left: var(${tokens.paddingLeft});
    border-radius: var(${tokens.borderRadius});
    background: var(${tokens.background});
`;

export const AttachmentsList = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: var(${tokens.attachmentsGap});
    margin-bottom: var(${tokens.attachmentsListMargin});
    border-radius: var(${tokens.fileBorderRadius});
    overflow-x: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const AttachedFile = styled(File)`
    background: var(${tokens.fileBackground});
    padding-top: var(${tokens.filePaddingTop});
    padding-right: var(${tokens.filePaddingRight});
    padding-bottom: var(${tokens.filePaddingBottom});
    padding-left: var(${tokens.filePaddingLeft});
    border-radius: var(${tokens.fileBorderRadius});

    ${fileTokens.embedIconButtonColor}: var(${tokens.fileEmbedIconButtonColor});
    ${fileTokens.embedIconButtonColorHover}: var(${tokens.fileEmbedIconButtonColorHover});
    ${fileTokens.embedIconButtonColorActive}: var(${tokens.fileEmbedIconButtonColorActive});
    ${fileTokens.embedIconButtonFocusColor}: var(${tokens.focusColor});
    ${fileTokens.cellTitleColor}: var(${tokens.fileCellTitleColor});
    ${fileTokens.cellSubtitleColor}: var(${tokens.fileCellSubtitleColor});
    ${fileTokens.embedIconButtonHeight}: var(${tokens.fileEmbedIconButtonHeight});
    ${fileTokens.embedIconButtonWidth}: var(${tokens.fileEmbedIconButtonWidth});
    ${fileTokens.embedIconButtonPadding}: var(${tokens.fileEmbedIconButtonPadding});
    ${fileTokens.embedIconButtonRadius}: var(${tokens.fileEmbedIconButtonRadius});
    ${fileTokens.cellHeight}: var(${tokens.fileCellHeight});
    ${fileTokens.cellTextboxGap}: var(${tokens.fileCellTextboxGap});
    ${fileTokens.cellGap}: var(${tokens.fileCellGap});
    ${fileTokens.cellTitleFontFamily}: var(${tokens.fileCellTitleFontFamily});
    ${fileTokens.cellTitleFontSize}: var(${tokens.fileCellTitleFontSize});
    ${fileTokens.cellTitleFontStyle}: var(${tokens.fileCellTitleFontStyle});
    ${fileTokens.cellTitleFontWeight}: var(${tokens.fileCellTitleFontWeight});
    ${fileTokens.cellTitleLetterSpacing}: var(${tokens.fileCellTitleLetterSpacing});
    ${fileTokens.cellTitleLineHeight}: var(${tokens.fileCellTitleLineHeight});
    ${fileTokens.cellSubtitleFontFamily}: var(${tokens.fileCellSubtitleFontFamily});
    ${fileTokens.cellSubtitleFontSize}: var(${tokens.fileCellSubtitleFontSize});
    ${fileTokens.cellSubtitleFontStyle}: var(${tokens.fileCellSubtitleFontStyle});
    ${fileTokens.cellSubtitleFontWeight}: var(${tokens.fileCellSubtitleFontWeight});
    ${fileTokens.cellSubtitleLetterSpacing}: var(${tokens.fileCellSubtitleLetterSpacing});
    ${fileTokens.cellSubtitleLineHeight}: var(${tokens.fileCellSubtitleLineHeight});
    ${fileTokens.fileThumbSize}: var(${tokens.fileThumbSize});
    ${fileTokens.fileThumbRadius}: var(${tokens.fileThumbRadius});
`;

export const AttachedImage = styled.div`
    position: relative;
    flex: none;
    background: none;
    padding: 0;
    margin: 0;
    border: none;
    width: calc(var(${tokens.fileCellHeight}) + var(${tokens.filePaddingTop}) + var(${tokens.filePaddingBottom}));
    height: calc(var(${tokens.fileCellHeight}) + var(${tokens.filePaddingTop}) + var(${tokens.filePaddingBottom}));
    line-height: 0;
    border-radius: var(${tokens.fileBorderRadius});
    overflow: hidden;

    &:focus,
    &:focus-visible {
        outline: none;
        border: none;
    }

    &:hover .${classes.attachedOverlay}, &:focus-visible .${classes.attachedOverlay} {
        visibility: visible;
    }

    &:focus-visible button::before {
        border-color: var(${tokens.focusColor});
    }
`;

export const AttachedImageOverlay = styled.div`
    visibility: hidden;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--overlay-blur);
    cursor: pointer;
`;

export const RemoveButton = styled(EmbedIconButton)`
    ${embedIconButtonTokens.embedIconButtonWidth}: var(${tokens.fileEmbedIconButtonWidth});
    ${embedIconButtonTokens.embedIconButtonHeight}: var(${tokens.fileEmbedIconButtonHeight});
    ${embedIconButtonTokens.embedIconButtonRadius}: var(${tokens.fileEmbedIconButtonRadius});
    ${embedIconButtonTokens.embedIconButtonColor}: var(${tokens.fileEmbedIconButtonColor});
`;

export const Thumb = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const TextAreaWrapper = styled.div`
    padding-top: var(${tokens.textareaPaddingTop});
    padding-right: var(${tokens.textareaPaddingRight});
    padding-bottom: var(${tokens.textareaPaddingBottom});
    padding-left: var(${tokens.textareaPaddingLeft});
    line-height: 0;
`;

export const TextArea = styled.textarea`
    width: 100%;
    background: transparent;
    border: none;
    color: var(${tokens.textareaColor});
    font-family: var(${tokens.textareaFontFamily});
    font-size: var(${tokens.textareaFontSize});
    font-style: var(${tokens.textareaFontStyle});
    font-weight: var(${tokens.textareaFontWeight});
    letter-spacing: var(${tokens.textareaLetterSpacing});
    line-height: var(${tokens.textareaLineHeight});
    caret-color: var(${tokens.textareaCaretColor});
    resize: none;
    overflow: hidden;

    &::placeholder {
        color: var(${tokens.textareaPlaceholderColor});
    }

    &:focus::placeholder {
        color: var(${tokens.textareaPlaceholderColorFocus});
    }

    &:focus,
    &:focus-visible {
        outline: none;
        box-shadow: none;
    }

    ${addScrollbar({
        scrollWidth: `var(${tokens.textareaScrollWidth})`,
        trackColor: `var(${tokens.textareaScrollTrackColor})`,
        thumbColor: `var(${tokens.textareaScrollThumbColor})`,
    })};

    --textarea-scroll-offset: calc(
        var(${tokens.textareaPaddingRight}) + var(${tokens.paddingRight}) - var(${tokens.textareaScrollWidth})
    );
    padding: 0 var(--textarea-scroll-offset) 0 0;
    margin-right: calc(var(--textarea-scroll-offset) * -1);

    &[data-condensed='true'] {
        padding: var(${tokens.inputFieldPadding});
        --textarea-scroll-offset: 0rem;
        margin-right: 0;
        box-sizing: border-box;
    }
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ActionBefore = styled.div`
    flex: none;
    line-height: 0;
`;

export const InputFieldWrapper = styled.div`
    flex: 1;
    line-height: 0;
`;

export const ActionAfter = styled.div`
    flex: none;
    line-height: 0;
`;

export const SubmitButton = styled(IconButton)`
    flex: none;
    margin-left: 0.125rem;

    ${iconButtonTokens.iconButtonColor}: var(${tokens.submitButtonColor});
    ${iconButtonTokens.iconButtonBackgroundColor}: var(${tokens.submitButtonBackgroundColor});
    ${iconButtonTokens.iconButtonBackgroundColorHover}: var(${tokens.submitButtonBackgroundColorHover});
    ${iconButtonTokens.iconButtonBackgroundColorActive}: var(${tokens.submitButtonBackgroundColorActive});
    ${iconButtonTokens.iconButtonLoadingBackgroundColor}: var(${tokens.submitButtonLoadingBackgroundColor});
    ${iconButtonTokens.iconButtonWidth}: var(${tokens.submitButtonWidth});
    ${iconButtonTokens.iconButtonHeight}: var(${tokens.submitButtonHeight});
    ${iconButtonTokens.iconButtonPadding}: var(${tokens.submitButtonPadding});
    ${iconButtonTokens.iconButtonRadius}: var(${tokens.submitButtonRadius});
    ${iconButtonTokens.iconButtonSpinnerSize}: var(${tokens.submitButtonSpinnerSize});
    ${iconButtonTokens.iconButtonSpinnerColor}: var(${tokens.submitButtonSpinnerColor});
    ${iconButtonTokens.iconButtonFocusColor}: var(${tokens.focusColor});
`;
