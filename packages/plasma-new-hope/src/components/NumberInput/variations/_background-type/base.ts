import { css } from '@linaria/core';

import { classes, tokens } from '../../NumberInput.tokens';
import { InputWrapper } from '../../ui/Input/Input.styles';

export const base = css`
    ${InputWrapper} {
        background-color: var(${tokens.backgroundColor});
        box-shadow: inset 0 0 0 var(${tokens.inputWrapperBorderWidth}) var(${tokens.borderColor});

        &.${classes.manualInput}:hover {
            background-color: var(${tokens.backgroundColorHover});
            box-shadow: inset 0 0 0 var(${tokens.inputWrapperBorderWidth}) var(${tokens.borderColorHover});
        }
    }
`;
