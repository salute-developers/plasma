import { css } from 'styled-components';

import { tokens } from '../../TextField.tokens';
import { Input } from '../../TextField.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        * {
            pointer-events: none;
        }

        ${Input} {
            min-width: unset;
        }
    }
`;
