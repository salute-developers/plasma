import { css } from '@linaria/core';

import { tokens } from '../../TextField.tokens';
import { Input } from '../../TextField.styles';

export const base = css`
    &[disabled] {
        pointer-events: none;
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        ${Input} {
            cursor: not-allowed;
            min-width: unset;
        }
    }
`;
