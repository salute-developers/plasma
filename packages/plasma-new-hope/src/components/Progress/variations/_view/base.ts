import { css } from 'styled-components';

import {
    StyledCaption,
    StyledLabel,
    StyledLabelContent,
    StyledProgress,
    StyledTrack,
    StyledValue,
} from '../../Progress.styles';
import { tokens } from '../../Progress.tokens';

export const base = css`
    ${StyledTrack} {
        background: var(${tokens.trackBackgroundColor});
    }

    ${StyledProgress} {
        background: var(${tokens.progressFilledBackgroundColor});
    }

    ${StyledLabel} {
        color: var(${tokens.labelColor});
    }

    ${StyledLabelContent} {
        color: var(${tokens.labelIconColor});
    }

    ${StyledValue} {
        color: var(${tokens.valueColor});
    }

    ${StyledCaption} {
        color: var(${tokens.captionColor});
    }
`;
