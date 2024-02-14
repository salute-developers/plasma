import { css } from '@linaria/core';

import { tokens } from '../../Drawer.tokens';
import { panelTokens } from '../../../Panel';

export const base = css`
    ${panelTokens.background}: var(${tokens.background});
    ${panelTokens.shadow}: var(${tokens.shadow});
    ${panelTokens.contentBackgroundColor}: var(${tokens.contentBackgroundColor});
`;
