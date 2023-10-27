import { styled } from '@linaria/react';

import type { PopupRootContainerProps } from './Popup.types';
import { DEFAULT_Z_INDEX } from './utils';

export const StyledPortal = styled.div``;

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
