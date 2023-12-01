import { css } from '@linaria/core';

import { classes, tokens } from '../../../Avatar.tokens';
import { tokens as avatarGroupTokens } from '../../../AvatarGroup.tokens';

export const base = css`
    .${classes.avatarImage} {
        width: 100%;
        height: 100%;
    }

    ${tokens.fontSize}: var(${avatarGroupTokens.fontSize});
    ${tokens.fontWeight}: var(${avatarGroupTokens.fontWeight});
    ${tokens.lineHeight}: var(${avatarGroupTokens.lineHeight});
    ${tokens.color}: var(${avatarGroupTokens.color});
    ${tokens.avatarSize}: var(${avatarGroupTokens.avatarGroupSize});
    ${tokens.backgroundColor}: var(${avatarGroupTokens.backgroundColor});
`;
