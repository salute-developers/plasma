import { css } from '@linaria/core';

import { tokens } from '../Switch.tokens';

export const labelPosition_After = css`
    justify-content: start;
    flex-direction: row-reverse;

    --plasma_private-switch__label-offset: 0 0 0 var(${tokens.labelOffset});
`;
