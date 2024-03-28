import { css } from '@linaria/core';

import { classes, tokens } from '../../Divider.tokens';

export const base = css`
    &.${classes.horizontal} {
        width: var(--plasma_private-divider-scale);
        height: var(${tokens.baseSideSize});
    }

    &.${classes.vertical} {
        align-self: stretch;
        position: relative;
        background: unset;

        /* 
         * Хак для правильного расчета высоты для divider в процентах. 
         * Так как у контенера может не быть явно заданной высоты, 
         * для divider значение в процентах не будет применено 
         */
        &:before {
            content: '';
            background: var(${tokens.background});
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: var(${tokens.baseSideSize});
            min-height: var(--plasma_private-divider-scale);
        }
    }
`;
