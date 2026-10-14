import { css } from 'styled-components';

import { classes, tokens } from '../../Notification.tokens';

export const base = css`
    .${classes.wrapper} {
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

    .${classes.wrapper}.${classes.withImage} {
        padding: var(${tokens.imageContentPadding}, 1rem);
        border: 0;

        &::before {
            inset: 0;
        }

        .${classes.contentBox} {
            padding: 0;
        }
    }

    .${classes.wrapper}.${classes.fullWidthImage} {
        padding-top: 0;

        .${classes.image} {
            width: calc(100% + 2 * var(${tokens.imageContentPadding}, 1rem));
            height: var(${tokens.imageFullWidthHeight}, 12.5rem);
            margin-left: calc(-1 * var(${tokens.imageContentPadding}, 1rem));
            border-top-left-radius: var(${tokens.borderRadius});
            border-top-right-radius: var(${tokens.borderRadius});
        }
    }
`;
