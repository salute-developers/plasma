import { css } from '@linaria/core';

import { classes, tokens } from '../../InputGroup.tokens';

export const base = css`
    flex-direction: var(${tokens.inputGroupOrientation});

    &.${classes.vertical} .${classes.inputGroupItem} {
        width: auto;
    }
`;
