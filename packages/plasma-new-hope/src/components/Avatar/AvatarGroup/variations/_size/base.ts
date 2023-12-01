import { css } from '@linaria/core';

import { tokens } from '../../../AvatarGroup.tokens';
import { tokens as avatarTokens } from '../../../Avatar.tokens';

export const base = css`
    ${avatarTokens.avatarSize}: var(${tokens.avatarGroupSize});
`;
