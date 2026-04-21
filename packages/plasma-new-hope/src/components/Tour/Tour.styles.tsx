import styled from 'styled-components';
import { CSSProperties } from 'react';

import { privateTokens, tokens } from './Tour.tokens';

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
    disableTransition?: boolean;
    withOverlay?: boolean;
}>`
    ${privateTokens.maskColor}: ${({ overlayColor }) => overlayColor || `var(${tokens.overlayColor})`};

    position: fixed;
    background: transparent;
    border-radius: ${({ borderRadius }) => borderRadius ?? 0};
    box-shadow: ${({ withOverlay }) => (withOverlay ? `0 0 0 9999px var(${privateTokens.maskColor})` : 'none')};
    pointer-events: none;

    /* stylelint-disable */
    transition: ${({ disableTransition }) =>
        disableTransition
            ? 'none'
            : 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), top 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.3s cubic-bezier(0.4, 0, 0.2, 1)'};
    /* stylelint-enable */
`;

export const TourPortal = styled.div`
    outline: none;
`;
