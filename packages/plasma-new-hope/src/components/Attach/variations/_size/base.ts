import { css } from '@linaria/core';

import { tokens, classes } from '../../Attach.tokens';

export const base = css`
    &.${classes.horizontal} {
        column-gap: var(${tokens.horizontalGap});
    }

    &.${classes.vertical} {
        row-gap: var(${tokens.verticalGap});
    }

    &.${classes.auto} {
        row-gap: var(${tokens.verticalGap});
        column-gap: var(${tokens.horizontalGap});
    }
}
`;
