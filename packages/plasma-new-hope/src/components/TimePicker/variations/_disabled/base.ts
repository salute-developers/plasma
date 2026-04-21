import { css } from 'styled-components';

import { tokens } from '../../TimePicker.tokens';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
