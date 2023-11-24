import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';

export const base = css`
    color: var(${tokens.color});
    background-color: var(${tokens.background});

    :hover {
        color: var(${tokens.colorHover});
        background-color: var(${tokens.backgroundHover});

        scale: var(${tokens.scaleHover});
    }

    :active {
        color: var(${tokens.colorActive});
        background-color: var(${tokens.backgroundActive});

        scale: var(${tokens.scaleActive});
    }
`;
