import { styled } from '@linaria/react';

import { DEFAULT_Z_INDEX } from '../../Popup/utils';
import { tokens } from '../Modal.tokens';

// TODO: новый отдельный оверлей #778
export const Overlay = styled.div<{
    transparent?: boolean;
    $withBlur?: boolean;
    clickable?: boolean;
    zIndex?: string;
}>`
    position: fixed;

    width: 100%;
    height: 100%;

    top: 0;
    left: 0;

    z-index: ${({ zIndex }) => zIndex || DEFAULT_Z_INDEX};

    --plasma_private-overlay-background-color: ${({ $withBlur }) =>
        $withBlur ? `var(${tokens.modalOverlayWithBlurColor})` : `var(${tokens.modalOverlayColor})`};

    --plasma_private-overlay-backdrop-filter: ${({ $withBlur }) => ($withBlur ? 'blur(1rem)' : 'none')};

    background-color: ${({ transparent }) =>
        transparent ? 'transparent' : 'var(--plasma_private-overlay-background-color)'};
    backdrop-filter: ${({ transparent }) => (transparent ? 'none' : 'var(--plasma_private-overlay-backdrop-filter)')};
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;
