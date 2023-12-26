import { css } from '@linaria/core';

import { classes, tokens } from '../../../../Header.tokens';

export const base = css`
    .${String(classes.headerArrowIcon)} {
        transition: var(${tokens.headerArrowTransition});
    }

    .${String(classes.headerArrowIconMinimize)} {
        transform: rotate(-90deg);
    }
`;
