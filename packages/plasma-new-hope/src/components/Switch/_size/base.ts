import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
import { StyledTrigger } from '../Switch.styles';

export const base = css`
    font-family: var(${tokens.fontFamily});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
    font-size: var(${tokens.fontSize});

    ${StyledTrigger} {
        flex: 0 0 var(${tokens.trackWidth});
        width: var(${tokens.trackWidth});
        height: var(${tokens.trackHeight});
        border-radius: var(${tokens.trackBorderRadius});

        &::after {
            width: var(${tokens.thumbSize});
            height: var(${tokens.thumbSize});
            border-radius: var(${tokens.thumbBorderRadius});
            margin: auto var(${tokens.thumbOffset});
        }
    }

    :active ${StyledTrigger}::after {
        width: calc(var(${tokens.thumbSize}) * var(${tokens.thumbPressScale}));
    }
`;
