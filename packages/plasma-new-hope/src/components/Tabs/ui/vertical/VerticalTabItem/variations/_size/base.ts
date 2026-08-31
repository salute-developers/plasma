import { css } from 'styled-components';

import { classes, privateTokens, tokens } from '../../../../../tokens';

export const base = css`
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    font-style: var(${tokens.fontStyle});
    font-weight: var(${tokens.fontWeight});
    letter-spacing: var(${tokens.letterSpacing});
    line-height: var(${tokens.lineHeight});

    ${privateTokens.outlineRadius}: var(${tokens.itemBorderRadius});
    border-radius: var(${tokens.itemBorderRadius});

    width: 100%;
    height: var(${tokens.itemHeight});

    &.${classes.selectedTabsItem} {
        font-weight: var(${tokens.fontWeightSelected}, var(${tokens.fontWeight}));
    }
`;
