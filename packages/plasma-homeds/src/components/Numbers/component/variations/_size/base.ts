import { css } from 'styled-components';

import { tokens } from '../../Numbers.tokens';

export const base = css`
    font-family: var(${tokens.fontFamily});
    font-size: var(${tokens.fontSize});
    gap: var(${tokens.minusGap});
`;
