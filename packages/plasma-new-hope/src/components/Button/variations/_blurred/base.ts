import { css } from 'styled-components';

import { applyBlur } from '../../../../mixins';

export const base = css`
    ${applyBlur('var(--plasma_private-blur)')};
`;
