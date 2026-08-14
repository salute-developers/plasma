import { css } from 'styled-components';

import { tokens } from '../Switch.tokens';

export const base = css`
    &[disabled] {
        cursor: var(${tokens.switchCursor}, not-allowed);
        opacity: var(${tokens.disabledOpacity});
    }
`;
