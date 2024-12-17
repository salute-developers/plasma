import { styled } from '@linaria/react';
import { css } from '@linaria/core';
import { IconResizeDiagonal } from 'src/components/_Icon';

import { classes } from './Popup.tokens';
import type { PopupRootContainerProps } from './Popup.types';
import { DEFAULT_Z_INDEX } from './utils';

export const base = css`
    .${classes.draggablePopupWrapper} {
        cursor: grab;
    }

    .${classes.draggingPopupWrapper} {
        cursor: grabbing;
    }

    .${classes.resizableContainerNoSelect} {
        user-select: none;
        -webkit-user-select: none;
    }
`;

export const StyledPortal = styled.div``;

export const StyledPortalContainer = styled.div`
    width: 0;
`;

export const PopupView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

export const PopupRootContainer = styled.div<PopupRootContainerProps>`
    position: ${({ frame }) => (frame === 'document' ? 'fixed' : 'absolute')};
    z-index: ${({ zIndex }) => zIndex || DEFAULT_Z_INDEX};
    left: ${({ position }) => position.left || ''};
    right: ${({ position }) => position.right || ''};
    top: ${({ position }) => position.top || ''};
    bottom: ${({ position }) => position.bottom || ''};
    transform: ${({ position }) => position.transform || ''};
`;

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
