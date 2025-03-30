import { css } from '@linaria/core';

import { classes, tokens } from '../../Radiobox.tokens';

export const base = css`
    input:checked + label .${classes.radioboxTrigger} {
        background: var(${tokens.fillColor});
        border-color: var(${tokens.triggerBorderCheckedColor});
    }
`;
