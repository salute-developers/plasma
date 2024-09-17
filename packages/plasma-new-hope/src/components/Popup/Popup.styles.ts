import { styled } from '@linaria/react';

import type { PopupRootContainerProps } from './Popup.types';
import { DEFAULT_Z_INDEX } from './utils';

export const StyledPortal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${DEFAULT_Z_INDEX};

    :empty {
        width: 0;
        pointer-events: none;
    }

    :not(:empty) {
        width: auto;
        pointer-events: auto;
    }
`;

export const StyledPortalContainer = styled.div`
    width: 0;
`;

export const PopupView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

export const PopupRootContainer = styled.div<PopupRootContainerProps>`
    position: absolute;
    z-index: ${({ zIndex }) => zIndex || DEFAULT_Z_INDEX};
    left: ${({ position }) => position.left || ''};
    right: ${({ position }) => position.right || ''};
    top: ${({ position }) => position.top || ''};
    bottom: ${({ position }) => position.bottom || ''};
    transform: ${({ position }) => position.transform || ''};
`;
