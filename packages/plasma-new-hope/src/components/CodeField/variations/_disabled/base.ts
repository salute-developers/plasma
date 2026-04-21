import { css } from 'styled-components';

import { tokens } from '../../CodeField.tokens';

export const base = css`
    &&[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        & > * {
            pointer-events: none;
        }
    }
`;
