import { css } from '@linaria/core';

import { classes, tokens } from '../../Chip.tokens';

export const base = css`
    &.${String(classes.pilled)} {
        border-radius: var(${tokens.pilledBorderRadius});
    }
`;
