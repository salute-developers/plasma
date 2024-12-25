import { css } from '@linaria/core';

import { tokens } from '../../Note.tokens';
import { ContentBefore } from '../../Note.styles';

export const base = css`
    background: var(${tokens.background});
    color: var(${tokens.color});

    ${ContentBefore} {
        color: var(${tokens.contentBeforeColor});
        fill: var(${tokens.contentBeforeColor});
    }
`;
