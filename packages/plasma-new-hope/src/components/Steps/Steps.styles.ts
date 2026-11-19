import { css } from 'styled-components';

import { classes, privateTokens, tokens } from './Steps.tokens';

export const base = css`
    display: flex;
    flex-direction: row;

    &.${classes.simple} {
        align-items: center;

        &:not(&.${classes.verticalOrientation}) {
            &.${classes.hasIndicator} {
                height: max(var(${privateTokens.indicatorTrack}, 0px), var(${tokens.activeIndicatorSize}));
            }

            &:not(.${classes.hasIndicator}) {
                height: max(var(${privateTokens.indicatorTrack}, 0px), var(${tokens.activeBulletSize}));
            }
        }

        &.${classes.verticalOrientation} {
            &.${classes.hasIndicator} {
                width: max(var(${privateTokens.indicatorTrack}, 0px), var(${tokens.activeIndicatorSize}));
            }
            &:not(.${classes.hasIndicator}) {
                width: max(var(${privateTokens.indicatorTrack}, 0px), var(${tokens.activeBulletSize}));
            }
        }
    }

    &.${classes.verticalOrientation} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        height: 100%;

        &:not(.${classes.simple}) {
            &.${classes.hasIndicator} {
                padding-top: max(0px, calc((var(${tokens.titleLineHeight}) - var(${tokens.indicatorSize})) / 2));
            }

            &:not(.${classes.hasIndicator}) {
                padding-top: max(0px, calc((var(${tokens.titleLineHeight}) - var(${tokens.bulletSize})) / 2));
            }
        }
    }
`;
