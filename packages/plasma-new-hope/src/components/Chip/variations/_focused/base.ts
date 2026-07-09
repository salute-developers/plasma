import { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { tokens } from '../../Chip.tokens';

export const base = css`
    --plasma_private-chip-outline-size: var(${tokens.outlineSize}, 0.063rem);

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '0.125rem',
        outlineSize: 'var(--plasma_private-chip-outline-size)',
        outlineRadius: `var(${tokens.borderRadius})`,
        outlineColor: `var(${tokens.focusColor})`,
    })}
`;
