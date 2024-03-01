import { css } from '@linaria/core';

import { tokens } from '../../ButtonGroup.tokens';

export const base = css`
    flex-direction: var(${tokens.buttonGroupOrientation});
`;
