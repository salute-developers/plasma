import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
import { StyledInput, StyledTrigger } from '../Switch.styles';

export const base = css`
    ${StyledTrigger} {
        box-sizing: border-box;
        flex: 0 0 var(${tokens.trackWidth});

        border-style: solid;
        border-width: var(${tokens.trackBorderWidthOff});
        border-radius: var(${tokens.trackBorderRadius});

        width: var(${tokens.trackWidth});
        height: var(${tokens.trackHeight});

        &::after {
            width: var(${tokens.thumbSize});
            height: var(${tokens.thumbSize});
            border-radius: var(${tokens.thumbBorderRadius});
            margin: auto var(${tokens.thumbOffsetOff});
        }
    }

    ${StyledInput}:checked ~ ${StyledTrigger} {
        border-width: var(${tokens.trackBorderWidthOn}, var(${tokens.trackBorderWidthOff}));

        &::after {
            margin: auto var(${tokens.thumbOffsetOn});
        }
    }

    :active:not([disabled]) ${StyledTrigger}::after {
        width: calc(var(${tokens.thumbSize}) * var(${tokens.thumbPressScale}, 1));
    }
`;
