import { css } from 'styled-components';

import { classes, tokens } from '../../Wheel.tokens';
import { Column, Control, Item, Items } from '../../Wheel.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        ${Column}.${classes.disabled} {
            opacity: 1;
        }
    }

    ${Column}.${classes.disabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }

    ${Items}[aria-disabled='true'],
    ${Items}[aria-disabled='true'] ${Item},
    ${Item}[aria-disabled='true'] {
        cursor: not-allowed;
    }

    ${Control}:disabled {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
