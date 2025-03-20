import { css } from '@linaria/core';

import { classes, tokens } from '../../Range.tokens';
import {
    StyledLabel,
    LeftHelper,
    StyledDivider,
    ContentWrapper,
    StyledIndicator,
    StyledInput,
} from '../../Range.styles';
import { textFieldTokens } from '../../../TextField';

export const base = css`
    ${ContentWrapper} {
        background-color: var(${tokens.background});
        box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColor});

        &.${classes.rangeError} {
            background-color: var(${tokens.backgroundError});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorError});
            
            ${StyledInput} {
                ${textFieldTokens.color}: var(${tokens.textFieldColorError}, var(${tokens.textFieldColor}));
            }
        }

        &.${classes.rangeSuccess} {
            background-color: var(${tokens.backgroundSuccess});
            box-shadow: inset 0 0 0 var(${tokens.borderWidth}) var(${tokens.borderColorSuccess});
            
            ${StyledInput} {
                ${textFieldTokens.color}: var(${tokens.textFieldColorSuccess}, var(${tokens.textFieldColor}));
            }
        }

        &:before {
            box-shadow: var(${tokens.shadow});
        }
    }

    ${StyledDivider} {
        color: var(${tokens.dividerColor});
    }

    ${StyledLabel} {
        display: block;
        color: var(${tokens.labelColor});
    }

    ${StyledIndicator} {
        background-color: var(${tokens.indicatorColor});
    }

    ${LeftHelper} {
        color: var(${tokens.leftHelperColor});

        &.${classes.rangeError}, &.${classes.rangeValueError} {
            color: var(${tokens.leftHelperColorError});
        }

        &.${classes.rangeSuccess}, &.${classes.rangeValueSuccess} {
            color: var(${tokens.leftHelperColorSuccess});
        }
    }
`;
