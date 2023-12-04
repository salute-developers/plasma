import { css } from '@linaria/core';

import { tokens } from '../../Chip.tokens';
import { addFocus } from '../../../../mixins';

export const base = css`
    --plasma_private-chip-outline-size: var(${tokens.outlineSize}, 0.125rem);

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: 'calc(-1 * var(--plasma_private-chip-outline-size))',
        outlineSize: 'var(--plasma_private-chip-outline-size)',
        outlineRadius: `calc(var(${tokens.borderRadius}) + var(--plasma_private-chip-outline-size))`,
        outlineColor: `var(${tokens.focusColor})`,
    })}
`;
