import { css } from '@linaria/core';
import { styled } from '@linaria/react';

import { spinnerConfig, spinnerTokens } from '../Spinner';
import { progressBarCircularConfig, progressBarCircularTokens } from '../ProgressBarCircular';
import { component, mergeConfig } from '../../engines';

import { tokens } from './Loader.tokens';

const mergedSpinnerConfig = mergeConfig(spinnerConfig);
const Spinner = component(mergedSpinnerConfig);

const mergedProgressBarCircularConfig = mergeConfig(progressBarCircularConfig);
const ProgressBarCircular = component(mergedProgressBarCircularConfig);

export const base = css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    width: var(${tokens.width});
    height: var(${tokens.height});
`;

export const StyledSpinner = styled(Spinner)`
    ${spinnerTokens.size}: var(${tokens.spinnerSize});
    ${spinnerTokens.color}: var(${tokens.spinnerColor});
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
