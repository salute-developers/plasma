import { css } from 'styled-components';

import { classes, tokens } from '../../../../tokens';

export const base = css`
    --plasma_private-outline-radius: var(${tokens.itemBorderRadius});
    border-radius: var(${tokens.itemBorderRadius});

    width: var(${tokens.itemWidth});
    height: var(${tokens.itemHeight});

    padding: var(${tokens.itemPadding});

    &.${classes.selectedSegmentItem} {
        font-weight: var(${tokens.fontWeightSelectedItem}, var(${tokens.fontWeight}));
    }
`;
