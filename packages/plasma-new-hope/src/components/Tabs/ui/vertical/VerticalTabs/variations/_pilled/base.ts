import { css } from 'styled-components';

import { classes, tokens } from '../../../../../tokens';

export const base = css`
    &.${classes.tabsPilled} {
        --plasma_private-outline-radius: var(${tokens.tabsPilledBorderRadius});
        border-radius: var(${tokens.tabsPilledBorderRadius});
    }
`;
