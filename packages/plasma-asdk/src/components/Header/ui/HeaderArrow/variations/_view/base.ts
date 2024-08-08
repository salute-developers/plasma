import { css } from '@salutejs/plasma-new-hope/styled-components';

import { classes, tokens } from '../../../../Header.tokens';

export const base = css`
    .${String(classes.headerArrowIcon)} {
        transition: var(${tokens.headerArrowTransition});
    }

    .${String(classes.headerArrowIconMinimize)} {
        transform: rotate(-90deg);
    }
`;
