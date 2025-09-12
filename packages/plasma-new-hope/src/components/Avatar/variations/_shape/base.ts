import { css } from '@linaria/core';

import { tokens } from '../../Avatar.tokens';
import { Image, Wrapper, StatusIcon } from '../../Avatar.styles';

export const base = css`
    ${Image} {
        border-radius: var(${tokens.borderRadius});
    }
    ${Wrapper} {
        border-radius: var(${tokens.borderRadius});
    }

    ${StatusIcon} {
        top: var(${tokens.statusTop});
        left: var(${tokens.statusLeft});
    }
`;
