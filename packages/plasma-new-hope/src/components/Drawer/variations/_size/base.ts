import { css } from 'styled-components';

import { tokens } from '../../Drawer.tokens';
import { panelTokens } from '../../../Panel';

export const base = css`
    ${panelTokens.padding}: var(${tokens.padding});
`;
