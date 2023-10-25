import { styled } from '@linaria/react';

import { PopupRootContainerProps } from './Popup.types';
import { DEFAULT_Z_INDEX } from './Popup.utils';

export const StyledPortal = styled.div``;

export const PopupView = styled.div`
    position: relative;
    max-width: 100%;
    pointer-events: all;
`;

export const PopupRootContainer = styled.div<PopupRootContainerProps>`
    position: ${(props) => (props?.frame === 'document' ? 'fixed' : 'absolute')};
    z-index: ${(props) => props?.zIndex || DEFAULT_Z_INDEX};
    left: ${(props) => props?.position.left || ''};
    right: ${(props) => props?.position.right || ''};
    top: ${(props) => props?.position.top || ''};
    bottom: ${(props) => props?.position.bottom || ''};
    transform: ${(props) => props?.position.transform || ''};
`;
