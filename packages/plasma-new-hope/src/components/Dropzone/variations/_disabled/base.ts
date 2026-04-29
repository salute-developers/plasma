import { css } from 'styled-components';

import { classes, tokens } from '../../Dropzone.tokens';

export const base = css`
    &.${classes.disabled} {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
