import { css } from '@linaria/core';

import { classes, tokens } from '../../../../../tokens';

export const base = css`
    background-color: var(${tokens.tabsBackgroundColor});

    &::after {
        content: '';
        position: absolute;
        top: 0.125rem;
        bottom: 0.125rem;
        left: 0;
        background: var(${tokens.tabsDividerColor});
        width: var(${tokens.tabsDividerWidth});
        border-radius: var(${tokens.tabsDividerBorderRadius});
    }

    &.${classes.tabsHasTopArrow} {
        &::after {
            top: 1.5rem;
        }
    }

    &.${classes.tabsHasBottomArrow} {
        &::after {
            bottom: 1.5rem;
        }
    }

    &.${classes.tabsNoDivider} {
        &::after {
            width: 0;
        }
    }
`;
