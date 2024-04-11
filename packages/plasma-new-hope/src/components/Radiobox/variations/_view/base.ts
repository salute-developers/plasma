import { css } from '@linaria/core';

import { classes, tokens } from '../../Radiobox.tokens';

export const base = css`
    input:checked + label .${classes.radioboxTrigger} {
        border: none;
        background: var(${tokens.fillColor});
        border-color: var(${tokens.fillColor});
    }
`;
