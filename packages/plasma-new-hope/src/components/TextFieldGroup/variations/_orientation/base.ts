import { css } from '@linaria/core';

import { classes, tokens } from '../../TextFieldGroup.tokens';

export const base = css`
    flex-direction: var(${tokens.textFieldGroupOrientation});

    &.${classes.vertical} .${classes.textFieldGroupItem} {
        width: auto;
    }
`;
