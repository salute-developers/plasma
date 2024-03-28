import { css } from '@linaria/core';

import { StyledProgress, StyledTrack, StyledValue } from '../../Progress.styles';
import { tokens } from '../../Progress.tokens';

export const base = css`
    ${StyledTrack} {
        background: var(${tokens.trackBackgroundColor});
    }

    ${StyledProgress} {
        background: var(${tokens.progressFilledBackgroundColor});
    }

    ${StyledValue} {
        color: var(${tokens.valueColor});
    }
`;
