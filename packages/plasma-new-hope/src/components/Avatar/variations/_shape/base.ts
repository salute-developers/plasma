import { css } from '@linaria/core';

import { tokens } from '../../Avatar.tokens';
import { StatusIcon } from '../../Avatar.styles';

export const base = css`
    ${StatusIcon} {
        top: var(${tokens.statusTop});
        left: var(${tokens.statusLeft});
    }
`;
