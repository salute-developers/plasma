import { css } from '@linaria/core';

import { classes, tokens } from './Steps.tokens';

export const base = css`
    display: flex;
    flex-direction: row;

    &.${classes.simple} {
        align-items: center;

        &:not(&.${classes.verticalOrientation}) {
            &.${classes.hasIndicator} {
                height: var(${tokens.activeIndicatorSize});
            }

            &:not(.${classes.hasIndicator}) {
                height: var(${tokens.activeBulletSize});
            }
        }

        &.${classes.verticalOrientation} {
            &.${classes.hasIndicator} {
                width: var(${tokens.activeIndicatorSize});
            }
            &:not(.${classes.hasIndicator}) {
                width: var(${tokens.activeBulletSize});
            }
        }
    }

    &.${classes.verticalOrientation} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
    }
`;
