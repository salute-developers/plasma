import { css } from '@linaria/core';

import { tokens } from '../../LinkButton.tokens';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.linkButtonDisabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            color: var(${tokens.linkButtonColor});
            background: var(${tokens.linkButtonBackgroundColor});
        }
    }
`;
