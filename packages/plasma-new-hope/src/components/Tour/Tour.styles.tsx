import { styled } from '@linaria/react';

import { tokens } from './Tour.tokens';

export const Card = styled.div`
    padding: var(${tokens.cardPadding}, 1rem);
    background: var(${tokens.cardBgColor}, #fff);
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
    border-radius: var(${tokens.cardRadius}, 0.75rem);
    max-width: 20rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const Title = styled.h4`
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    color: #000;
`;

export const Description = styled.p`
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #666;
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;

    > div {
        display: flex;
        gap: 0.5rem;
    }

    small {
        color: #666;
        white-space: nowrap;
    }
`;

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
