import { css } from 'styled-components';

import { classes } from '../../TextFieldGroup.tokens';

export const base = css`
    &.${classes.filledStretching} {
        width: 100%;

        .${classes.textFieldGroupItem} {
            width: 100%;
        }
    }
`;
