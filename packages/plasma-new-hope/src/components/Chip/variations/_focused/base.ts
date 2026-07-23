import { css } from 'styled-components';
import { addFocus } from 'src/mixins';

import { privateTokens, tokens } from '../../Chip.tokens';

export const base = css`
    ${privateTokens.privateOutlineSize}: var(${tokens.outlineSize}, 0.063rem);

    :focus {
        outline: none;
    }

    ${addFocus({
        outlineOffset: '0.125rem',
        outlineSize: `var(${privateTokens.privateOutlineSize})`,
        outlineRadius: `var(${tokens.borderRadius})`,
        outlineColor: `var(${tokens.focusColor})`,
    })}
`;
