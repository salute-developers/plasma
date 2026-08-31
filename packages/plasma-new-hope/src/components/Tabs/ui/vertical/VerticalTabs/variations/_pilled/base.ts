import { css } from 'styled-components';

import { classes, privateTokens, tokens } from '../../../../../tokens';

export const base = css`
    &.${classes.tabsPilled} {
        ${privateTokens.outlineRadius}: var(${tokens.tabsPilledBorderRadius});
        border-radius: var(${tokens.tabsPilledBorderRadius});
    }
`;
