import { css } from '@linaria/core';

import { tokens } from '../Link.tokens';

export const base = css`
    &[disabled] {
        opacity: var(${tokens.linkDisabledOpacity});
        cursor: not-allowed;

        :hover,
        :active {
            color: var(${tokens.linkColor});
        }

        ::before {
            opacity: 1;
        }
    }
`;
