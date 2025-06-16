import { styled } from '@linaria/react';

import { tokens } from './Tour.tokens';

export const MaskContainer = styled.div<{ zIndex: string | number }>`
    z-index: ${({ zIndex }) => zIndex};
`;

export const Mask = styled.div`
    position: fixed;
    inset: 0;
    pointer-events: all;
`;

export const Highlight = styled.div<{ overlayColor?: string }>`
    --private-mask-color: ${({ overlayColor }) => `${overlayColor || 'rgba(0, 0, 0, 0.45)'}`};
    position: fixed;
    background: transparent;
    border-radius: var(${tokens.highlightRadius}, 0.5rem);
    box-shadow: 0 0 0 9999px var(--private-mask-color);
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TourPortal = styled.div`
    position: absolute;
`;
