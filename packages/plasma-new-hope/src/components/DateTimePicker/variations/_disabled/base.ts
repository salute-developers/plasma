import { css } from 'styled-components';

import { tokens } from '../../DateTimePicker.tokens';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;
    }
`;
