import { css } from '@linaria/core';

import { tokens, classes } from '../../File.tokens';

export const base = css`
    &[disabled],
    &.${classes.fileDisabled} {
        opacity: var(${tokens.fileDisabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            background: var(${tokens.fileBackgroundColor});
        }
    }
`;
