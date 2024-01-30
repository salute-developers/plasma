import { css } from '@linaria/core';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    background-color: var(${tokens.tabsBackgroundColor});

    &::after {
        content: '';
        position: absolute;
        bottom: 0.125rem;
        left: 0.125rem;
        right: 0.125rem;
        background: var(${tokens.tabsDividerColor});
        height: var(${tokens.tabsDividerHeight});
        border-radius: var(${tokens.tabsDividerBorderRadius});
    }

    &.${classes.tabsHasLeftArrow} {
        &::after {
            left: 1.5rem;
        }
    }

    &.${classes.tabsHasRightArrow} {
        &::after {
            right: 1.5rem;
        }
    }
`;
