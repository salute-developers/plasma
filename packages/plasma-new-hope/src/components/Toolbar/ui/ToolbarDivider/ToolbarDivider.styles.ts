import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { tokens } from '../../Toolbar.tokens';

export const base = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledToolbarDivider = styled.div`
    background: var(${tokens.dividerColor});
`;
