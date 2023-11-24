import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';

export const base = css`
    &[readonly] {
        color: var(${tokens.colorReadOnly});
        background-color: var(${tokens.backgroundReadOnly});

        :hover,
        :active {
            scale: none;
            cursor: default;

            color: var(${tokens.colorReadOnlyHover});
            background-color: var(${tokens.backgroundReadOnlyHover});
        }
    }
`;
