import { css } from '@linaria/core';
import { styled } from '@linaria/react';
import { StyledHiddenTextArea } from 'src/components/TextArea/TextArea.styles';

import { component, mergeConfig } from '../../../engines';
import { fileConfig, fileTokens } from '../../File';
import { imageConfig } from '../../Image';
import { textAreaConfig, textAreaTokens } from '../../TextArea';

import { tokens } from './UserMessage.tokens';

const mergedFileConfig = mergeConfig(fileConfig);
export const FileComponent = component(mergedFileConfig);

const mergedImageConfig = mergeConfig(imageConfig);
export const ImageComponent = component(mergedImageConfig);

const mergedTextAreaConfig = mergeConfig(textAreaConfig);
export const TextAreaComponent = component(mergedTextAreaConfig);

export const base = css`
    position: relative;
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    box-sizing: border-box;
    margin-left: auto;
    width: 100%;
    max-width: calc(100% - var(${tokens.bubblePadding}));
`;

export const FileContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    overflow: hidden;
    width: 100%;

    background: var(${tokens.fileContentBackgroundColor});
    padding: var(${tokens.fileContentPadding});
    border-radius: var(${tokens.fileContentBorderRadius});
    gap: var(${tokens.fileContentGap});
    margin-bottom: var(${tokens.fileContentMarginBottom});

    max-width: var(${tokens.attachmentMaxWidth});
`;

export const FileUI = styled(FileComponent)`
    ${fileTokens.cellHeight}: var(${tokens.fileItemHeight});
    ${fileTokens.cellGap}: var(${tokens.fileItemGap});
    ${fileTokens.cellTextboxGap}: var(${tokens.fileItemTextboxGap});

    ${fileTokens.cellTitleColor}: var(${tokens.fileItemTitleColor});
    ${fileTokens.cellSubtitleColor}: var(${tokens.fileItemSubtitleColor});

    ${fileTokens.cellTitleFontFamily}: var(${tokens.fileItemTitleFontFamily});
    ${fileTokens.cellTitleFontSize}: var(${tokens.fileItemTitleFontSize});
    ${fileTokens.cellTitleFontStyle}: var(${tokens.fileItemTitleFontStyle});
    ${fileTokens.cellTitleFontWeight}: var(${tokens.fileItemTitleFontWeight});
    ${fileTokens.cellTitleLetterSpacing}: var(${tokens.fileItemTitleLetterSpacing});
    ${fileTokens.cellTitleLineHeight}: var(${tokens.fileItemTitleLineHeight});

    ${fileTokens.cellSubtitleFontFamily}: var(${tokens.fileItemSubtitleFontFamily});
    ${fileTokens.cellSubtitleFontSize}: var(${tokens.fileItemSubtitleFontSize});
    ${fileTokens.cellSubtitleFontStyle}: var(${tokens.fileItemSubtitleFontStyle});
    ${fileTokens.cellSubtitleFontWeight}: var(${tokens.fileItemSubtitleFontWeight});
    ${fileTokens.cellSubtitleLetterSpacing}: var(${tokens.fileItemSubtitleLetterSpacing});
    ${fileTokens.cellSubtitleLineHeight}: var(${tokens.fileItemSubtitleLineHeight});

    ${fileTokens.fileThumbSize}: var(${tokens.fileThumbSize});
    ${fileTokens.fileThumbRadius}: var(${tokens.fileThumbRadius});
`;

export const ImageWrapper = styled.div`
    display: block;
    overflow: hidden;
    width: 100%;

    border: 0.125rem solid var(${tokens.imageBorderColor});
    border-radius: var(${tokens.imageContentBorderRadius});
    margin-bottom: var(${tokens.fileContentMarginBottom});

    max-width: var(${tokens.attachmentMaxWidth});
`;

export const Bubble = styled.div<{ isEditing?: boolean }>`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    width: ${({ isEditing }) => (isEditing ? '100%' : 'fit-content')};
    max-width: 100%;
    min-width: ${({ isEditing }) => (isEditing ? `var(${tokens.attachmentMaxWidth})` : 'unset')};

    color: var(${tokens.textColor});
    background: ${({ isEditing }) =>
        isEditing ? `var(${tokens.backgroundColorEditing})` : `var(${tokens.backgroundColor})`};

    padding: var(${tokens.bubblePadding});
    border-radius: var(${tokens.bubbleBorderRadius});
    gap: var(${tokens.bubbleGap});
`;

export const TextContent = styled.div`
    box-sizing: border-box;
    overflow-wrap: break-word;
    white-space: pre-wrap;

    font-family: var(${tokens.textFontFamily});
    font-size: var(${tokens.textFontSize});
    font-style: var(${tokens.textFontStyle});
    font-weight: var(${tokens.textFontWeight});
    letter-spacing: var(${tokens.textLetterSpacing});
    line-height: var(${tokens.textLineHeight});
`;

export const TextAreaUI = styled(TextAreaComponent)`
    ${textAreaTokens.inputColor}: var(${tokens.textColor});
    ${textAreaTokens.inputCaretColor}: var(${tokens.caretColor});

    ${textAreaTokens.inputWidth}: 100%;
    ${textAreaTokens.inputHeight}: var(${tokens.textAreaHeight});
    ${textAreaTokens.inputMinHeight}: var(${tokens.textAreaMinHeight});

    ${textAreaTokens.inputFontFamily}: var(${tokens.textFontFamily});
    ${textAreaTokens.inputFontSize}: var(${tokens.textFontSize});
    ${textAreaTokens.inputFontStyle}: var(${tokens.textFontStyle});
    ${textAreaTokens.inputFontWeight}: var(${tokens.textFontWeight});
    ${textAreaTokens.inputLetterSpacing}: var(${tokens.textLetterSpacing});
    ${textAreaTokens.inputLineHeight}: var(${tokens.textLineHeight});

    ${textAreaTokens.scrollbarThumbBackgroundColor}: var(${tokens.scrollbarThumbBackgroundColor});
    ${textAreaTokens.scrollbarThumbBackgroundColorHover}: var(${tokens.scrollbarThumbBackgroundColorHover});
    ${textAreaTokens.scrollbarThumbBackgroundColorActive}: var(${tokens.scrollbarThumbBackgroundColorActive});
    ${textAreaTokens.scrollbarTrackBackgroundColor}: var(${tokens.scrollbarTrackBackgroundColor});
    ${textAreaTokens.scrollbarTrackBackgroundColorActive}: var(${tokens.scrollbarTrackBackgroundColorActive});
    ${textAreaTokens.scrollbarTrackBackgroundColorHover}: var(${tokens.scrollbarTrackBackgroundColorHover});

    ${textAreaTokens.scrollbarWidth}: var(${tokens.scrollbarWidth});
    ${textAreaTokens.scrollbarBorderWidth}: var(${tokens.scrollbarBorderWidth});

    ${StyledHiddenTextArea} {
        width: 100%;
    }
`;

export const ActionsWrapper = styled.div<{ isEditing?: boolean }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;

    margin-top: ${({ isEditing }) => (isEditing ? 0 : `var(${tokens.actionsMarginTop})`)};
    gap: ${({ isEditing }) => (isEditing ? `var(${tokens.actionsEditingGap})` : `var(${tokens.actionsGap})`)};
`;
