import { css } from '@linaria/core';

import { applyBlur } from '../../../../mixins';

export const base = css`
    ${applyBlur('var(--plasma_private-blur)')};
`;
