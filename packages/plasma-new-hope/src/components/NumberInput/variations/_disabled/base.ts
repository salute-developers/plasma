import { css } from '@linaria/core';

import { classes, tokens } from '../../NumberInput.tokens';

export const base = css`
    &&.${classes.disabled} {
        pointer-events: none;
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
