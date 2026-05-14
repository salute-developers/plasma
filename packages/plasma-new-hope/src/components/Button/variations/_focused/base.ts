import { css } from 'styled-components';

import { tokens } from '../../Button.tokens';
import { addFocus } from '../../../../mixins';

export const base = css`
    :focus {
        outline: none;
    }

    :focus-visible {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '-0.125rem',
        outlineSize: 'var(--plasma_private-btn-outline-size)',
        outlineRadius: 'calc(0.125rem + var(--plasma_private-btn-br))',
        outlineColor: `var(${tokens.buttonFocusColor})`,
    })}
`;
