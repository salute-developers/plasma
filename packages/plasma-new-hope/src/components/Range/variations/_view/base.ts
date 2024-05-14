import { css } from '@linaria/core';

import { classes, tokens } from '../../Range.tokens';
import { StyledLabel, LeftHelper, StyledDivider, ContentWrapper } from '../../Range.styles';

export const base = css`
    ${ContentWrapper} {
        background-color: var(${tokens.background});
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColor});

        &.${classes.rangeError} {
            background-color: var(${tokens.backgroundError});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorError});
        }

        &.${classes.rangeSuccess} {
            background-color: var(${tokens.backgroundSuccess});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorSuccess});
        }
    }

    ${StyledDivider} {
        color: var(${tokens.dividerColor});
    }

    ${StyledLabel} {
        display: block;
        color: var(${tokens.labelColor});
    }

    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});
    }
`;
