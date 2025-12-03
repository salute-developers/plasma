import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { applyEllipsis } from '../../mixins';
import { component, mergeConfig } from '../../engines';
import { progressBarCircularConfig, progressBarCircularTokens } from '../ProgressBarCircular';
import { progressConfig, progressTokens } from '../Progress';
import { IconClose } from '../_Icon';

import { classes, tokens } from './File.tokens';

const mergedProgressBarCircularConfig = mergeConfig(progressBarCircularConfig);
const ProgressBarCircular = component(mergedProgressBarCircularConfig);

const mergedProgressConfig = mergeConfig(progressConfig);
const Progress = component(mergedProgressConfig);

export const FileLabel = styled.span`
    color: var(${tokens.fileLabelColor});
    font-family: var(${tokens.fileLabelFontFamily});
    font-size: var(${tokens.fileLabelFontSize});
    font-style: var(${tokens.fileLabelFontStyle});
    font-weight: var(${tokens.fileLabelFontWeight});
    letter-spacing: var(${tokens.fileLabelLetterSpacing});
    line-height: var(${tokens.fileLabelLineHeight});

    ${applyEllipsis()}
`;

export const FileDescription = styled.span`
    color: var(${tokens.fileDescriptionColor});
    font-family: var(${tokens.fileDescriptionFontFamily});
    font-size: var(${tokens.fileDescriptionFontSize});
    font-style: var(${tokens.fileDescriptionFontStyle});
    font-weight: var(${tokens.fileDescriptionFontWeight});
    letter-spacing: var(${tokens.fileDescriptionLetterSpacing});
    line-height: var(${tokens.fileDescriptionLineHeight});

    ${applyEllipsis()}
`;

export const FileTextContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-width: 0;
`;

export const CancelButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(${tokens.iconCloseSize});
    height: var(${tokens.iconCloseSize});
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
    cursor: pointer;
    color: var(${tokens.iconCloseColor});

    :hover {
        opacity: 0.8;
    }

    :active {
        opacity: 0.6;
    }
`;

export const StyledIconClose = styled(IconClose)`
    width: 100%;
    height: 100%;
    color: currentColor;
`;

export const FileThumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: var(${tokens.fileThumbSize});
    height: var(${tokens.fileThumbSize});
    margin: var(${tokens.fileThumbMargin});
    border-radius: var(${tokens.fileThumbRadius});
    overflow: hidden;
    color: var(${tokens.fileColor});

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const FileAction = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: var(${tokens.fileActionSize});
    height: var(${tokens.fileActionSize});
    margin: var(${tokens.fileActionMargin});
    color: var(${tokens.fileColor});
`;

export const FileLoader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: var(${tokens.fileActionMargin});
`;

export const StyledProgressBarCircular = styled(ProgressBarCircular)`
    ${progressBarCircularTokens.size}: var(${tokens.progressBarCircularSize});
    ${progressBarCircularTokens.width}: var(${tokens.progressBarCircularWidth});
    ${progressBarCircularTokens.height}: var(${tokens.progressBarCircularHeight});

    ${progressBarCircularTokens.strokeWidth}: var(${tokens.progressBarCircularStrokeWidth});
    ${progressBarCircularTokens.strokeSize}: var(${tokens.progressBarCircularStrokeSize});

    ${progressBarCircularTokens.backgroundStroke}: var(${tokens.progressBarCircularBackgroundStroke});
    ${progressBarCircularTokens.progressStroke}: var(${tokens.progressBarCircularStroke});

    ${progressBarCircularTokens.contentColor}: var(${tokens.progressBarCircularContentColor});
    ${progressBarCircularTokens.contentFontFamily}: var(${tokens.progressBarCircularContentFontFamily});
    ${progressBarCircularTokens.contentFontSize}: var(${tokens.progressBarCircularContentFontSize});
    ${progressBarCircularTokens.contentFontStyle}: var(${tokens.progressBarCircularContentFontStyle});
    ${progressBarCircularTokens.contentFontWeight}: var(${tokens.progressBarCircularContentFontWeight});
    ${progressBarCircularTokens.contentLetterSpacing}: var(${tokens.progressBarCircularContentLetterSpacing});
    ${progressBarCircularTokens.contentLineHeight}: var(${tokens.progressBarCircularContentLineHeight});
`;

export const StyledProgress = styled(Progress)`
    ${progressTokens.trackBackgroundColor}: var(${tokens.progressTrackBackgroundColor});
    ${progressTokens.trackHeight}: var(${tokens.progressTrackHeight});
    ${progressTokens.trackBorderRadius}: var(${tokens.progressTrackBorderRadius});

    ${progressTokens.progressFilledBackgroundColor}: var(${tokens.progressFilledBackgroundColor});
    ${progressTokens.progressFilledHeight}: var(${tokens.progressFilledHeight});
    ${progressTokens.progressFilledBorderRadius}: var(${tokens.progressFilledBorderRadius});
    width: 100%;
`;

export const FileLinearLoader = styled.div`
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: var(${tokens.fileLinearLoaderHeight});
    display: flex;
    align-items: center;
`;

export const FileContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: var(${tokens.fileHeight});
`;

export const base = css`
    position: relative;
    display: flex;
    align-items: space-between;
    box-sizing: border-box;
    overflow: hidden;
    width: var(${tokens.fileWidth}, 100%);

    background: var(${tokens.fileBackgroundColor});
    border-radius: var(${tokens.fileRadius});
    padding: var(${tokens.filePadding});
    padding-left: var(${tokens.filePaddingLeft}, var(${tokens.filePadding}));
    padding-right: var(${tokens.filePaddingRight}, var(${tokens.filePadding}));

    cursor: pointer;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    :hover {
        background: var(${tokens.fileBackgroundColorHover}, var(${tokens.fileBackgroundColor}));
    }

    :active {
        background: var(${tokens.fileBackgroundColorActive}, var(${tokens.fileBackgroundColor}));
    }

    &.${classes.fileDisabled} {
        opacity: var(${tokens.fileDisabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            background: var(${tokens.fileBackgroundColor});
        }
    }

    &.${classes.fileLoaderLinear} {
        padding-bottom: var(${tokens.fileLinearLoaderHeight});
    }

    &.${classes.fileActionLeft} {
        ${FileAction} {
            order: -1;
        }
    }

    &.${classes.fileActionRight} {
        ${FileAction} {
            order: 1;
        }
    }
`;
