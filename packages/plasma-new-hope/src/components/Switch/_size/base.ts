import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';
import { StyledContent, StyledDescription, StyledLabel, StyledTrigger } from '../Switch.styles';

export const base = css`
    ${StyledContent} {
        font-family: var(${tokens.fontFamily});
        font-style: var(${tokens.fontStyle});
        font-weight: var(${tokens.fontWeight});
        letter-spacing: var(${tokens.letterSpacing});
        line-height: var(${tokens.lineHeight});
        font-size: var(${tokens.fontSize});
    }

    ${StyledDescription} {
        font-family: var(${tokens.descriptionFontFamily});
        font-style: var(${tokens.descriptionFontStyle});
        font-weight: var(${tokens.descriptionFontWeight});
        letter-spacing: var(${tokens.descriptionLetterSpacing});
        line-height: var(${tokens.descriptionLineHeight});
        font-size: var(${tokens.descriptionFontSize});
    }

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

    ${StyledLabel} {
        /* check _label_position */
        margin: var(${tokens.labelOffsetPrivate}, 0);
    }

    :active:not([disabled]) ${StyledTrigger}::after {
        width: calc(var(${tokens.thumbSize}) * var(${tokens.thumbPressScale}, 1));
    }
`;
