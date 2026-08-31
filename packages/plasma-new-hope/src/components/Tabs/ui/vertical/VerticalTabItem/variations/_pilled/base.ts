import { css } from 'styled-components';

import { classes, privateTokens, tokens } from '../../../../../tokens';

export const base = css`
    &.${classes.tabsPilled} {
        ${privateTokens.outlineRadius}: var(${tokens.itemPilledBorderRadius});
        border-radius: var(${tokens.itemPilledBorderRadius});

        padding: var(${tokens.itemPaddingPilled}, var(${tokens.itemPaddingOrientationVertical}));
    }
`;
