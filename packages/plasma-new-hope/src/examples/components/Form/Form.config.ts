import { css } from 'styled-components';

import { formTokens as tokens } from '../../../components/Form';

const gap = css`
    ${tokens.gap}: 1.5rem;
`;

export const config = {
    defaults: {
        orientation: 'vertical',
    },
    variations: {
        orientation: {
            vertical: gap,
            horizontal: gap,
        },
    },
};
