import { css } from '@linaria/core';

import { tokens, classes } from '../../../Dropdown.tokens';

const { dropdownItemIsSelected } = classes;

export const base = css`
    .${String(dropdownItemIsSelected)} {
        color: var(${tokens.itemColorSelected});
        background: var(${tokens.itemBackgroundSelected}) !important;
    }
`;
