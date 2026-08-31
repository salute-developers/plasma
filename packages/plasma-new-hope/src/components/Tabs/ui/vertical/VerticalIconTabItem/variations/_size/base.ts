import { css } from 'styled-components';

import { privateTokens, tokens } from '../../../../../tokens';

export const base = css`
    ${privateTokens.outlineRadius}: var(${tokens.itemBorderRadius});
    border-radius: var(${tokens.itemBorderRadius});
    padding: var(${tokens.itemPaddingOrientationVertical});
`;
