import { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { tokens } from '../../Button.tokens';

export const base = css`
    :focus {
        outline: none;
    }

    :focus-visible {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '0.125rem',
        outlineSize: 'var(--plasma_private-btn-outline-size)',
        outlineRadius: 'var(--plasma_private-btn-br)',
        outlineColor: `var(${tokens.buttonFocusColor})`,
    })}
`;
