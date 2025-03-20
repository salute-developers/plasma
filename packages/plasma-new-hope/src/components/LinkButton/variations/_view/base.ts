import { css } from '@linaria/core';

import { tokens } from '../../LinkButton.tokens';

export const base = css`
    color: var(${tokens.linkButtonColor});
    background: var(${tokens.linkButtonBackgroundColor});

    :hover {
        color: var(${tokens.linkButtonColorHover}, var(${tokens.linkButtonColor}));
    }

    :active {
        color: var(${tokens.linkButtonColorActive}, var(${tokens.linkButtonColor}));
    }
`;
