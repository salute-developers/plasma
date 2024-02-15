import { styled } from '@linaria/react';

export const StyledOverlay = styled.div<{
    zIndex: string;
    backgroundColorToken: string;
    transparent?: boolean;
    withBlur?: boolean;
    clickable?: boolean;
}>`
    position: fixed;
    inset: 0;

    z-index: ${({ zIndex }) => zIndex};

    --plasma_private-overlay-background-color: ${({ backgroundColorToken }) => backgroundColorToken};

    --plasma_private-overlay-backdrop-filter: ${({ withBlur }) => (withBlur ? 'blur(1rem)' : 'none')};

    background: ${({ transparent }) =>
        transparent ? 'transparent' : 'var(--plasma_private-overlay-background-color)'};
    backdrop-filter: ${({ transparent }) => (transparent ? 'none' : 'var(--plasma_private-overlay-backdrop-filter)')};
    cursor: ${({ clickable }) => (clickable ? 'pointer' : 'default')};
`;
