import { css } from 'styled-components';

import { privateTokens, tokens } from '../../../../../tokens';

export const base = css`
    width: var(${tokens.tabsWidth});
    height: var(${tokens.tabsHeight});

    ${privateTokens.outlineRadius}: var(${tokens.tabsBorderRadius});
    border-radius: var(${tokens.tabsBorderRadius});
`;
