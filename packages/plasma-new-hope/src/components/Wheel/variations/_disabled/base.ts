import { css } from 'styled-components';

import { classes, tokens } from '../../Wheel.tokens';
import { Column, Control, Item } from '../../Wheel.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});

        ${Column}.${classes.disabled} {
            opacity: 1;
        }
    }

    ${Column}.${classes.disabled} {
        opacity: var(${tokens.disabledOpacity});
    }

    ${Item}[aria-disabled='true'] {
        cursor: default;
    }

    ${Control}:disabled {
        opacity: var(${tokens.disabledOpacity});
        cursor: default;
    }
`;
