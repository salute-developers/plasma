import { css } from '@linaria/core';

import { panelTokens } from '../../../Panel';
import { tokens } from '../../Drawer.tokens';

export const base = css`
    ${panelTokens.borderRadius}: var(${tokens.borderRadius});
`;
