import { css } from '@linaria/core';

import { classes, tokens } from '../../Notification.tokens';

export const base = css`
    .${classes.wrapper} {
        width: var(${tokens.width});
        padding: var(${tokens.padding});
    }

    .${classes.wrapper}.${classes.horizontal} {
        padding: var(${tokens.horizontalLayoutPadding});
        &.${classes.withoutCloseIcon} {
            padding-right: var(${tokens.horizontalLayoutRightPaddingWithoutCloseIcon});
        }
    }

    .${classes.wrapper}.${classes.horizontal}.${classes.oneLine} {
        padding: var(${tokens.paddingOneLineTextbox});
    }
`;
