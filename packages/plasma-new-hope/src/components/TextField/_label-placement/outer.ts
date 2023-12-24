import { css } from '@linaria/core';

import { Label } from '../TextField.styles';
import { tokens } from '../TextField.tokens';

export const labelPlacement_outer = css`
    ${Label} {
        display: block;
        margin-bottom: var(${tokens.labelOffset});
    }
`;
