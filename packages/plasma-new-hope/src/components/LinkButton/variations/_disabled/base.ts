import { css } from 'styled-components';

import { tokens } from '../../LinkButton.tokens';
import { LoadWrap } from '../../LinkButton.styles';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.linkButtonDisabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            color: var(${tokens.linkButtonColor});
            background: var(${tokens.linkButtonBackgroundColor});
        }

        ${LoadWrap} {
            pointer-events: none;
        }
    }
`;
