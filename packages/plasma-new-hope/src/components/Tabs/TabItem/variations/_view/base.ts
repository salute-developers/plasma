import { css } from '@linaria/core';

import { tokens } from '../../../Tabs.tokens';

export const base = css`
    box-shadow: inset 0 calc(var(${tokens.underlineHeight}) * -1) 0 var(${tokens.underlineColor});
    font-weight: var(${tokens.fontWeight});
    color: var(${tokens.color});

    :hover {
        color: var(${tokens.colorHover});
        cursor: var(${tokens.cursor});
    }
`;
