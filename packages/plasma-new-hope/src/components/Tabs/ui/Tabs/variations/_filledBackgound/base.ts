import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    &.${String(classes.tabsGroupFilledBackground)} {
        background-color: var(${tokens.tabsFilledBackgroundColor});
    }
`;
