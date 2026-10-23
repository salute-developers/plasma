import { css } from 'styled-components';

import { weighted } from '../../TabBar.styles';

export const base = css`
    display: flex;
    align-items: center;
    align-self: stretch;
    justify-content: center;
    box-sizing: border-box;

    ${weighted}
`;
