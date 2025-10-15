import { styled } from '@linaria/react';
import { IconResizeDiagonal } from 'src/components/_Icon';

import { classes } from './Resizable.tokens';

export const IconResizeDiagonalStyled = styled(IconResizeDiagonal)`
    color: var(--text-secondary);

    &:hover {
        color: var(--text-secondary-hover);
    }

    &:active {
        color: var(--text-secondary-active);
    }

    &.${classes.resizableTopRightIcon} {
        transform: rotate(-90deg);
    }

    &.${classes.resizableBottomRightIcon} {
        transform: rotate(0);
    }

    &.${classes.resizableBottomLeftIcon} {
        transform: rotate(90deg);
    }

    &.${classes.resizableTopLeftIcon} {
        transform: rotate(180deg);
    }
`;
