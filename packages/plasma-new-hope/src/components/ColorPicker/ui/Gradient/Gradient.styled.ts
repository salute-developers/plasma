import styled from 'styled-components';

import { tokens } from '../../ColorPicker.tokens';

export const GradientRoot = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    gap: 0.25rem;

    svg {
        stroke: #000;
    }
`;

export const GradientTypeControl = styled.button`
    all: unset;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 62.5rem;
    width: 2rem;
    height: 2rem;
    aspect-ratio: 1 / 1;
    box-sizing: border-box;
    cursor: pointer;

    &[aria-pressed='true'] {
        background-color: var(${tokens.activeTabColor});
    }
`;

export const GradientHandleRoot = styled.button`
    all: unset;
    appearance: none;
    position: absolute;
    top: 0.125rem;
`;

export const GradientBarWrapper = styled.div`
    min-height: 1rem;
    border-radius: 0.625rem;
`;
