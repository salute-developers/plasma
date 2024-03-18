import { css } from '@linaria/core';

import { StyledProgress, StyledTrack, StyledValue } from '../../Progress.styles';
import { tokens } from '../../Progress.tokens';

export const base = css`
    ${StyledTrack} {
        height: var(${tokens.trackHeight});
        border-radius: var(${tokens.trackBorderRadius});
    }

    ${StyledProgress} {
        height: var(${tokens.progressFilledHeight});
        border-radius: var(${tokens.progressFilledBorderRadius});
    }

    ${StyledValue} {
        margin-left: var(${tokens.valueMarginLeft});
    }
`;
