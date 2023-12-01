import { css } from '@linaria/core';

import { classes, tokens } from '../../../Avatar.tokens';

export const base = css`
    color: var(${tokens.color});
    background-color: var(${tokens.backgroundColor});

    .${classes.avatarImage} {
        width: 100%;
        height: 100%;
    }
`;
