import { css } from '@linaria/core';

import { addFocus } from '../../../../mixins';
import { tokens } from '../../Avatar.tokens';

export const base = css`
    :focus-visible {
        outline: none;
    }

    ${addFocus({
        outlineOffset: `var(${tokens.outlineOffset})`,
        outlineSize: `var(${tokens.outlineSize})`,
        outlineRadius: '100%',
        outlineColor: `var(${tokens.outlineColor})`,
    })}
`;
