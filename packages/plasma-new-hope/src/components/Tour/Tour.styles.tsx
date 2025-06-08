import { styled } from '@linaria/react';

import { tokens } from './Tour.tokens';

export const Mask = styled.div`
    position: fixed;
    inset: 0;
    pointer-events: all;
`;

export const Highlight = styled.div`
    position: fixed;
    background: transparent;
    border-radius: var(${tokens.highlightRadius}, 0.5rem);
    box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.45);
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const TourPortal = styled.div`
    position: absolute;
`;
