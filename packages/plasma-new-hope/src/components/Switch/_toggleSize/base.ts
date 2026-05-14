import { css } from 'styled-components';

import { tokens } from '../Switch.tokens';
import { StyledInput, StyledTrigger } from '../Switch.styles';

export const base = css`
    ${StyledTrigger} {
        flex: 0 0 var(${tokens.trackWidth});

        width: var(${tokens.trackWidth});
        height: var(${tokens.trackHeight});

        border-style: solid;
        border-width: var(${tokens.trackBorderWidthOff});
        border-radius: var(${tokens.trackBorderRadius});

        box-sizing: border-box;

        &::after {
            margin: auto var(${tokens.thumbOffsetOff});

            width: var(${tokens.thumbSize});
            height: var(${tokens.thumbSize});

            border-radius: var(${tokens.thumbBorderRadius});
            border: var(${tokens.thumbBorderWidth}, 0) solid var(${tokens.thumbBorderColorOff}, var(${tokens.thumbBackgroundColorOn}));

        }
    }

    ${StyledInput}:checked ~ ${StyledTrigger} {
        border-width: var(${tokens.trackBorderWidthOn}, var(${tokens.trackBorderWidthOff}));

        &::after {
            margin: auto var(${tokens.thumbOffsetOn});

            border-color: var(${tokens.thumbBorderColorOn}, var(${tokens.thumbBackgroundColorOn}));
        }
    }

    :active:not([disabled]) ${StyledTrigger}::after {
        width: calc(var(${tokens.thumbSize}) * var(${tokens.thumbPressScale}, 1));
    }
`;
