import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';

export const labelPosition_Before = css`
    // NOTE: it's looks like bug
    justify-content: space-between;
    --plasma_private-switch__label-offset: 0 var(${tokens.labelOffset}) 0 0;
`;
