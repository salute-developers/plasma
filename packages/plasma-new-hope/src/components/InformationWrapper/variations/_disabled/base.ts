import { css } from 'styled-components';

import { tokens } from '../../InformationWrapper.tokens';
import { Label } from '../../InformationWrapper.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.disabledOpacity});
        cursor: not-allowed;

        ${Label} {
            cursor: not-allowed;
        }
    }
`;
