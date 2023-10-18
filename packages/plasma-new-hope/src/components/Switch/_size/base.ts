import { css } from '@linaria/core';

import { tokens, classes } from '../Switch.tokens';

const { styledTriggerClass } = classes;

export const base = css`
    font-family: var(${tokens.fontFamily});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});
    font-size: var(${tokens.fontSize});

    .${styledTriggerClass} {
        flex: 0 0 var(${tokens.switchTriggerWidth});
        width: var(${tokens.switchTriggerWidth});
        height: var(${tokens.switchTriggerHeight});
        border-radius: var(${tokens.switchTriggerBorderRadius});

        &::after {
            width: var(${tokens.switchEllipseSize});
            height: var(${tokens.switchEllipseSize});
            border-radius: var(${tokens.switchEllipseSize});
        }
    }
`;
