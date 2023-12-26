import { css } from '@linaria/core';

import { mediaQuery } from '../../../../../../mixins';
import { classes, tokens } from '../../../../Header.tokens';

export const base = css`
    .${String(classes.headerArrow)} {
        margin-right: var(${tokens.headerArrowMarginRight});

        ${mediaQuery('S')(`
                position: static;
                width: auto;
                height: calc(var(${tokens.headerPaddingTop}) + var(${tokens.headerHeight}) + var(${tokens.headerPaddingBottom}));
                padding: 0;
                margin-right: 1rem;
                margin-top: calc(var(${tokens.headerPaddingTop}) * -1);
            `)}
    }
`;
