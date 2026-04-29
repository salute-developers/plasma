import { css } from 'styled-components';

import { classes, privateTokens, tokens } from '../../Badge.tokens';

export const base = css`
    &.${classes.badgeClear} {
        color: var(${privateTokens.customColor}, var(${tokens.colorClear}));
        background-color: var(${privateTokens.customBackground}, var(${tokens.backgroundClear}));
    }
`;
