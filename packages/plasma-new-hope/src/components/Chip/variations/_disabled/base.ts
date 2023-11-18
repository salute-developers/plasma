import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            scale: none;

            color: var(${tokens.color});
            background-color: var(${tokens.background});
        }
    }
`;
