import { css } from 'styled-components';

import { StyledProgress, StyledTrack } from '../../Progress.styles';
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
`;
