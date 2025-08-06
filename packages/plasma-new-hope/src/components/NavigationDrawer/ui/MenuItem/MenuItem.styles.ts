import { css } from '@linaria/core';

import { tokens } from '../../NavigationDrawer.tokens';

export const menuItemStyles = css`
    padding: var(${tokens.menuItemPadding});
    display: flex;
    gap: var(${tokens.menuItemGap});
    align-items: center;
    cursor: pointer;
    border-radius: var(${tokens.menuItemBorderRadius});
    line-height: 1;

    &:hover {
        background: var(${tokens.menuItemHoverColor});
    }
`;

export const selectedStyles = css`
    background: var(${tokens.menuItemSelectedColor});
`;

export const disabledStyles = css`
    cursor: not-allowed;
    opacity: var(${tokens.menuItemDisabledOpacity});
`;

export const linkStyles = css`
    text-decoration: none;
    color: inherit;
`;
