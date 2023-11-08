import { css } from '@linaria/core';

import { classes, tokens } from '../../Notification.tokens';

export const base = css`
    & > .${classes.title} {
        color: var(${tokens.titleColor});
    }
`;
