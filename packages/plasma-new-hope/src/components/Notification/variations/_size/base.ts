import { css } from '@linaria/core';

import { classes, tokens } from '../../Notification.tokens';

export const base = css`
    // TODO: переделать, когда научимся работать с токенами при пересечнии свойств
    // issue #909
    .${classes.contentBox}.${classes.vertical} {
        padding: var(${tokens.contentPaddingTop}) var(${tokens.contentPaddingRight}) var(${tokens.contentPaddingBottom})
            var(${tokens.contentPaddingLeft});
    }

    .${classes.closeIcon}.${classes.vertical} {
        top: var(${tokens.closeIconTop});
        right: var(${tokens.closeIconRight});
    }
`;
