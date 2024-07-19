import { styled } from '@linaria/react';
import { css } from '@linaria/core';

import { classes } from './Price.tokens';

export const base = css`
    &.${String(classes.stroked)} {
        text-decoration: line-through;
    }
`;

export const StyledPeriodicity = styled.span`
    padding-left: 0.25rem;
`;
