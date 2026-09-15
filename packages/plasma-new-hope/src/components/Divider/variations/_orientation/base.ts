import { css } from 'styled-components';

import { classes, tokens } from '../../Divider.tokens';

export const base = css`
    &.${classes.horizontal} {
        box-sizing: border-box;
        width: var(--plasma_private-divider-scale);
        height: var(${tokens.baseSideSize});

        padding: calc((var(${tokens.baseSideSize}) - var(${tokens.lineThickness}, var(${tokens.baseSideSize}))) / 2) 0;
        background-clip: content-box;
    }

    &.${classes.vertical} {
        align-self: stretch;
        position: relative;
        background: unset;
        width: var(${tokens.baseSideSize});

        /*
         * Хак для правильного расчета высоты для divider в процентах.
         * Так как у контенера может не быть явно заданной высоты,
         * для divider значение в процентах не будет применено
         */
        &::before {
            content: '';
            background: var(${tokens.background});
            border-radius: var(${tokens.borderRadius});
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: var(${tokens.lineThickness}, var(${tokens.baseSideSize}));
            min-height: var(--plasma_private-divider-scale);
        }
    }
`;
