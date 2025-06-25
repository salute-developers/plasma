import { styled } from '@linaria/react';
import { CSSProperties } from 'react';

export const MaskContainer = styled.div<{ zIndex: CSSProperties['zIndex'] }>`
    z-index: ${({ zIndex }) => zIndex || 9000};
`;

export const Mask = styled.div`
    position: fixed;
    inset: 0;
    pointer-events: all;
`;

export const Highlight = styled.div<{
    overlayColor?: CSSProperties['color'];
    borderRadius?: CSSProperties['borderRadius'] | null;
}>`
    --private-mask-color: ${({ overlayColor }) => `${overlayColor || 'rgba(0, 0, 0, 0.45)'}`};
    position: fixed;
    background: transparent;
    border-radius: ${({ borderRadius }) => borderRadius ?? 0};
    box-shadow: 0 0 0 9999px var(--private-mask-color);
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TourPortal = styled.div`
    position: absolute;
`;
