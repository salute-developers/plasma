import { css } from '@linaria/core';

import { tokens } from '../../../Avatar.tokens';

export const base = css`
    width: var(${tokens.avatarSize});
    height: var(${tokens.avatarSize});
    font-size: var(${tokens.fontSize});
    font-weight: var(${tokens.fontWeight});
    line-height: var(${tokens.lineHeight});
`;
