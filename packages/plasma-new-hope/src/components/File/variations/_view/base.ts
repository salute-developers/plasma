import { css } from '@linaria/core';

import { tokens } from '../../File.tokens';

export const base = css`
    color: var(${tokens.fileColor});
    background: var(${tokens.fileBackgroundColor});

    :hover {
        background: var(${tokens.fileBackgroundColorHover}, var(${tokens.fileBackgroundColor}));
    }

    :active {
        background: var(${tokens.fileBackgroundColorActive}, var(${tokens.fileBackgroundColor}));
    }
`;
