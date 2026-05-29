import { css } from 'styled-components';

import { tokens } from '../../../../tokens';

export const base = css`
    width: var(${tokens.groupWidth});
    height: var(${tokens.groupHeight});
    border-radius: var(${tokens.groupBorderRadius});
`;
