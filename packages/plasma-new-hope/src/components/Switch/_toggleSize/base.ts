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
            left: var(${tokens.thumbOffsetOff}, 0rem);
            margin: auto 0;

            width: var(${tokens.thumbSize});
            height: var(${tokens.thumbSize});

            border-radius: var(${tokens.thumbBorderRadius});
            border: var(${tokens.thumbBorderWidth}, 0) solid
                var(${tokens.thumbBorderColorOff}, var(${tokens.thumbBackgroundColorOn}));
        }
    }

    ${StyledInput}:checked ~ ${StyledTrigger} {
        border-width: var(${tokens.trackBorderWidthOn}, var(${tokens.trackBorderWidthOff}));

        &::after {
            right: auto;
            left: var(${tokens.thumbOffsetOff}, 0rem);
            margin: auto 0;
            transform: translateX(
                calc(
                    var(${tokens.trackWidth}) - var(${tokens.thumbSize}) - var(${tokens.thumbOffsetOff}, 0rem) -
                        var(${tokens.thumbOffsetOn}, 0rem)
                )
            );

            border-color: var(${tokens.thumbBorderColorOn}, var(${tokens.thumbBackgroundColorOn}));
        }
    }

    :active:not([disabled]) ${StyledTrigger}::after {
        width: calc(var(${tokens.thumbSize}) * var(${tokens.thumbPressScale}, 1));
    }

    :active:not([disabled]) ${StyledInput}:checked ~ ${StyledTrigger}::after {
        transform: translateX(
            calc(
                var(${tokens.trackWidth}) - var(${tokens.thumbSize}) * var(${tokens.thumbPressScale}, 1) -
                    var(${tokens.thumbOffsetOff}, 0rem) - var(${tokens.thumbOffsetOn}, 0rem)
            )
        );
    }
`;
