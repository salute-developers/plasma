import { styled } from '@linaria/react';
import { progressConfig, progressTokens } from 'src/components/Progress';
import { progressBarCircularConfig, progressBarCircularTokens } from 'src/components/ProgressBarCircular';
import { component, mergeConfig } from 'src/engines';

import { tokens } from '../../File.tokens';
import { EmbedIconButtonUI } from '../EmbedIconButton/EmbedIconButton.styles';

const mergedProgressBarCircularConfig = mergeConfig(progressBarCircularConfig);
const ProgressBarCircular = component(mergedProgressBarCircularConfig);

const mergedProgressConfig = mergeConfig(progressConfig);
const Progress = component(mergedProgressConfig);

export const ProgressBarCircularUI = styled(ProgressBarCircular)`
    ${progressBarCircularTokens.size}: var(${tokens.progressBarCircularSize});
    ${progressBarCircularTokens.width}: var(${tokens.progressBarCircularWidth});
    ${progressBarCircularTokens.height}: var(${tokens.progressBarCircularHeight});

    ${progressBarCircularTokens.strokeWidth}: var(${tokens.progressBarCircularStrokeWidth});
    ${progressBarCircularTokens.strokeSize}: var(${tokens.progressBarCircularStrokeSize});

    ${progressBarCircularTokens.backgroundStroke}: var(${tokens.progressBarCircularBackgroundStroke});
    ${progressBarCircularTokens.progressStroke}: var(${tokens.progressBarCircularStroke});

    ${progressBarCircularTokens.contentColor}: var(${tokens.progressBarCircularContentColor});

    ${EmbedIconButtonUI} {
        width: 100%;
        height: 100%;
    }
`;

export const ProgressUI = styled(Progress)`
    ${progressTokens.trackBackgroundColor}: var(${tokens.progressTrackBackgroundColor});
    ${progressTokens.trackHeight}: var(${tokens.progressTrackHeight});
    ${progressTokens.trackBorderRadius}: var(${tokens.progressTrackBorderRadius});

    ${progressTokens.progressFilledBackgroundColor}: var(${tokens.progressFilledBackgroundColor});
    ${progressTokens.progressFilledHeight}: var(${tokens.progressFilledHeight});
    ${progressTokens.progressFilledBorderRadius}: var(${tokens.progressFilledBorderRadius});
    
    width: 100%;
`;
