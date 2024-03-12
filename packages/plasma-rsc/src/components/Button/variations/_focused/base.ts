import { css } from '@linaria/core';

import { tokens } from '../../Button.tokens';
import { addFocus } from '../../../../mixins';

// TODO: focus-visible #711

export const base = css`
    :focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: 'calc(-1 * var(--plasma_private-btn-outline-size))',
        outlineSize: 'var(--plasma_private-btn-outline-size)',
        outlineRadius: 'var(--plasma_private-btn-br)',
        outlineColor: `var(${tokens.buttonFocusColor})`,
    })}
`;
