import { css } from '@linaria/core';

import { tokens } from '../../Panel.tokens';

export const base = css`
    padding: var(${tokens.padding});

    height: var(--plasma_private-panel-height);
    width: var(--plasma_private-panel-width);
`;
