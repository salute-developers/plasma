import { css } from 'styled-components';

import { tokens } from '../Switch.tokens';

export const base = css`
    opacity: var(${tokens.disabledOpacity});

    &[disabled] {
        cursor: not-allowed;
    }
`;
